import Link from "next/link";
import Navbar from "../components/home-page/Navbar";
import Footer from "@/components/home-page/Footer";
import FAQ from "@/components/home-page/FAQ";
import WhatWeOffer from "@/components/home-page/WhatWeOffer";
import PricingCard from "@/components/curriculum-page/PricingCard";

export default function Curriculum() {
  return (
    <div>
      <Navbar />
      <WhatWeOffer ribbon={false} backImg={true} />
      <PricingCard />
      <FAQ />
      <Footer />
    </div>
  );
}
