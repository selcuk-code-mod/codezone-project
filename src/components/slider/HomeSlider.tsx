"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from "@/components/ui/Button";
import { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Dummy veriler
import { homeSliderData } from "@/lib/dummyData";

const HomeSlider: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleDiscNavigation = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const handlePrevSlide = () => {
    console.log("Prev button clicked!", swiperRef);
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextSlide = () => {
    console.log("Next button clicked!", swiperRef);
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const renderSliderButton = () => (
    <div
      className={`
        absolute 
        top-60 
        left-1/2 
        -translate-x-1/2 
        z-30 
        text-my-primary 
        cursor-pointer
        md:top-116
        md:left-124
        md:-translate-x-1/2
        md:-translate-y-1/2
       lg:bottom-56 
        lg:left-164
        lg:-translate-x-1/2
        xl:top-112 
        xl:left-[calc(50%+100px)]
        xl:-translate-x-1/2
        2xl:top-132 
      `}
    >
      <Button variant="primary">
        {homeSliderData[activeSlide].buttonText}
      </Button>
    </div>
  );

  return (
    <div className="relative">
      <Swiper
        spaceBetween={280}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
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
                    ? "!top-[40%] sm:!top-[20%] sm:!scale-150 sm:!left-[-25%] md:!scale-100 md:!top-[10%] "
                    : ""
                } ${
                  index === 0 || index === 2
                    ? "!scale-125 !-left-10 sm:!scale-100 md:!scale-100 md:!left-0 md:!top-[5%]"
                    : ""
                }`}
              />
              <div
                className={`absolute w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 h-full flex flex-col justify-center space-y-3 md:space-y-3.5 px-4 sm:px-0 ${
                  index === 1
                    ? "-top-[25%] sm:-top-[25%] sm:left-40 text-center md:text-start md:!-top-[14%] md:left-104 lg:!-top-[5%] lg:left-148 xl:text-start xl:left-[calc(45%+115px)]"
                    : ""
                } ${
                  index === 0 || index === 2
                    ? "-top-[25%] ps-12 sm:-top-44 sm:left-28 text-center sm:text-center md:-top-20 md:left-96 md:text-start md:right-40 lg:!left-136 lg:!-top-[4%] xl:text-start xl:!left-[calc(49%)] xl:!w-[40%]"
                    : ""
                }`}
              >
                <h1
                  className={`text-3xl sm:text-4xl  md:text-5xl  lg:text-5xl xl:text-5xl font-bold font-Saira-condensed ${slide.titleColor}`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`hidden md:block text-sm sm:text-base md:text-lg lg:text-xl ${slide.descriptionColor}`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation - Swiper dışında */}
      <button
        onClick={handlePrevSlide}
        className="custom-prev-button hidden lg:flex absolute left-2 sm:left-3 md:left-4 lg:left-10 xl:left-16 top-1/2 transform -translate-y-1/2 z-30 text-my-primary cursor-pointer hover:scale-110 transition-transform duration-300 items-center justify-center bg-transparent border-none"
      >
        <GoArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
      </button>
      <button
        onClick={handleNextSlide}
        className="custom-next-button hidden lg:flex absolute right-2 sm:right-3 md:right-4 lg:right-10 xl:right-16 top-1/2 transform -translate-y-1/2 z-30 text-my-primary cursor-pointer hover:scale-110 transition-transform duration-300 items-center justify-center bg-transparent border-none"
      >
        <GoArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
      </button>

      {/* Disc Navigation - Swiper dışında tek bir yerde */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32 left-16 sm:left-8 md:left-12 lg:left-152 xl:left-[calc(50%+50px)] 2xl:left-[calc(50%+50px)] hidden lg:flex items-center space-x-4 z-20">
        <div className="flex space-x-1 sm:space-x-2">
          {homeSliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDiscNavigation(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${
                activeSlide === index ? "bg-my-primary" : "bg-black "
              }`}
            />
          ))}
        </div>
      </div>

      {/* Devamını Oku Butonu - Slider dışında */}
      {renderSliderButton()}

      {/* Slider Vector */}
      <div className="absolute hidden lg:block -bottom-2 xs:-bottom-3 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 xl:-bottom-8 2xl:-bottom-10 left-0 right-0 w-full h-full object-cover object-center z-10">
        <Image
          src="/slider-vector.png"
          alt="Slider Vector"
          color="#fff"
          width={1400}
          height={1080}
          className="absolute hidden lg:block 
          -bottom-2 xs:-bottom-3 sm:-bottom-4 md:-bottom-5 
          lg:-bottom-6 xl:-bottom-8 2xl:-bottom-10 
          left-0 right-0 
          w-full max-w-full 
          h-auto 
          object-cover object-center 
          z-10"
        />
      </div>
    </div>
  );
};

export default HomeSlider;
