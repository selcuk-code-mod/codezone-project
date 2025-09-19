"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { BsPlayCircleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import dummyData from "@/lib/dummyData";

export const Favorites = () => {
  // Seçilen verileri sırala (trends true olanlar)
  const trendItems = dummyData
    .filter((item) => item.attributes.trends)
    .slice(0, 5) // İlk 5 öğeyi al
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  // Sonsuz döngü için kartları çoğalt
  // const infiniteItems = [...trendItems, ...trendItems, ...trendItems];

  return (
    <div className="bg-[#121212] text-white min-h-[500px] p-4 md:p-8">
      <div className="container mx-auto relative">
        <Image
          className="w-full lg:w-1/3"
          src="/sosial-media.png"
          alt="Favorites"
          width={400}
          height={200}
        />
        <div className="flex items-center space-x-4">
          <Image
            className="absolute top-5 left-48"
            src="/Spotify Logo.png"
            alt="Spotify"
            width={100}
            height={50}
          />
          <Image
            className="absolute top-6 left-12"
            src="/Youtube Logo.png"
            alt="YouTube"
            width={100}
            height={50}
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          {/* Sol Taraf - Başlık */}
          <div className="w-full lg:w-1/3 pt-8 lg:pt-20 mb-8 lg:mb-0">
            <h2 className="text-3xl pb-8 md:pb-0 md:text-5xl font-bold font-['Saira_Condensed'] uppercase text-center md:text-left">
              AYIN
              <br />
              FAVORİLERİ
            </h2>
          </div>

          {/* Sağ Taraf - Slider */}
          <div className="w-full lg:w-4xl xl:w-5xl 2xl:w-6xl overflow-hidden">
            <Swiper
              modules={[Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerGroup={1}
              slidesPerView={2.5}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              scrollbar={{
                el: ".custom-scrollbar",
                draggable: true,
                dragClass: "swiper-scrollbar-drag-custom",
              }}
              className="favoriler-swiper h-[160px] sm:h-[200px] lg:h-[240px] xl:h-[265px] w-full relative"
            >
              {trendItems.map((item, index) => {
                // title2'yi parçalara ayır
                const titleParts = item.attributes.title2
                  ? item.attributes.title2.split("-")
                  : [item.attributes.title];

                return (
                  <SwiperSlide
                    key={`${item._id}-${index}`}
                    className="!w-[200px] sm:!w-[250px] lg:!w-[300px] xl:!w-[320px]"
                  >
                    <div className="bg-[#2A2A2A] rounded-lg relative overflow-hidden w-[200px] sm:w-[250px] lg:w-[300px] xl:w-[320px] h-[160px] sm:h-[200px] lg:h-[240px] xl:h-[275px]">
                      {/* Mobil Layout (sm ve altı) */}
                      <div className="w-full h-full flex sm:hidden flex-col justify-center items-center">
                        {/* Üst Yarı - Resim */}
                        <div className="w-full h-1/2  relative flex items-center justify-center">
                          <Image
                            src={item.attributes.img}
                            alt={item.attributes.title}
                            width={100}
                            height={100}
                            className="w-[80px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover rounded-lg"
                            style={{
                              transform: "rotate(-10deg)",
                            }}
                          />
                          {/* Play Butonu */}
                          <BsPlayCircleFill
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            text-white text-2xl sm:text-3xl cursor-pointer 
                            hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Alt Yarı - İçerik */}
                        <div className="w-full h-1/2 flex flex-col justify-center">
                          <div className="text-center px-2">
                            <div className="bg-[#323232] text-white px-2 py-1 rounded-full text-xs inline-block mb-2">
                              Top 10 ({item.rank}. Sıra)
                            </div>
                            <h3 className="text-xs sm:text-sm uppercase">
                              {titleParts.map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index < titleParts.length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout (sm ve üstü) */}
                      <div className="hidden relative sm:block md:block lg:block xl:block 2xl:block w-full h-full">
                        {/* Sol Yarı - Resim (Yarısı Gizli) */}
                        <div
                          className="absolute top-8 left-10 w-1/3 h-full group"
                          style={{ zIndex: 10 }}
                        >
                          <Image
                            src={item.attributes.img}
                            alt={item.attributes.title}
                            width={250}
                            height={200}
                            className="object-cover max-w-none cursor-pointer w-[250px] h-[200px]"
                            style={{
                              transform: "translateX(-80%) rotate(-10deg)",
                              transition:
                                "transform 0.3s ease, z-index 0.3s ease",
                              zIndex: 10,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateX(0) rotate(0)";
                              e.currentTarget.style.zIndex = "50";
                              e.currentTarget.parentElement!.style.zIndex =
                                "50";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform =
                                "translateX(-80%) rotate(-10deg)";
                              e.currentTarget.style.zIndex = "10";
                              e.currentTarget.parentElement!.style.zIndex =
                                "10";
                            }}
                          />
                          {/* Play Butonu */}
                          <BsPlayCircleFill
                            className="absolute top-24 left-32 transform -translate-x-1/2 -translate-y-1/2 
                            text-white text-4xl lg:text-5xl xl:text-6xl cursor-pointer 
                            opacity-0 group-hover:opacity-100 
                            scale-50 group-hover:scale-75
                            transition-all duration-600 z-60"
                          />
                        </div>

                        {/* Sağ Yarı - İçerik */}
                        <div className="absolute right-0 top-0 w-2/3 h-full flex flex-col justify-center">
                          <div className="text-center">
                            <div className="bg-[#323232] text-white px-3 py-1 rounded-full text-xs inline-block mb-2 md:mb-4">
                              Top 10 ({item.rank}. Sıra)
                            </div>
                            <h3 className="text-sm lg:text-base xl:text-[18px] uppercase mb-2 lg:mb-3 xl:mb-4">
                              {titleParts.map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index < titleParts.length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Scrollbar */}
            <div className="custom-scrollbar w-full h-[3px]  bg-black mt-4 rounded-full overflow-hidden">
              <div className="swiper-scrollbar-drag-custom w-full h-full bg-my-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
