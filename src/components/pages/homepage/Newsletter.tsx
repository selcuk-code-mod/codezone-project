"use client";

import React from "react";
import Image from "next/image";

export const Newsletter: React.FC = () => {
  return (
    <section className="bg-my-background-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Desktop Banner */}
        <div className="hidden md:block mb-8">
          <Image
            src="/banner.webp"
            alt="Newsletter Banner"
            width={1200}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        {/* Mobile Banners */}
        <div className="block md:hidden">
          {/* Üst Banner */}
          <div className="mb-4">
            <Image
              src="/banner-mobile-head.webp"
              alt="Newsletter Mobile Head Banner"
              width={600}
              height={200}
              className="w-full rounded-lg"
            />
          </div>

          {/* Alt Bannerlar */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Image
                src="/banner-mobile-one.webp"
                alt="Newsletter Mobile Banner One"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/banner-mobile-two.webp"
                alt="Newsletter Mobile Banner Two"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
