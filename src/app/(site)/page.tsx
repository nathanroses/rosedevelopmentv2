import BlogSection from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rose Development",
  description: "This is Home for Rose Development the best Ai + Web Development Company in the world.",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <NextSeo
        title="Rose Development - Next.js Template for Rose Developments"
        description="A short description goes here."
      /> */}
      <Hero />
      <Features />
      <FeaturesList />
      <Pricing />
      <section className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45 pb-20">
        <Reviews />
      </section>
      <Clients />
      <Support />
      <CallToAction />
      <Newsletter />
    </>
  );
}
