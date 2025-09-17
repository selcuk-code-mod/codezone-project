"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@/components/ui/Button";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dummy veriler
import { homeSliderData } from "@/lib/dummyData";

const HomeSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={280}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        {homeSliderData.map((slide, index) => (
          <SwiperSlide className="bg-black/50" key={index}>
            <div className="relative h-full w-full flex">
              <Image
                src={slide.image}
                alt={`Hero Slider Image ${index + 1}`}
                fill
                priority
                style={index === 1 ? { left: "-20%", top: "15%" } : {}}
                className="object-cover"
              />
              <div className="absolute w-1/4 h-full flex flex-col justify-center space-y-5 right-60 ml-auto">
                <h1
                  className={`text-5xl font-bold font-saira-condensed ${slide.titleColor}`}
                >
                  {slide.title}
                </h1>
                <p className={`text-lg ${slide.descriptionColor}`}>
                  {slide.description}
                </p>
                <div className="flex">
                  <Button>{slide.buttonText}</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Vector */}
      <Image
        src="/slider-vector.png"
        alt="Slider Vector"
        width={1920}
        height={200}
        className="absolute -bottom-12 left-0 right-0 w-full z-10"
      />
    </div>
  );
};

export default HomeSlider;
