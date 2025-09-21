import React, { useState } from "react";
import {
  FaArrowRight,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaDiscord,
  FaFacebookF,
} from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import Image from "next/image";
import { exploreCategories } from "@/lib/dummyData";
import articlesData from "../../../../dummy.json";
import Button from "@/components/ui/Button";

interface Article {
  _id: string;
  attributes: {
    img: string;
    title: string;
    content: string;
    authors: string[];
    avatar: string;
    tags: string[];
  };
  createdAt: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function MobileFooter() {
  const [showAllCards, setShowAllCards] = useState(false);

  // Badge filter state - başlangıçta "Türk Rap" aktif
  const [activeFilter, setActiveFilter] = useState("Türk Rap");

  // Tüm makaleleri al
  const allArticles = articlesData as unknown as Article[];

  // Filtrelenmiş makaleleri al
  const getFilteredArticles = () => {
    if (activeFilter === "Türk Rap") {
      return allArticles.filter((article: Article) =>
        article.attributes.tags.some(
          (tag: string) =>
            tag.toLowerCase().includes("türk rap") ||
            tag.toLowerCase().includes("turkish rap")
        )
      );
    }

    return allArticles.filter((article: Article) =>
      article.attributes.tags.some((tag: string) =>
        tag.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  };

  // İlk 3 kartı göster, showAllCards true ise tümünü göster
  const filteredArticles = getFilteredArticles();
  const displayedArticles = showAllCards
    ? filteredArticles
    : filteredArticles.slice(0, 3);

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setShowAllCards(false); // Yeni filtre seçildiğinde kartları kapat
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold font-['Saira_Condensed'] uppercase">
            KEŞFET
          </h1>
          <FaRegCompass className="text-4xl text-my-primary" />
        </div>

        {/* Orta - 3 Icon */}
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
              onClick={() => handleFilterChange(category)}
              className={`px-3 py-1.5 md:px-8 md:py-2 rounded-lg border text-xs md:text-sm font-medium transition-all duration-300 hover:bg-my-primary hover:text-black whitespace-nowrap ${
                category === activeFilter
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
        {displayedArticles.map((article: Article) => (
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
                <span className="text-white text-sm font-normal font-['Saira_Condensed']">
                  {article.attributes.authors[0]}
                </span>
              </div>

              {/* Makale Başlığı */}
              <h3 className="text-white text-sm font-bold font-['Saira_Condensed'] uppercase leading-tight line-clamp-2 mb-2">
                {article.attributes.title}
              </h3>

              {/* Alt Kısım - Tarih ve Buton */}
              <div className="flex justify-between items-center">
                <span className="text-[#3B3B3B] text-xs font-normal font-['Saira_Condensed']">
                  {formatDate(article.createdAt)}
                </span>
                <button className="cursor-pointer text-white text-xs font-normal font-['Saira_Condensed'] hover:text-my-primary transition-colors duration-300">
                  Daha Fazla Oku
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daha Fazla Gör/Gizle Butonu - Sadece Vertical Layout'ta */}
      <div className="text-center mb-16">
        <Button variant="secondary" onClick={toggleCards}>
          {showAllCards ? "GİZLE" : "DAHA FAZLA GÖR"}
        </Button>
        {/* Newsletter Kayıt Formu */}
        <div className="flex justify-around pt-8">
          <div className="text-white text-sm font-bold font-['Saira_Condensed'] leading-[14px]">
            EMAIL
          </div>

          <div>
            <button className="cursor-pointer flex gap-2 text-my-primary font-bold text-sm font-['Saira_Condensed'] leading-[14px] hover:opacity-80 transition-opacity">
              GÖNDER
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-40 sm:w-60 md:w-80 lg:w-96 xl:w-120 h-px mx-auto mt-2 bg-[#3B3B3B]"></div>
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
          <div className="flex flex-wrap justify-center gap-8 text-md order-2 lg:order-1">
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
    </div>
  );
}

export default MobileFooter;
