"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Button from "./Button";
import { DeliveryProductEnum } from "@/constants/enum";
import axiosInstance, { baseApi } from "@/config/axios";
import { API_URL_USER } from "@/services/http-url_user";
export type OrderInfo = {
  productId: string;
  amount: number;
  payAmount: number;
  fullname: string;
  phone: string;
  email: string;
  address: string;
  delivery: DeliveryProductEnum;
  price: number;
};
export type ProductInfo = {
  name: string;
  amount: number;
  price: number;
  totalSold: number;
  origin: string;
  company: string;
  placeOfProduction: string;
  urlIMG: string;
  isActive: boolean;
  id: string;
};

export default function Modal(props: any) {
  const [open, setOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    delivery: DeliveryProductEnum.EXPRESS,
  } as OrderInfo);
  const product: ProductInfo = props.product;

  const clickBuy = async () => {
    setOpen(!open);
  };
  const buyNow = async () => {
    await axiosInstance.post(API_URL_USER.ORDERS.CREATE_ORDER, orderInfo);

    clickBuy();
  };

  const handleChange = (e: any) => {
    const newOrder = {
      ...orderInfo,
      [e.target.name]:
        e.target.name === "price" || e.target.name === "amount"
          ? Number(e.target.value)
          : e.target.value,
    };

    if (e.target.name === "amount") {
      newOrder.payAmount = Number(e.target.value) * Number(orderInfo.price);
    }
    setOrderInfo(newOrder);
  };

  useInitOrder(setOrderInfo, orderInfo, product);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Button label="Mua hàng" onClick={clickBuy} />
        {open && (
          <div className="bg-gray-800	fixed top-0 left-0 right-0 bottom-0 inset-0 z-30 flex justify-center">
            <div className="me-xl-0 detail  pl-[25px]  pr-[25px]  pt-[75px] pb-[75px] bg-white z-31">
              <p className="text-xl text-[40px]	font-semibold uppercase">
                Bạn đang đặt hàng tại Shopsinhly90
              </p>
              <p className="text-xl text-[24px]	font-semibold uppercase">
                Hot line : 0337118801
              </p>
              <div className="grid grid-cols-2 min-w-[998px] min-h-[892px]">
                <div className="col-span-1 bg-blue max-h-full	 flex justify-center items-center	">
                  <img
                    src={`${baseApi + "/" + product.urlIMG}`}
                    className="max-w-[499px]"
                    alt="any"
                  />
                </div>
                <form
                  className="max-h-full pt-[40px] pl-[30px] mt-[40px]"
                  onChange={handleChange}
                  onSubmit={async (event) => {
                    event.preventDefault();
                    await buyNow();
                  }}>
                  <div className="col-span-1 	bg-red ">
                    <p className="text-xl text-[30px]	font-semibold uppercase text-left mb-[20px]">
                      Phiếu mua hàng :
                    </p>
                    <p className="text-xl text-left">
                      Tên sản phẩm : {product.name}
                    </p>
                    <p className="text-xl text-left">
                      Nơi sản xuất : {product.placeOfProduction}
                    </p>
                    <div className="flex justify-items-start mt-[10px] mb-[10px] ">
                      <input
                        type="text"
                        name="fullname"
                        value={orderInfo.fullname}
                        className="min-w-[100%] min-h-[40px] border border-slate-400 p-[10px]"
                        placeholder="Họ và tên"
                        required
                      />
                    </div>
                    <div className="flex justify-items-start mt-[10px] mb-[10px]">
                      <input
                        type="text"
                        name="phone"
                        value={orderInfo.phone}
                        className="min-w-[100%] min-h-[40px] border border-slate-400 p-[10px]"
                        placeholder="Số điện thoại"
                        required
                      />
                    </div>
                    <div className="flex justify-items-start mt-[10px] mb-[10px]">
                      <input
                        type="email"
                        name="email"
                        value={orderInfo.email}
                        className="min-w-[100%] min-h-[40px] border border-slate-400 p-[10px]"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="flex justify-items-start mt-[10px] mb-[10px]">
                      <input
                        type="text"
                        className="min-w-[100%] min-h-[40px] border border-slate-400 p-[10px]"
                        name="address"
                        value={orderInfo.address}
                        placeholder="Địa chỉ người nhận"
                        required
                      />
                    </div>

                    <div className="flex justify-items-start mt-[10px] mb-[10px]">
                      <input
                        type="number"
                        name="amount"
                        value={orderInfo.amount}
                        className="min-h-[40px] border border-slate-400 p-[10px] mr-[10px]"
                        placeholder="Số Lượng"
                        required
                      />
                      <input
                        type="number"
                        name="price"
                        className="min-h-[40px] border border-slate-400 p-[10px] mr-[10px]"
                        placeholder="Giá"
                        value={orderInfo.price}
                        disabled
                        required
                      />
                      <input
                        type="number"
                        name="payAmount"
                        className="min-h-[40px] border border-slate-400 p-[10px]"
                        placeholder="Tổng tiền"
                        value={orderInfo.payAmount}
                        disabled
                        required
                      />
                    </div>
                    <div className="flex justify-items-start mb-[30px]">
                      <select
                        id="countries"
                        name="delivery"
                        value={orderInfo.delivery}
                        defaultValue={"EXPRESS"}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Chọn Phương Thức Giao Hàng</option>
                        <option value="EXPRESS">Hỏa Tốc</option>
                        <option value="FAST">Nhanh</option>
                        <option value="SLOW">Chậm</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <button
                      type="submit"
                      className="min-w-[200px] justify-center min-h-[50x] py-2 px-4 flex gap-3 items-center border border-black hover:text-white hover:bg-primary hover:border-primary">
                      <span className="uppercase">Đặt hàng</span>
                    </button>
                    <button
                      onClick={clickBuy}
                      className="min-w-[200px] text-white	 justify-center min-h-[50x] py-2 px-4 flex gap-3 items-center border border-black hover:text-white bg-red-500 hover:bg-primary hover:border-primary">
                      <span className="uppercase">Hủy</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function useInitOrder(
  setOrderInfo: Function,
  orderInfo: OrderInfo,
  product: ProductInfo
) {
  useEffect(() => {
    setOrderInfo({
      ...orderInfo,
      price: product?.price ?? 0,
      payAmount: product?.price ?? 0,
      productId: product?.id ?? 0,
    });
  }, []);
}
