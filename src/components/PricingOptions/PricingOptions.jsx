import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    return (
        <div>
            <h2 className='font-bold text-2xl'>Our Pricing</h2>
            <div className='flex gap-8 justify-between'>
                {
                    pricingData.map(pricingCard => <PricingCard key={pricingCard.id} pricingCard={pricingCard}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;