"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { IoTrendingUpSharp } from "react-icons/io5";
import { useTrends } from "@/hooks/useTrends";

export const TrendsSection: React.FC = () => {
  const { trends, loading, error, showAll, toggleTrends, totalTrendsCount } =
    useTrends();

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <section className="bg-my-background-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex gap-4 mb-8">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-saira-condensed">
            TRENDLER
          </h2>
          <IoTrendingUpSharp className="text-my-primary text-5xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {trends.map((item) => (
            <div
              key={item.id}
              className="flex justify-between space-x-4 bg-my-card-dark p-6 rounded-lg relative"
            >
              <div className="flex justify-between w-full space-x-6">
                <div className="text-6xl font-bold text-[#2A2A2A] hover:text-my-primary transition-colors active:text-my-primary focus:text-my-primary absolute top-4 left-4">
                  {item.id}
                </div>
                <div className="space-y-4 ml-20 w-full">
                  <div className={`rounded-lg h-2 w-16 ${item.color}`}></div>

                  <div className="flex items-center space-x-2">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-white text-base">{item.author}</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase mb-2 h-[6rem] line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="border-b border-my-border w-full my-4"></div>
                  <div className="mt-4 flex items-center space-x-2 text-white cursor-pointer group">
                    <span className="text-[16px] group-hover:text-my-primary transition-colors">
                      Daha Fazla Oku
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalTrendsCount > 3 && (
          <div className="flex items-center justify-center cursor-pointer group pt-10">
            <Button variant="secondary" onClick={toggleTrends}>
              {showAll ? "Tümünü Gizle" : "Tümünü Gör"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
