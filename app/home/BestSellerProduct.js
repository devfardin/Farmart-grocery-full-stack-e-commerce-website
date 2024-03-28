'use client'
import ProductCard from '@/apps/components/shared/ProductCard'
import { ProductDate } from '@/apps/utils/helpers'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '@/apps/components/shared/SectionTitle';
import Container from '@/apps/components/shared/Container';
const BestSellerProduct = () => {
    return (
        <div className='mt-10 bg-bgColor py-16'>
            <Container>
                <div className='mx-1'>
                    <SectionTitle title='Best Seller' lable='All Offers' link='/' />
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                    
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
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper  h-[510px]  mt-7"
                    >
                        {
                            ProductDate().map((item, index) => <SwiperSlide key={index}
                                className='text-left group'
                            >
                                <ProductCard products={item} fit={true}  />

                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default BestSellerProduct