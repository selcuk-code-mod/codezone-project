"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard, Mousewheel } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from "@/components/ui/Button";
import { Swiper as SwiperType } from "swiper";
import type { HTMLElementWithSwiper } from "swiper/types";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Dummy veriler
import { homeSliderData } from "@/lib/dummyData";

// Swiper için tür genişletmesi
declare module "swiper/types" {
  interface HTMLElementWithSwiper extends HTMLElement {
    swiper?: SwiperType;
  }
}

const HomeSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleDiscNavigation = (index: number) => {
    const swiperElement = document.querySelector(
      ".mySwiper"
    ) as HTMLElementWithSwiper;
    const swiper = swiperElement?.swiper;
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  // Responsive style kontrolü
  const getImageStyle = (index: number) => {
    if (index === 1) {
      return {
        left: "-20%",
        top: "15%",
        // Sadece lg ve xl ekranlarda uygulanacak
        "@media (max-width: 1023px)": {
          left: "0",
          top: "0",
        },
      };
    }
    return {};
  };

  return (
    <div className="relative">
      <Swiper
        cssMode={true}
        spaceBetween={280}
        centeredSlides={true}
        keyboard={true}
        mousewheel={true}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[Autoplay, Navigation, Keyboard, Mousewheel]}
        className="mySwiper h-screen relative z-1"
      >
        {homeSliderData.map((slide, index) => (
          <SwiperSlide className="bg-black/50" key={index}>
            <div className="relative h-full w-full flex">
              <Image
                src={slide.image}
                alt={`Hero Slider Image ${index + 1}`}
                fill
                priority
                className={`object-cover ${
                  index === 1
                    ? "lg:!left-[-20%] lg:!top-[15%] xl:!left-[-20%] xl:!top-[15%]"
                    : ""
                }`}
              />
              <div className="absolute w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 h-full flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 right-4 sm:right-8 md:right-16 lg:right-32 xl:right-48 2xl:right-60 px-4 sm:px-0">
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-saira-condensed ${slide.titleColor}`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl ${slide.descriptionColor}`}
                >
                  {slide.description}
                </p>
                <div className="flex">
                  <Button className="text-sm sm:text-base md:text-lg">
                    {slide.buttonText}
                  </Button>
                </div>
                {/* Disc Navigation */}
                <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 left-4 sm:left-8 md:left-12 transform -translate-x-1/2 hidden lg:flex items-center space-x-4 z-10">
                  <div className="flex space-x-1 sm:space-x-2">
                    {homeSliderData.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => handleDiscNavigation(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 
                  ${
                    activeSlide === index
                      ? "bg-my-primary text-my-primary"
                      : "bg-black text-black"
                  }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="custom-prev-button hidden lg:flex absolute left-2 sm:left-3 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <GoArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </div>
        <div className="custom-next-button hidden lg:flex absolute right-2 sm:right-3 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <GoArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </div>
      </Swiper>

      {/* Slider Vector */}
      <Image
        src="/slider-vector.png"
        alt="Slider Vector"
        color="#fff"
        width={1920}
        height={1080}
        className="absolute -bottom-4 xs:-bottom-5 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-12 2xl:-bottom-14 left-0 right-0 w-full max-w-full h-auto object-cover object-center z-10"
      />
    </div>
  );
};

export default HomeSlider;
