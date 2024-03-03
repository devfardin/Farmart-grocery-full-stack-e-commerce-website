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
import { ProductDate } from '@/apps/utils/helpers';
import ProductCard from '@/apps/components/shared/ProductCard';



const TopSaver = () => {
    return (
        <div className='my-16'>
            <Container>
                <div className='ml-1 grid grid-cols-8 gap-4 justify-between'>
                    <div className='col-span-8 md:col-span-5 lg:col-span-6 mr-1'>
                      
                       <SectionTitle title='Top Saver Today' lable='All Offers' link='/' />
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper h-full md:h-[87%] lg:[90%] mt-7 lg:mt-10"
                        >
                            {
                                ProductDate().map((item, index) => <SwiperSlide key={index}
                                    className='text-left group'
                                >
                                    <ProductCard products={item} />

                                </SwiperSlide>)
                            }

                        </Swiper>
                      
                    </div>
                    
                    <div className='mt-16 md:mt-0  col-span-8 md:col-span-3 lg:col-span-2 bg-[url(/images/homepage-new-contact-form-bg.png)] bg-no-repeat bg-center bg-cover py-10 px-6 overflow-hidden'>
                        <h1 className='text-5xl font-bold text-orange text-center mb-3 '>15% OFF
                        </h1>
                        <p className='text-xl font-normal text-center text-heading'>
                            For new member sign up at
                            the first time
                        </p>
                        <form>
                            <input placeholder='Username' type='text' name='userName'
                                className='text-lg font-light outline-none border  text-heading bg-white py-3 mt-7 px-4 rounded-md mb-3 w-full' />
                            <input placeholder='Email address' type='email' name='email'
                                className='text-lg font-light outline-none border  text-heading bg-white py-3  px-4 rounded-md mb-3 w-full' />
                            <input placeholder='Password' type='password' name='password'
                                className='text-lg font-light outline-none border  text-heading bg-white py-3  px-4 rounded-md mb-3 w-full' />
                            <div className='flex justify-center'>
                                <button className='text-lg font-medium block text-center text-heading bg-primery px-6 py-3 rounded'> Register Now </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default TopSaver