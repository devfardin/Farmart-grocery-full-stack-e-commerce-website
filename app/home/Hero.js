'use client'
import { useState } from 'react';
import Container from '@/apps/components/shared/Container';
import Peragraph from '@/apps/components/shared/Peragraph';
import Link from 'next/link';
const Hero = () => {


  return (
    <section className='py-10 bg-[url(/images/slider-bg.jpg)] bg-no-repeat bg-cover bg-center'>
      <Container>

        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>

          <div className='col-span-6 md:col-span-4 flex flex-col justify-between bg-[url(/images/homepage-new-slider-1.jpg)] bg-no-repeat bg-cover bg-center rounded-md py-10 md:py-14 lg:py-24 px-12 '>
            <div>
              <h1 className='text-4xl w-full md:w-96 font-bold text-heading mb-2 '>Active Summer With Juice Milk 300ml</h1>
              <Peragraph pera='New arrivals with naturre fruits, juice milks, essential for summer' style='text-[#000] md:w-96 my-7 font-medium text-lg' />
            </div>

            <div>
              <a href='/b' className='text-lg mt-10 !inline-block  font-medium text-black bg-white px-4 py-2 rounded'> Shop Now</a>
            </div>

          </div>


          <div className='col-span-6 md:col-span-2 flex flex-col  justify-between bg-[url(/images/right-hero1.jpg)] bg-no-repeat bg-cover rounded-md py-10 md:py-14 lg:py-16 px-9 '>
            <div>
              <h1 className='text-4xl  font-bold text-heading mb-2 '>20% SALE OFF</h1>
              <Peragraph pera='Synthetic seeds Net 2.0 OZ' style='text-[#000] w-40  my-5 font-medium text-xl' />
            </div>

            <div>
              <a href='/b' className='text-lg !inline-block  font-medium text-black bg-white px-4 py-2 rounded'> Shop Now</a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
