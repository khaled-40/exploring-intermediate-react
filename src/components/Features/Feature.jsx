import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Feature = ({feature}) => {
    return (
        <div className='text-white flex gap-3 mt-4'>
            <CircleCheckBig /><span>{feature}</span>
        </div>
    );
};

export default Feature;