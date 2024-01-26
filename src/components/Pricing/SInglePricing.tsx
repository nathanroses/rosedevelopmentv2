import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import OfferItem from './OfferItem';

const SinglePricing = ({ price }) => {
  // POST request
  const handleSubscription = async () => {
    try {
      const response = await axios.post('/api/payment', { priceId: price.id }, {
        headers: { 'Content-Type': 'application/json' },
      });
      window.location.assign(response.data);
    } catch (error) {
      console.error('There was an error processing your request', error);
    }
  };

  // Define features for each plan
  const planFeatures = {
    'Starter': ["Feature 1", "Feature 2", "Feature 3"],
    'Medium': ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    'Large': ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]
  };
  

  // Get the current plan's features based on its nickname
  const currentPlanFeatures = planFeatures[price.nickname] || [];

  return (
    <div className="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
      <span className="absolute right-9 top-9">
        <Image
          src={
            price.nickname === 'Starter'
              ? '/images/pricing/pricing-icon-01.svg'
              : price.nickname === 'Medium'
              ? '/images/pricing/pricing-icon-02.svg'
              : '/images/pricing/pricing-icon-03.svg'
          }
          alt="icon"
          width={50}
          height={44}
        />
      </span>

      <h3 className="font-bold text-heading-6 text-white mb-5.5">
        {price.nickname}
      </h3>

      <div className="flex items-center gap-10">
        <h2 className="font-bold text-custom-1 pricing-gradient-text">
          ${" "}
          {(price.unit_amount / 100).toLocaleString('en-US', {
            currency: 'USD',
          })}
        </h2>
        <p className="font-medium">
          /year <br />
        </p>
      </div>

      <div className="my-10 w-full h-[3px] pricing-gradient-divider"></div>

      <div>
  {currentPlanFeatures.length > 0 ? (
    currentPlanFeatures.map((feature, index) => (
      <OfferItem key={index} text={feature} />
    ))
  ) : (
    <>
      <p className="text-white">Custom Website or App</p>
      <p className="text-white">Free Website Hosting</p>
      <p className="text-white">Ai Intergration</p>
      <p className="text-white">Added Marketing Bonus</p>
      <p className="text-white">24/7 Support</p>
      {/* Add as many <p> tags as you need for additional benefits */}
    </>
  )}
</div>


      <button
        aria-label="purchase this plan"
        onClick={handleSubscription}
        className="mt-11 flex w-full items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button"
      >
        Get the plan
        {/* ... SVG for the button ... */}
      </button>

      <p className="mt-4 text-sm text-center text-white">No Subscription Commitment</p>
      {/* Background shapes */}
      <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
        <span className="absolute left-0 bottom-0 w-full aspect-[370/553] -z-1">
          <Image
            src="/images/blur/blur-16.svg"
            alt="blur"
            layout="fill"
            className="max-w-none"
          />
        </span>
        <span className="absolute w-full aspect-[370/350] left-0 top-0 -z-1">
          <Image
            src="/images/blur/blur-17.svg"
            alt="blur"
            layout="fill"
            className="max-w-none"
          />
        </span>
      </div>
    </div>
  );
};

export default SinglePricing;
