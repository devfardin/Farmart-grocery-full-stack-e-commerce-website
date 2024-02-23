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
const Brands = () => {
    const brand=[
        {
            brandName: 'FOOdPOUCH',
            title:'New Snacks Release',
            image:''
        },
        {
            brandName: 'itea jsc',
            title:'Happy Tea 100% Organic. From $29.9',
            image:''
        },
        {
            brandName: 'Soda BRand',
            title:'Soda Can Box 24 Pieces - 30% OFF',
            image:''
        },
        {
            brandName: 'farmart',
            title:'Fresh Meat Saugage. BUY 2 GET 1!',
            image:''
        },
    ]
    return (
        <div className='mt-16'>
            <Container>
            <SectionTitle title='Browse by Category' lable='All Category' link='/category' />
            <div className='mt-10'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper h-full "
                    >
                        {
                            category.map((item, index) => <SwiperSlide key={index}
                                className='bg-[#f7f7f6] p-7 hover:bg-white h-full duration-300 hover:shadow-xl mb-12 rounded-md text-center'
                            >
                                <Link href={item.link}>
                                    <Image src={item.image} alt='Category Image' width={300} height={200} />
                                    <h1 className='text-lg mt-3 text-center font-medium text-heading'>{item?.title}</h1>
                                </Link>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>


        </Container>
        </div>
    )
}

export default Brands