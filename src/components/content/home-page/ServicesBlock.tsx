import React from "react";

function ServicesBlock() {
  return (
    <div className="grid md:grid-cols-3 gap-[1px] bg-slate-300 text-secondary">
      <div className="p-[10%] bg-tertiary">
        <h2 className="font-semibold">HỖ TRỢ PHÍ SHIP</h2>
        <p className="text-sm">
          Mua 02 sản phẩm bất kì giảm 30.000đ/ đơn Mua 01 sản phẩm túi + 01 sản
          phẩm ví giảm 20.000đ/ đơn Mua 02 sản phẩm ví giảm 10.000đ/ đơn
        </p>
      </div>
      <div className="p-[10%] bg-tertiary">
        <h2 className="font-semibold">BẢO HÀNH</h2>
        <p className="text-sm">
          Khách hàng có thể 1 đổi 1 trong 7 ngày (Với những lỗi do nhà sản xuất)
        </p>
      </div>
      <div className="p-[10%] bg-tertiary">
        <h2 className="font-semibold">HÌNH THỨC THANH TOÁN</h2>
        <p className="text-sm">Thanh toán khi nhận hàng và chuyển khoản</p>
      </div>
    </div>
  );
}

export default ServicesBlock;
