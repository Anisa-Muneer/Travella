import Image from 'next/image';
import React from 'react'

type props = {
    image: string;
    title: string;
    date: string
}

function NewsCard({ image, title, date }: props) {
    return (
        <div>
            <div className='h-[300px]'>
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            {/* Textcontent */}
            <h1 className='text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 mt-6 text-lg '>{title}</h1>
            <p className='mt-3 text-sm text-gray-600'>{date}</p>


        </ div >
    )
}

export default NewsCard
