import Image from 'next/image';
import React from 'react'

type props = {
    image: string;
    title: string;
}

function WhyChooseCard({ image, title }: props) {
    return (
        <div>
            <Image
                src={image}
                width={70}
                height={70}
                alt='image'
                className='mx-auto'
            />
            {/* content */}
            <h1 className='font-medium text-lg text-gray-900  mt-6 text-center'>{title}</h1>
            <p className='mt-2 text-center text-sm font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default WhyChooseCard
