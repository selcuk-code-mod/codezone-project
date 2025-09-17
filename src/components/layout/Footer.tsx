import React from "react";
import Link from "next/link";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-my-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Newsletter Bölümü */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            GELİŞMELERDEN İLK SEN HABERDAR OL!
          </h3>
          <div className="flex">
            <div className="relative flex-grow">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full pl-10 pr-4 py-2 bg-my-primary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-my-secondary"
              />
            </div>
            <button className="bg-my-secondary text-my-primary px-4 py-2 ml-2 rounded-md flex items-center">
              <span className="mr-2">GÖNDER</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Footer Linkleri */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-4">SAYFALAR</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/haberler" className="hover:text-my-secondary">
                  HABERLER
                </Link>
              </li>
              <li>
                <Link href="/etkinlikler" className="hover:text-my-secondary">
                  ETKİNLİKLER
                </Link>
              </li>
              <li>
                <Link href="/muzikler" className="hover:text-my-secondary">
                  MÜZİKLER
                </Link>
              </li>
              <li>
                <Link href="/videolar" className="hover:text-my-secondary">
                  VİDEOLAR
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-my-secondary">
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya Linkleri */}
          <div>
            <h4 className="font-bold mb-4">PLATFORMLARDA BİZİ TAKİP EDİN!</h4>
            <div className="flex space-x-4">
              {/* Sosyal medya iconları eklenecek */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container text-center mt-8 text-gray-400">
        © RAPKOLOGY All Rights Are Reserved 2022.
      </div>
    </footer>
  );
};

export default Footer;
