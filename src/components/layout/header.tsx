/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../ui/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full z-30 bg-white border-y">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu */}
          <div className="relative">
            <button
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={handleMenuToggle}
              aria-controls="mobile-nav"
              aria-expanded={isOpen ? "true" : "false"}>
              <span className="sr-only">Menu</span>
              <svg
                className="w-8 fill-current text-black transition duration-150 ease-in-out"
                viewBox="0 0 30 24"
                xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="30" height="2.5" rx="1" />
                <rect y="12" width="30" height="2.5" rx="1" />
                <rect y="18" width="30" height="2.5" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <nav
              id="mobile-nav"
              className={`absolute top-full z-20 left-0 min-w-[200px] w-full overflow-hidden transition-all duration-300 ease-in-out shadow-xl ${
                isOpen ? "max-h-[500px] opacity-1" : "max-h-0 opacity-[0.8]"
              }`}
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}>
              <ul className="bg-white">
                <li>
                  <Link
                    href="/"
                    className="flex px-4 hover:bg-primary hover:text-white py-2">
                    Bộ sưu tập
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex px-4 hover:bg-primary hover:text-white py-2">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex px-4 hover:bg-primary hover:text-white py-2">
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex px-4 hover:bg-primary hover:text-white py-2">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex px-4 hover:bg-primary hover:text-white py-2">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Site branding */}
          <div className="mx-auto">
            <Link href="/" aria-label="">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
