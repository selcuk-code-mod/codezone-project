import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-my-background/10 backdrop-blur-[24px] py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="pr-24">
            <Image
              src="/logo.png"
              alt="Rapkology Logo"
              width={235}
              height={60}
            />
          </div>
          {/* Menü Linkleri */}
          <div className="flex space-x-8 tracking-wider ">
            <Link
              href="/haberler"
              className="text-white hover:text-my-secondary  transition-colors font-saira text-sm"
            >
              HABERLER
            </Link>
            <Link
              href="/etkinlikler"
              className="text-white hover:text-my-secondary transition-colors font-saira text-sm"
            >
              ETKİNLİKLER
            </Link>
            <Link
              href="/muzikler"
              className="text-white hover:text-my-secondary transition-colors font-saira text-sm"
            >
              MÜZİKLER
            </Link>
            <Link
              href="/videolar"
              className="text-white hover:text-my-secondary transition-colors font-saira text-sm"
            >
              VİDEOLAR
            </Link>
            <Link
              href="/iletisim"
              className="text-white hover:text-my-secondary transition-colors font-saira text-sm"
            >
              İLETİŞİM
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-8.5">
          <FaMagnifyingGlass className="text-white w-5.5 h-5.5 cursor-pointer" />
          {/* Giriş Butonu */}
          <button className="cursor-pointer bg-white font-bold text-black px-9 py-2.5 rounded-sm flex items-center space-x-2 font-saira text-sm">
            GİRİŞ YAP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
