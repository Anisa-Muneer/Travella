import React from 'react'
import { FaCalendar, FaMap } from 'react-icons/fa'
import { FaPerson, FaPersonArrowDownToLine, FaUserGroup } from 'react-icons/fa6'

function SearchBox() {
    return (
        <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
            {/* 1st search input */}
            <div className='flex items-center space-x-6'>
                <FaMap className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                    <input type="text" placeholder='Where are you goiing?' className='outline-none border-none placeholder:text-gray-800' />
                </div>
            </div>
            {/* 2nd search input */}
            <div className='flex items-center space-x-6'>
                <FaCalendar className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                    <input type="date" placeholder='dd/mm/yyyy' className='outline-none border-none' />
                </div>

            </div>
            {/* 3rd search input */}
            <div className='flex items-center space-x-6'>
                <FaCalendar className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                    <input type="date" placeholder='dd/mm/yyyy' className='outline-none border-none' />
                </div>
            </div>
            {/* 4th search input */}
            <div className='flex items-center space-x-6'>
                <FaUserGroup className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                    <p className='text-base font-normal'>1 Guest 1 Room</p>
                </div>

            </div>
        </div>
    )
}

export default SearchBox
