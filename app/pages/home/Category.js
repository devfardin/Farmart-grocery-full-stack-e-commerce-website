'use client'
import Container from '@/apps/components/shared/Container'
import SectionTitle from '@/apps/components/shared/SectionTitle'
import Image from 'next/image'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';


// Import Swiper styles
// import 'swiper/css/pagination';
const Category = () => {
    const category = [
        {
            title: 'Breads Sweets',
            image: '/images/homepage-new-cat-6.png',
            link: '',
        },
        {
            title: 'Coffees and Teas',
            image: '/images/homepage-new-cat-2.png',
            link: '',
        },
        {
            title: 'Food Cupboard',
            image: '/images/homepage-new-cat-3.png',
            link: '',
        },
        {
            title: 'Frozen Seafoods',
            image: '/images/homepage-new-cat-1.png',
            link: '',
        },
        {
            title: 'Fruits & Vegetables',
            image: '/images/homepage-new-cat-7.png',
            link: '',
        },
        {
            title: 'Milks and Dairies',
            image: '/images/homepage-new-cat-8.png',
            link: '',
        },
        {
            title: 'Alcohol Drinks',
            image: '/images/homepage-new-cat-2.png',
            link: '',
        },
        {
            title: 'Pet Foods',
            image: '/images/homepage-new-cat-4.png',
            link: '',
        },

        {
            title: 'Raw Meats',
            image: '/images/homepage-new-cat-5.png',
            link: '',
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

export default Category