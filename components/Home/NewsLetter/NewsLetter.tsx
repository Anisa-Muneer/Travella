import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

function NewsLetter() {
    return (
        <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
            <BsEnvelopePaper className='text-white w-16 h-16 mt-20 ' />
            <h1 className='text-white mt-10 text-lg sm:text-xl md:text-2xl font-semibold tracking-widest'>Your Travel Journey Starts Here</h1>
            <p className='mt-3 text-white text-xs sm:text-sm '>Sign up and we'll send the details to you</p>
            {/* subscribtioninput */}
            <div className='w-full'>
                <input type='text' className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none '
                    placeholder='Email' />
                <button className='px-6 py-3.5 bg-blue-900 hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none text-white'>Subscribe</button>
            </div>
        </div >
    )
}

export default NewsLetter
