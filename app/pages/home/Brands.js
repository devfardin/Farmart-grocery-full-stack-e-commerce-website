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
const Brands = () => {
    const brand=[
        {
            brandName: 'FOOdPOUCH',
            title:'New Snacks Release',
            image:'/images/homepage-new-brand-img-1.png',
            link:''
        },
        {
            brandName: 'itea jsc',
            title:'Happy Tea 100% Organic. From $29.9',
            image:'/images/homepage-new-brand-img-2.png',
            link:''
        },
        {
            brandName: 'Soda BRand',
            title:'Soda Can Box 24 Pieces - 30% OFF',
            image:'/images/homepage-new-brand-img-3.png',
            link:''
        },
        {
            brandName: 'farmart',
            title:'Fresh Meat Saugage. BUY 2 GET 1!',
            image:'/images/homepage-new-brand-img-4.png',
            link:''
        },
        {
            brandName: 'itea jsc',
            title:'Happy Tea 100% Organic. From $29.9',
            image:'/images/homepage-new-brand-img-2.png',
            link:''
        },
    ]
    return (
        <div className='mt-16'>
            <Container>
            <SectionTitle title='Featured Brands' lable='All Brands' link='/brands' />
            <div className='mt-10'>
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
                        className="mySwiper h-full "
                    >
                        {
                            brand.map((item, index) => <SwiperSlide key={index}
                                className='h-full  mb-14 text-left group'
                            >
                                <Link href={item.link}>
                                    <Image src={item.image} alt='Category Image' width={300} height={200} />
                                    <h1 className='text-base uppercase mt-5 text- font-bold text-text'>{item?.brandName}</h1>
                                    <h1 className='text-lg mt-0.5 text- font-medium text-heading duration-300 group-hover:text-primery'>{item?.title}</h1>
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