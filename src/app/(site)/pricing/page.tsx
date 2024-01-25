import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Rose Development - Next.js Template for Rose Developments",
  description: "This is Pricing page for Rose Development",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Pricing Page" />
      <section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25">
        <PricingGrids />
      </section>

      <Faq />
    </>
  );
};

export default PricingPage;
