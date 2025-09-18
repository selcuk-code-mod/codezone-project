"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaTiktok,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { exploreCategories } from "@/lib/dummyData";
import articlesData from "../../../../dummy.json";
import { FaRegCompass } from "react-icons/fa6";

// Makale tipi tanımı
interface Article {
  _id: string;
  attributes: {
    img: string;
    title: string;
    content: string;
    authors: string[];
    avatar: string;
  };
  createdAt: string;
}

export const ExploreSection = () => {
  // İlk 5 makaleyi al
  const articles = (articlesData as unknown as Article[]).slice(0, 5);

  // Layout mode state - false: horizontal layout, true: vertical layout
  const [isVerticalLayout, setIsVerticalLayout] = useState(false);

  // Tarih formatlama fonksiyonu
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#121212] text-white py-8 md:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Horizontal Layout (Default) */}
        {!isVerticalLayout && (
          <>
            {/* Desktop Horizontal Layout */}
            <div className="hidden lg:block">
              {/* Üst Bar */}
              <div className="grid grid-cols-3">
                {/* Sol - Keşfet ve Icon */}
                <div className="flex flex-col space-y-12 col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h1 className="text-4xl font-bold font-['Saira_Condensed'] uppercase">
                        KEŞFET
                      </h1>
                      <FaRegCompass className="text-4xl text-my-primary" />
                    </div>

                    {/* Orta - 3 Icon */}
                    <div className="flex items-center gap-4 pe-12">
                      <FaSearch className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                      <RxHamburgerMenu className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                      <button
                        onClick={() => setIsVerticalLayout(true)}
                        className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors"
                      >
                        <AiOutlineBars />
                      </button>
                    </div>
                  </div>

                  {/* Keşfet altında kartlar row olarak */}
                  <div className="flex flex-col gap-5 pb-4 mb-16 ">
                    {articles.map((article: Article) => (
                      <div
                        key={article._id}
                        className="flex bg-my-background rounded-lg overflow-hidden w-full flex-shrink-0"
                      >
                        {/* Sol - Resim */}
                        <div className="flex flex-col gap-2 w-72 h-56 flex-shrink-0">
                          <div>
                            <Image
                              src={article.attributes.img}
                              alt={article.attributes.title}
                              width={288}
                              height={176}
                              className="object-cover "
                            />
                          </div>
                          <div className="text-lg text-my-border pt-4 font-normal font-['Saira_Condensed']">
                            {formatDate(article.createdAt)}
                          </div>
                        </div>

                        {/* Sağ - İçerik */}
                        <div className="flex flex-col justify-between p-4 flex-1 gap-10">
                          {/* Üst Kısım - Yazar ve Tarih */}
                          <div className="flex flex-col gap-3 mb-2">
                            <div className="text-white flex flex-row space-x-2 rounded-full overflow-hidden">
                              <div className="w-6 h-6">
                                <Image
                                  src={article.attributes.avatar}
                                  alt="Yazar"
                                  width={24}
                                  height={24}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div>
                                <span className="text-my-secondary/70 text-sm font-normal font-['Saira_Condensed']">
                                  {article.attributes.authors[0]}
                                </span>
                              </div>
                            </div>

                            <div className="mt-6">
                              <h3 className="text-white uppercase text-lg font-bold font-['Saira_Condensed'] leading-tight line-clamp-2 mb-2">
                                {article.attributes.content}
                              </h3>
                            </div>
                            <div className="border-b border-my-border"></div>
                          </div>

                          {/* Makale Başlığı */}

                          {/* Alt Kısım - Tarih ve Buton */}
                          <div className="flex justify-between items-center">
                            <button className="text-white text-xs font-normal font-['Saira_Condensed'] hover:text-my-primary transition-colors duration-300">
                              Daha Fazla Oku
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sağ - Ne Görmek İstersin ve Badges */}
                <div className="flex flex-col items-end col-span-1">
                  <h2 className="text-3xl font-bold font-['Saira_Condensed'] uppercase mb-4">
                    NE GÖRMEK İSTERSİN?
                  </h2>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {exploreCategories.slice(0, 4).map((category, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 rounded-sm border text-xs font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
                          category === "Yabancı Rap"
                            ? "bg-my-primary text-black border-my-primary"
                            : "bg-transparent text-white border-white hover:border-my-primary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Horizontal Layout */}
            <div className="lg:hidden">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold font-['Saira_Condensed'] uppercase mb-4">
                  KEŞFET
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold font-['Saira_Condensed'] uppercase mb-4">
                  NE GÖRMEK İSTERSİN?
                </h2>
              </div>

              {/* Kategori Etiketleri - Mobile */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-4">
                {exploreCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-xs md:text-sm font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
                      category === "Yabancı Rap"
                        ? "bg-my-primary text-black border-my-primary"
                        : "bg-transparent text-white border-white hover:border-my-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile/Tablet için responsive grid */}
              <div className="grid grid-cols-1 gap-4 mb-16">
                {articles.map((article: Article) => (
                  <div
                    key={`mobile-${article._id}`}
                    className="flex bg-[#1a1a1a] rounded-lg overflow-hidden"
                  >
                    {/* Sol - Resim */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <Image
                        src={article.attributes.img}
                        alt={article.attributes.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Sağ - İçerik */}
                    <div className="flex flex-col justify-between p-3 md:p-4 flex-1">
                      {/* Üst Kısım - Yazar ve Tarih */}
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-600 rounded-full overflow-hidden">
                          <Image
                            src={article.attributes.avatar}
                            alt="Yazar"
                            width={24}
                            height={24}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <span className="text-white text-xs md:text-sm font-normal font-['Saira']">
                          {article.attributes.authors[0]}
                        </span>
                      </div>

                      {/* Makale Başlığı */}
                      <h3 className="text-white text-xs md:text-sm font-bold font-['Saira_Condensed'] uppercase leading-tight line-clamp-2 mb-2">
                        {article.attributes.title}
                      </h3>

                      {/* Alt Kısım - Tarih ve Buton */}
                      <div className="flex justify-between items-center">
                        <span className="text-[#3B3B3B] text-xs font-normal font-['Saira']">
                          {formatDate(article.createdAt)}
                        </span>
                        <button className="text-white text-xs font-normal font-['Saira'] hover:text-my-primary transition-colors duration-300">
                          Daha Fazla Oku
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Vertical Layout */}
        {isVerticalLayout && (
          <>
            {/* Üst Bar - Vertical Layout */}
            <div className="flex justify-center items-center mb-8">
              <div className="flex items-center gap-6">
                <FaSearch className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                <FaBell className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                <button
                  onClick={() => setIsVerticalLayout(false)}
                  className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors"
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>

            {/* Vertical Content */}
            <div className="text-center space-y-8 mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold font-['Saira_Condensed'] uppercase">
                KEŞFET
              </h1>

              <h2 className="text-2xl lg:text-4xl font-bold font-['Saira_Condensed'] uppercase">
                NE GÖRMEK İSTERSİN?
              </h2>

              {/* Badges - Vertical */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {exploreCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-xs md:text-sm font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
                      category === "Yabancı Rap"
                        ? "bg-my-primary text-black border-my-primary"
                        : "bg-transparent text-white border-white hover:border-my-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical Layout - Kartlar alt alta */}
            <div className="space-y-4 mb-16 max-w-lg mx-auto">
              {articles.map((article: Article) => (
                <div
                  key={`vertical-${article._id}`}
                  className="flex bg-[#1a1a1a] rounded-lg overflow-hidden"
                >
                  {/* Sol - Resim */}
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={article.attributes.img}
                      alt={article.attributes.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Sağ - İçerik */}
                  <div className="flex flex-col justify-between p-4 flex-1">
                    {/* Üst Kısım - Yazar ve Tarih */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-gray-600 rounded-full overflow-hidden">
                        <Image
                          src={article.attributes.avatar}
                          alt="Yazar"
                          width={24}
                          height={24}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-white text-sm font-normal font-['Saira']">
                        {article.attributes.authors[0]}
                      </span>
                    </div>

                    {/* Makale Başlığı */}
                    <h3 className="text-white text-sm font-bold font-['Saira_Condensed'] uppercase leading-tight line-clamp-2 mb-2">
                      {article.attributes.title}
                    </h3>

                    {/* Alt Kısım - Tarih ve Buton */}
                    <div className="flex justify-between items-center">
                      <span className="text-[#3B3B3B] text-xs font-normal font-['Saira']">
                        {formatDate(article.createdAt)}
                      </span>
                      <button className="text-white text-xs font-normal font-['Saira'] hover:text-my-primary transition-colors duration-300">
                        Daha Fazla Oku
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Daha Fazla Gör Butonu - Sadece Vertical Layout'ta */}
            <div className="text-center mb-16">
              <button className="bg-my-primary text-black px-8 py-3 rounded-full font-bold hover:opacity-80 transition-opacity">
                DAHA FAZLA GÖR
              </button>
            </div>
          </>
        )}

        {/* Gelişmelerden İlk Sen Haberdar Ol */}
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-4xl font-bold font-['Saira_Condensed'] uppercase mb-6">
            GELİŞMELERDEN İLK SEN HABERDAR OL!
          </h3>
        </div>

        {/* Newsletter ve Sosyal Medya Bölümü */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Newsletter Kayıt Formu */}
          <div className="flex items-center gap-4">
            <span className="text-white text-sm font-bold font-['Saira'] leading-[14px]">
              EMAIL
            </span>
            <div className="w-6 h-px bg-[#3B3B3B]"></div>
            <button className="flex items-center gap-2 text-my-primary font-bold text-sm font-['Saira'] leading-[14px] hover:opacity-80 transition-opacity">
              GÖNDER
              <FaArrowRight />
            </button>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex items-center gap-5">
            <FaInstagram className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
            <FaTwitter className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
            <FaYoutube className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
            <FaSpotify className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
            <FaTiktok className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
          </div>
        </div>

        {/* Footer Linkleri */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Navigasyon Linkleri */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm order-2 lg:order-1">
            <a
              href="#"
              className="text-white font-['Saira'] leading-[14px] hover:text-my-primary transition-colors"
            >
              HABERLER
            </a>
            <a
              href="#"
              className="text-white font-['Saira'] leading-[14px] hover:text-my-primary transition-colors"
            >
              ETKİNLİKLER
            </a>
            <a
              href="#"
              className="text-white font-['Saira'] leading-[14px] hover:text-my-primary transition-colors"
            >
              MÜZİKLER
            </a>
            <a
              href="#"
              className="text-white font-['Saira'] leading-[14px] hover:text-my-primary transition-colors"
            >
              VİDEOLAR
            </a>
            <a
              href="#"
              className="text-white font-['Saira'] leading-[14px] hover:text-my-primary transition-colors"
            >
              İLETİŞİM
            </a>
          </div>

          {/* Logo ve Telif Hakkı */}
          <div className="flex flex-col items-center lg:items-end gap-4 order-1 lg:order-2">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
              {/* Ana logo elementi */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-transparent"></div>
              {/* Yan logo elementleri */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            <p className="text-[#5C5C5C] text-sm font-['Saira'] leading-[14px] text-center lg:text-right">
              © RAPKOLOGY All Rights Are Reserved 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
