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
            <strong>Liên hệ:</strong> (+84) 090 4526829 <br />
            <strong>Email:</strong> sinhlyshop90@gmail.com <br />
            <strong>Hà Nội</strong>: Phường Trung Tự, quận Đống Đa, Hà Nội -
            Phường Quan Hoa, quận Cầu Giấy, Hà Nội
          </p>
          <p>
            Sinh ly x Shop 90 <br />
          </p>

          <p>
            <strong>Sài Gòn</strong>: Quận Phú Nhuận, thành phố Hồ Chí Minh{" "}
            <br />
            <strong>Địa chỉ trụ sở chính</strong>:Phố Mai Anh Tuấn, Phường Ô Chợ
            Dừa, Quận Đống Đa, TP Hà Nội, Việt Nam Điện thoại: 090 4526829
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
