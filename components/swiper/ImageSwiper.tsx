'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'

import { Pagination, Navigation } from 'swiper/modules';

function ImageSwiper({data = []}:{data: any[]}){
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="relative w-full h-full text-white"
    >
        {data.map((item,idx) => (
            <SwiperSlide key={idx} className='relative w-full h-full'>
                <Image
                    className='object-cover'
                    src={item.href}
                    alt={item.name}
                    fill
                />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ImageSwiper