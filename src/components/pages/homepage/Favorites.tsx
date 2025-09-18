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
  const infiniteItems = [...trendItems, ...trendItems, ...trendItems];

  return (
    <div className="bg-[#121212] text-white min-h-screen p-4 md:p-8">
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

        <div className="flex flex-col lg:flex-row">
          {/* Sol Taraf - Başlık */}
          <div className="w-full lg:w-1/3 pt-8 lg:pt-20 mb-8 lg:mb-0">
            <h2 className="text-3xl pb-8 md:pb-0 md:text-5xl font-bold font-['Saira_Condensed'] uppercase text-center md:text-left">
              AYIN
              <br />
              FAVORİLERİ
            </h2>
          </div>

          {/* Sağ Taraf - Slider */}
          <div className="w-full lg:w-2/3 overflow-hidden">
            <Swiper
              modules={[Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerGroup={1}
              slidesPerView={1.5}
              breakpoints={{
                640: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={true}
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
              className="favoriler-swiper h-[200px] lg:h-[265px] w-full lg:w-[900px] relative"
            >
              {infiniteItems.map((item, index) => {
                // title2'yi parçalara ayır
                const titleParts = item.attributes.title2
                  ? item.attributes.title2.split("-")
                  : [item.attributes.title];

                return (
                  <SwiperSlide
                    key={`${item._id}-${index}`}
                    className="!w-[250px] md:!w-[275px]"
                  >
                    <div
                      className="bg-[#2A2A2A] rounded-lg relative overflow-hidden"
                      style={{
                        width: "250px",
                        height: "200px",
                        maxWidth: "275px",
                        maxHeight: "250px",
                      }}
                    >
                      {/* Mobil Layout (sm ve altı) */}
                      <div className="w-full h-full flex sm:hidden flex-col justify-center items-center">
                        {/* Üst Yarı - Resim */}
                        <div className="w-full h-1/2 overflow-hidden relative flex items-center justify-center">
                          <Image
                            src={item.attributes.img}
                            alt={item.attributes.title}
                            width={100}
                            height={100}
                            style={{
                              objectFit: "cover",
                              width: "80px",
                              height: "80px",
                              borderRadius: "8px",
                            }}
                          />
                          {/* Play Butonu */}
                          <BsPlayCircleFill
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            text-white text-3xl cursor-pointer 
                            hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Alt Yarı - İçerik */}
                        <div className="w-full h-1/2 flex flex-col justify-center">
                          <div className="text-center px-2">
                            <div className="bg-[#323232] text-white px-2 py-1 rounded-full text-xs inline-block mb-2">
                              Top 10 ({item.rank}. Sıra)
                            </div>
                            <h3 className="text-sm uppercase">
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
                      <div className="hidden sm:block md:block lg:block xl:block 2xl:block w-full h-full">
                        {/* Sol Yarı - Resim (Yarısı Gizli) */}
                        <div
                          className="absolute top-8 left-0 w-1/2 h-full overflow-hidden"
                          style={{
                            clipPath: "polygon(0 0, 50% 0, 80% 100%, 0 100%)",
                          }}
                        >
                          <Image
                            src={item.attributes.img}
                            alt={item.attributes.title}
                            width={250}
                            height={200}
                            style={{
                              objectFit: "cover",
                              transform: "translateX(-50%)",
                              width: "200%",
                              maxWidth: "none",
                            }}
                          />
                          {/* Play Butonu */}
                          <BsPlayCircleFill
                            className="absolute top-20 -left-2 transform -translate-x-1/2 -translate-y-1/2 
                            text-white text-3xl md:text-4xl cursor-pointer 
                            hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Sağ Yarı - İçerik */}
                        <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center">
                          <div className="text-center">
                            <div className="bg-[#323232] text-white px-2 md:px-3 py-1 rounded-full text-xs inline-block mb-2 md:mb-4">
                              Top 10 ({item.rank}. Sıra)
                            </div>
                            <h3 className="text-sm md:text-[18px] uppercase mb-2 md:mb-4">
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
            <div className="custom-scrollbar w-full h-2  bg-black mt-4 rounded-full overflow-hidden">
              <div className="swiper-scrollbar-drag-custom w-full h-full bg-my-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
