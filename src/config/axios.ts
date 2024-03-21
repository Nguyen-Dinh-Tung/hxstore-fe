import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  CancelTokenStatic,
  CancelTokenSource,
  CancelToken,
} from "axios";
import * as httpCode from "@/constants/http-code";
export const baseApi: string = process.env.NEXT_PUBLIC_API_URL || "";

class Axios {
  private instance: AxiosInstance;
  private cancelToken: CancelTokenStatic = axios.CancelToken;
  private cancelTokens: CancelTokenSource[] = [];
  private isRefreshedToken: Boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL: baseApi,
      timeout: 30000,
    });
    this.instance.defaults.headers.common["timezone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );

    this.instance.interceptors.request.use((config: any) => {
      const source: CancelTokenSource = this.cancelToken.source();
      config.cancelToken = source.token;
      this.cancelTokens.push(source);
      return config;
    });
  }
  /**
   * Hàm set token
   *
   * @param token string token
   * @returns void
   */
  public setToken(token: string): void {
    this.instance.defaults.headers.common["Authorization"] = token;
  }

  /**
   * Hàm xóa token
   *
   * @returns void
   */
  public removeToken(): void {
    this.instance.defaults.headers.common["Authorization"] = "";
  }

  /**
   * Hàm xóa cancel token
   *
   * @param token CancelToken token in array cancelTokens
   * @return void
   */
  private removeCancelToken = (token: CancelToken | undefined): void => {
    if (!token) return;

    this.cancelTokens.map((cancelToken, index) => {
      const tokenSource = cancelToken.token;
      if (tokenSource === token) {
        this.cancelTokens.splice(index, 1);
      }
    });
  };

  /**
   * Hàm hủy toàn bộ request
   *
   * @return void
   */

  private cancelAllRequests = (): void => {
    for (const source of this.cancelTokens) {
      source.cancel("Canceled by system");
    }

    this.cancelTokens = [];
  };

  private handleSuccess(response: AxiosResponse) {
    const cancelToken: CancelToken | undefined = response.config.cancelToken;
    axiosInstance.removeCancelToken(cancelToken);
    const data = response.data.docs;
    return data;
  }

  private async awaitRefreshToken(count: number = 0) {
    if (count >= 10) return;
    if (!axiosInstance.isRefreshedToken) return;

    await new Promise((resolve) => setTimeout(resolve, 500));
    await axiosInstance.awaitRefreshToken(count + 1);
  }

  private async handleError(error: AxiosError) {
    const cancelToken: CancelToken | undefined = error.config?.cancelToken;
    axiosInstance.removeCancelToken(cancelToken);

    const response: AxiosResponse | undefined = error.response;

    if (!response) {
      // lỗi server không phản hồi
    }

    const status: number | undefined = response?.status;
    let data = response?.data?.data;

    switch (status) {
      case httpCode.HTTP_UNAUTHORIZED:
        // xử lý hết hạn phiên đăng nhập
        // refresh token
        break;

      case httpCode.HTTP_UNPROCESSABLE_ENTITY:
        data = data.data;
        break;

      default:
        break;
    }
    return Promise.reject({
      data,
      status: status || httpCode.HTTP_INTERNAL_SERVER_ERROR,
    });
  }

  /**
   * Hàm request get
   *
   * @param url url request
   * @param params parameter request
   * @return Promise<any>
   */
  public get = async (url: string, params?: any): Promise<any> => {
    return await this.instance.get(url, { params });
  };

  /**
   * Hàm request post
   *
   * @param url url request
   * @param body body request
   * @return Promise<any>
   */
  public post = async (url: string, body?: any, params?: any): Promise<any> => {
    return await this.instance.post(url, body, { params });
  };

  /**
   * Hàm request put
   *
   * @param url url request
   * @param body body request
   * @return Promise<any>
   */
  public put = async (url: string, body?: any): Promise<any> => {
    return await this.instance.put(url, body);
  };

  /**
   * Hàm request patch
   *
   * @param url url request
   * @param body body request
   * @return Promise<any>
   */
  public patch = async (url: string, body?: any): Promise<any> => {
    return await this.instance.patch(url, body);
  };

  /**
   * Hàm request delete
   *
   * @param url url request
   * @return Promise<any>
   */
  public delete = async (url: string, body?: any): Promise<any> => {
    return await this.instance.delete(url, body);
  };
}

var axiosInstance = new Axios();
export default axiosInstance;
