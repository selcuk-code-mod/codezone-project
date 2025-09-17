import React from "react";
import HomeSlider from "@/components/slider/HomeSlider";
import { FaArrowRight } from "react-icons/fa";
import { trendData, exploreCategories } from "@/lib/dummyData";

export default function TurkishHomePage() {
  return (
    <div>
      {/* Ana Slider */}
      <HomeSlider />

      {/* Trendler Bölümü */}
      <section className="container my-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-5xl font-bold text-my-secondary">TRENDLER</h2>
            <div className="bg-my-secondary w-8 h-8 rounded-full flex items-center justify-center">
              <FaArrowRight className="text-my-primary" />
            </div>
          </div>
          <button className="text-my-secondary flex items-center space-x-2">
            <span>Tümünü Gör</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Trend İçerikleri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendData.map((trend) => (
            <div
              key={trend.id}
              className="bg-my-primary rounded-lg p-4 text-white"
            >
              <div className="text-2xl font-bold mb-4">0{trend.id}</div>
              <div className="mb-4">
                <div
                  className="bg-my-secondary rounded-lg h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${trend.image})` }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
              <p className="text-sm opacity-75">{trend.description}</p>
              <button className="mt-4 text-my-secondary flex items-center space-x-2">
                <span>Daha Fazla Oku</span>
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Keşfet Bölümü */}
      <section className="container my-12 bg-my-primary text-white p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">KEŞFET</h2>
          <p className="text-xl mb-8">NE GÖRMEK İSTERSİN?</p>

          {/* Kategori Filtreleri */}
          <div className="flex justify-center space-x-4 mb-8">
            {exploreCategories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-white rounded-lg hover:bg-my-secondary hover:text-my-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              GELİŞMELERDEN İLK SEN HABERDAR OL!
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL"
                className="flex-grow bg-my-primary border border-white/30 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-secondary"
              />
              <button className="bg-my-secondary text-my-primary px-6 py-2 rounded-r-lg">
                GÖNDER
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
