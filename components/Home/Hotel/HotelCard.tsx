import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        review: number;
        price: number;
    }
}

function HotelCard({ hotel }: props) {
    return (
        <div>
            <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden '>
                {/* Add to fav button */}
                <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
                    <FaHeart className='w-3 h-3' />
                </div>
                {/* overlay */}
                <div className='absolute inset-0 bg-black opacity-20  z-10'></div>
                <Image src={hotel.image} alt={hotel.name} width={500} height={500}
                    className='w-full h-full overflow-hidden transition-all duration-300 group-hover:scale-110' />

            </div>
            {/* content */}
            <div>
                <h1 className='text-blue-950 font-semibold mt-4 text-lg hover:text-black transition-all duration-200 cursor-pointer'>{hotel.name}</h1>
                <p className='text-sm text-gray-600 font-medium mt-3 mb-6'>{hotel.location}</p>
                {/* ratings */}
                <div className='flex items-center space-x-2  '>
                    <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'>{hotel.rating}</div>
                    <p className='text-sm text-gray-800 '>Exceptional</p>
                    <p className='text-sm font-bold text-gray-800'>{hotel.review} Reviews</p>
                </div>
                {/* price */}
                <p className='mt-3 text-gray-700 font-medium'>Starting from
                    <span className='text-blue-600 font-bold'> US${hotel.price}</span>
                </p>
            </div >
        </div >
    )
}

export default HotelCard
