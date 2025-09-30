import React from 'react';
import Feature from '../Features/Feature';

const PricingCard = ({pricingCard}) => {
    // console.log(pricingCard)
    const {info,price,plan,features} =pricingCard
    return (
        <div className=' bg-amber-300 text-blue-800 flex-1  rounded-xl p-5'>
            <h1 className='text-7xl'>{plan}</h1>
            <h4 className='text-3xl my-5'>Price: ${price}</h4>
            <p>{info}</p>
            <div className='bg-amber-800 rounded-xl p-5 mt-5'>
                {
                    features.map(feature  => <Feature feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;