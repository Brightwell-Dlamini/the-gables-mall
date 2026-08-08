import type { Metadata } from "next";
import { images } from "@/lib/assets";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutSplit from "@/components/home/AboutSplit";
import BannerMosaic from "@/components/home/BannerMosaic";
import AnchorBrands from "@/components/home/AnchorBrands";
import ServicesFacilities from "@/components/home/ServicesFacilities";
import MapSection from "@/components/home/MapSection";
import EventsTeaser from "@/components/home/EventsTeaser";
import LeaseCTA from "@/components/home/LeaseCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Gables Shopping Centre — Ezulwini’s premier destination. 96+ stores, cinema, dining, free parking. Dutch-inspired architecture in the heart of Shebas Rocks.",
  openGraph: {
    title: "The Gables Shopping Centre | Ezulwini, Eswatini",
    description:
      "96+ stores · Cinema · Dining · Banking · Free secure parking — nestled in Shebas Rocks, minutes from two national parks.",
    images: [{ url: images.entrance, width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSplit />
      <BannerMosaic />
      <AnchorBrands />
      <ServicesFacilities />
      <MapSection />
      <EventsTeaser />
      <LeaseCTA />
    </>
  );
}
