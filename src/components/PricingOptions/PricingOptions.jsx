import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    return (
        <div>
            <h2 className='font-bold text-2xl my-8'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>
                {/* {
                    pricingData.map(pricingCard => <PricingCard key={pricingCard.id} pricingCard={pricingCard}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }

            </div>
        </div>
    );
};

export default PricingOptions;