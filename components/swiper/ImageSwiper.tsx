'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'

import { Pagination, Navigation } from 'swiper/modules';

function ImageSwiper(
    {
        photosCount = 0,
        alt ='photo',
        href = ''
    }:{
        photosCount: number, 
        alt: string,
        href: string
    }){

    const photos = new Array(photosCount).fill('')

    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="relative w-full h-full text-white"
        >
            {photos.map((item,idx) =>(
                <SwiperSlide key={idx} className='relative w-full h-full'>
                    <Image
                        className='object-cover'
                        src={`/images/zbiorki/${href}/${idx+1}.jpg`}
                        alt={`${alt} ${idx+1}`}
                        fill
                    />
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

export default ImageSwiper