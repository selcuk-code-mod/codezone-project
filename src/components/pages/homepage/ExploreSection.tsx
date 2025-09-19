"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaDiscord,
  FaFacebookF,
} from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { exploreCategories } from "@/lib/dummyData";
import articlesData from "../../../../dummy.json";
import { FaRegCompass } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Button from "@/components/ui/Button";
import MobileFooter from "./MobileFooter";

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
    <div className="bg-[#121212] text-white py-8 md:py-8 lg:py-16 px-4">
      <div className="container mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-9xl">
        {/* Horizontal Layout (Default) */}
        {!isVerticalLayout && (
          <>
            {/* Desktop Horizontal Layout */}
            <div className="hidden lg:block">
              {/* Üst Bar */}
              <div className="grid grid-cols-3">
                {/* Sol - Keşfet ve Icon */}
                <div className="flex flex-col space-y-6 col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h1 className="text-4xl font-bold font-['Saira_Condensed'] uppercase">
                        KEŞFET
                      </h1>
                      <FaRegCompass className="text-4xl text-my-primary" />
                    </div>

                    {/* Orta - 3 Icon */}
                    <div className="flex items-center justify-center gap-4 pe-12">
                      <IoSearch className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                      <AiOutlineBars className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                      <button
                        onClick={() => setIsVerticalLayout(true)}
                        className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors"
                      >
                        <RxHamburgerMenu />
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
                          {/* Üst Kısım - Yazar */}
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

                          {/* Alt Kısım - Buton */}
                          <div className="flex justify-between items-center">
                            <button className="text-white text-sm font-normal font-['Saira_Condensed'] hover:text-my-primary transition-colors duration-300">
                              Daha Fazla Oku
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sağ - Ne Görmek İstersin ve Badges */}
                <div className="flex flex-col col-span-1 space-y-40 ">
                  <h2 className="text-3xl font-bold text-end font-['Saira_Condensed'] uppercase mb-4">
                    NE GÖRMEK İSTERSİN?
                  </h2>
                  <div className="flex flex-wrap justify-end gap-2">
                    {exploreCategories.slice(0, 7).map((category, index) => (
                      <button
                        key={index}
                        className={`px-4 py-1 rounded-sm border text-base font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
                          category === "Yabancı Rap"
                            ? "bg-my-primary text-black border-my-primary"
                            : "bg-transparent text-white border-white hover:border-my-primary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  {/* Gelişmelerden İlk Sen Haberdar Ol */}
                  <div className="text-end mb-8">
                    <h3 className="text-2xl lg:text-4xl font-bold font-['Saira_Condensed'] uppercase mb-6">
                      GELİŞMELERDEN İLK SEN HABERDAR OL!
                    </h3>
                  </div>

                  {/* Newsletter ve Sosyal Medya Bölümü */}
                  <div className="flex flex-col  gap-8 mb-16">
                    {/* Newsletter Kayıt Formu */}
                    <div className="flex justify-between">
                      <div className="text-white text-sm ps-28 font-bold font-['Saira_Condensed'] leading-[14px]">
                        EMAIL
                      </div>

                      <div>
                        <button className="flex  gap-2 text-my-primary font-bold text-sm font-['Saira_Condensed'] leading-[14px] hover:opacity-80 transition-opacity">
                          GÖNDER
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                    <div className="w-76 ms-28 h-px  bg-[#3B3B3B]"></div>
                    {/* Sosyal Medya İkonları */}
                    <div className="flex ms-28 gap-5">
                      <FaFacebookF className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                      <FaTwitter className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                      <FaDiscord className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                      <FaSpotify className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                      <FaYoutube className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                    </div>
                    {/* Footer Linkleri */}
                    <div className="flex flex-col lg:flex-row justify-end gap-8 pt-10 ms-28">
                      {/* Navigasyon Linkleri */}
                      <div className="flex flex-wrap justify-end pe-16 gap-6 text-md order-2 lg:order-1">
                        <a
                          href="#"
                          className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                        >
                          HABERLER
                        </a>
                        <a
                          href="#"
                          className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                        >
                          ETKİNLİKLER
                        </a>
                        <a
                          href="#"
                          className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                        >
                          MÜZİKLER
                        </a>
                        <a
                          href="#"
                          className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                        >
                          VİDEOLAR
                        </a>
                        <a
                          href="#"
                          className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                        >
                          İLETİŞİM
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#5C5C5C] text-sm font-['Saira_Condensed'] leading-[14px] text-center ms-10">
                        © RAPKOLOGY All Rights Are Reserved 2022.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Horizontal Layout */}

            <MobileFooter />
          </>
        )}
        {/* Vertical Layout */}
        {isVerticalLayout && (
          <>
            {/* Üst Bar - Vertical Layout */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold font-['Saira_Condensed'] uppercase">
                  KEŞFET
                </h1>
                <FaRegCompass className="text-4xl text-my-primary" />
              </div>

              {/* Orta - 3 Icon */}
              <div className="flex items-center justify-center gap-4 pe-12">
                <IoSearch className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
                <button
                  onClick={() => setIsVerticalLayout(false)}
                  className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors"
                >
                  <AiOutlineBars />
                </button>
                <RxHamburgerMenu className="text-2xl text-white hover:text-my-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="pt-10">
              <h2 className="text-2xl sm:text-4xl font-bold font-['Saira_Condensed'] uppercase mb-4">
                NE GÖRMEK İSTERSİN?
              </h2>
            </div>

            {/* Vertical Content */}
            <div className="text-center space-y-8 mb-16">
              {/* Badges - Vertical */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {exploreCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1.5 md:px-8 md:py-2 rounded-lg border text-xs md:text-sm font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
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
            <div className="space-y-16 mb-12 max-w-2xl mx-auto">
              {articles.map((article: Article) => (
                <div
                  key={`vertical-${article._id}`}
                  className="flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden"
                >
                  {/* Üst - Resim */}
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={article.attributes.img}
                      alt={article.attributes.title}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>

                  {/* Alt - İçerik */}
                  <div className="flex flex-col justify-center p-4 px-10 flex-1">
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
              <Button variant="secondary">DAHA FAZLA GÖR</Button>
              {/* Newsletter Kayıt Formu */}
              <div className="flex justify-around pt-8">
                <div className="text-white text-sm font-bold font-['Saira_Condensed'] leading-[14px]">
                  EMAIL
                </div>

                <div>
                  <button className="flex gap-2 text-my-primary font-bold text-sm font-['Saira_Condensed'] leading-[14px] hover:opacity-80 transition-opacity">
                    GÖNDER
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="w-180 h-px mx-auto mt-2 bg-[#3B3B3B]"></div>
            </div>
            {/* Newsletter ve Sosyal Medya Bölümü */}
            <div className="flex flex-col  gap-8 mb-16">
              {/* Sosyal Medya İkonları */}
              <div className="flex gap-5 justify-center">
                <FaFacebookF className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                <FaTwitter className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                <FaDiscord className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                <FaSpotify className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
                <FaYoutube className="text-my-primary text-2xl hover:opacity-80 cursor-pointer transition-opacity" />
              </div>
              {/* Footer Linkleri */}
              <div className="flex flex-col  justify-center gap-8 pt-10">
                {/* Navigasyon Linkleri */}
                <div className="flex justify-center gap-8  text-md order-2 lg:order-1">
                  <a
                    href="#"
                    className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                  >
                    HABERLER
                  </a>
                  <a
                    href="#"
                    className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                  >
                    ETKİNLİKLER
                  </a>
                  <a
                    href="#"
                    className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                  >
                    MÜZİKLER
                  </a>
                  <a
                    href="#"
                    className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                  >
                    VİDEOLAR
                  </a>
                  <a
                    href="#"
                    className="text-white font-['Saira_Condensed'] leading-[14px] hover:text-my-primary transition-colors"
                  >
                    İLETİŞİM
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[#5C5C5C] text-sm md:text-lg font-['Saira_Condensed'] leading-[14px] text-center">
                  © RAPKOLOGY All Rights Are Reserved 2022.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
