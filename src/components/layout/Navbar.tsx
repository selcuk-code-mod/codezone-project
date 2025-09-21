"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Slant as Hamburger } from "hamburger-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-my-background/10 backdrop-blur-[24px] py-4 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="pr-24">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rapkology Logo"
                width={235}
                height={60}
                className="w-40 h-10 sm:w-60 sm:h-16 lg:w-[235px] lg:h-[60px]"
              />
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden lg:flex space-x-8 tracking-wider">
            <Link
              href="/haberler"
              className="text-white hover:text-my-primary transition-colors font-saira text-sm"
            >
              HABERLER
            </Link>
            <Link
              href="/etkinlikler"
              className="text-white hover:text-my-primary transition-colors font-saira text-sm"
            >
              ETKİNLİKLER
            </Link>
            <Link
              href="/muzikler"
              className="text-white hover:text-my-primary transition-colors font-saira text-sm"
            >
              MÜZİKLER
            </Link>
            <Link
              href="/videolar"
              className="text-white hover:text-my-primary transition-colors font-saira text-sm"
            >
              VİDEOLAR
            </Link>
            <Link
              href="/iletisim"
              className="text-white hover:text-my-primary transition-colors font-saira text-sm"
            >
              İLETİŞİM
            </Link>
          </div>
        </div>

        {/* Desktop Sağ Taraf */}
        <div className="hidden lg:flex items-center space-x-8.5">
          <FaMagnifyingGlass className="text-white hover:text-my-primary transition-colors w-5.5 h-5.5 cursor-pointer" />
          {/* Giriş Butonu */}
          <button className="cursor-pointer bg-white hover:bg-my-primary transition-colors font-bold text-black px-9 py-2.5 rounded-sm flex items-center space-x-2 font-saira text-sm">
            GİRİŞ YAP
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex lg:hidden items-center space-x-4">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#efe74d"
            size={32}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/85 backdrop-blur-[24px] mt-4 py-6 px-4">
            <div className="flex flex-col space-y-4">
              <FaMagnifyingGlass className="text-white hover:text-my-primary transition-colors w-5.5 h-5.5 cursor-pointer" />
              <Link
                href="/haberler"
                className="text-white hover:text-my-primary transition-colors font-saira text-sm"
              >
                HABERLER
              </Link>
              <Link
                href="/etkinlikler"
                className="text-white hover:text-my-primary transition-colors font-saira text-sm"
              >
                ETKİNLİKLER
              </Link>
              <Link
                href="/muzikler"
                className="text-white hover:text-my-primary transition-colors font-saira text-sm"
              >
                MÜZİKLER
              </Link>
              <Link
                href="/videolar"
                className="text-white hover:text-my-primary transition-colors font-saira text-sm"
              >
                VİDEOLAR
              </Link>
              <Link
                href="/iletisim"
                className="text-white hover:text-my-primary transition-colors font-saira text-sm"
              >
                İLETİŞİM
              </Link>

              {/* Mobile Giriş Butonu */}
              <button className="cursor-pointer bg-white hover:bg-my-primary transition-colors font-bold text-black px-9 py-2.5 rounded-sm flex items-center justify-center space-x-2 font-saira text-sm">
                GİRİŞ YAP
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
