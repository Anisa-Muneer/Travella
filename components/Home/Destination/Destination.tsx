import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

function Destination() {
    return (
        <div className='pt-20 pb-20'>
            {/* sectionheading */}
            <SectionHeading heading='Exploring popular Destination' />
            {/* sectioncontent */}
            <div className='mt-14 w-[80%] mx-auto'>
                {/* slider */}
                <DestinationSlider />
            </div>
        </div>
    )
}

export default Destination
