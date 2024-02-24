'use client'
import Container from '@/apps/components/shared/Container'
import SectionTitle from '@/apps/components/shared/SectionTitle'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { ProductDate } from '@/apps/utils/helpers';
import ProductCard from '@/apps/components/shared/ProductCard';



const TopSaver = () => {
    return (
        <div className='mt-16'>
            <Container>
                <SectionTitle title='Top Saver Today' lable='All Offers' link='/' />
                <div className='mt-10 ml-1 grid grid-cols-5 gap-4 justify-between items-center'>
                    <div className='col-span-4 mr-1'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper h-full"
                    >
                        {
                            ProductDate().map((item, index) => <SwiperSlide key={index}
                                className='h-full  mb-14 text-left group'
                            >
                                <ProductCard products={item}/>
                                
                            </SwiperSlide>)
                        }

                    </Swiper>
                    </div>
                    <div className='col-span-1'></div>
                </div>
            </Container>

        </div>
    )
}

export default TopSaver