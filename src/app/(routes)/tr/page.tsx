"use client";

import React from "react";
import HomeSlider from "@/components/slider/HomeSlider";
import { TrendsSection } from "@/components/pages/homepage/TrendsSection";
import { Newsletter } from "@/components/pages/homepage/Newsletter";

export default function HomePage() {
  return (
    <main>
      <HomeSlider />
      <Newsletter />
      <TrendsSection />
    </main>
  );
}
