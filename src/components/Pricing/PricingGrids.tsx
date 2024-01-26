"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SInglePricing";

const PricingGrids = () => {
  const [prices, setPrices] = useState([]);
 
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/getproducts");
    setPrices(data);
  };
  return (
    <div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Get access"
          title="Our Pricing Plan"
          paragraph="We have plans for everyone. We offer personalized quotes. Flexible Payment Plans."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {prices && 
            prices.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;