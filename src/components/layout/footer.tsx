/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-5 py-10 border-t lg:px-[10%]">
        <Link href="/" aria-label="">
          <img
            src="/images/logo-1.png"
            width={140}
            className="object-scale-down mb-5"
            alt=""
          />
        </Link>
        <div className="grid md:grid-cols-3 gap-10 items-end text-sm mb-3">
          <p>
            <strong>Liên hệ:</strong> (+84) 855 225 895 <br />
            <strong>Email:</strong> sinhlyshop90@gmail.com <br />
            <strong>Hà Nội</strong>: 07 Đặng Văn Ngữ, phường Trung Tự, quận Đống
            Đa, Hà Nội - 115A Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội
          </p>
          <p>
            Sinh ly x Shop 90 <br /> Tầng 2 Aeon Mall Long Biên
          </p>

          <p>
            <strong>Sài Gòn</strong>: 104 Lê Văn Sỹ, phường 11, quận Phú Nhuận,
            thành phố Hồ Chí Minh CÔNG TY CỔ PHẦN MIFAS GCNĐKDN số 0110069011 do
            Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 21/07/2022 <br />
            <strong>Địa chỉ trụ sở chính</strong>: Tầng 4, số 2 phố Mai Anh
            Tuấn, Phường Ô Chợ Dừa, Quận Đống Đa, TP Hà Nội, Việt Nam Điện
            thoại: 0362008007 Email: tuixachlesac@gmail.com
          </p>
        </div>
        <Image
          src="/images/dathongbaobocongthuong.png"
          alt="bo cong thuong"
          width={150}
          height={100}
        />
      </div>
      <div className="text-white bg-black p-2 text-sm text-center">
        © LESAC, all rights reserved | Điều khoản sử dụng Chính sách bảo mật |
        Chính sách Cookie
      </div>
    </footer>
  );
}

export default Footer;
