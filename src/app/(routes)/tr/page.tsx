import { Favorites } from "@/components/pages/homepage/Favorites";
import React from "react";
import HomeSlider from "@/components/slider/HomeSlider";
import { TrendsSection } from "@/components/pages/homepage/TrendsSection";
import { Newsletter } from "@/components/pages/homepage/Newsletter";
import { ExploreSection } from "@/components/pages/homepage/ExploreSection";

export default function HomePage() {
  return (
    <main>
      <HomeSlider />
      <Newsletter />
      <TrendsSection />
      <Favorites />
      <ExploreSection />
    </main>
  );
}
