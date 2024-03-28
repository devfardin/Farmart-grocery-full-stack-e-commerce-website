import Container from '@/apps/components/shared/Container'
import Peragraph from '@/apps/components/shared/Peragraph'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoPlus } from "react-icons/go";
import { PiMinus } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiPhone } from 'react-icons/fi'
const SingleProduct = () => {
  const footerInfo = [
    {
      icon: '/icon/f_1.png',
      title: 'Free Shipping',
      desc: 'For all orders over $200'
    },
    {
      icon: '/icon/f_2.png',
      title: '1 & 1 Returns',
      desc: 'Cancellation after 1 day'
    },
    {
      icon: '/icon/f_3.png',
      title: '100% Secure Payment',
      desc: 'Gurantee secure payments'
    }
  ]
  return (
    <div>
      <div className='py-10 bg-bgColor'>
        <Container>
          <div className='flex items-start flex-wrap gap-2'>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>Home</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>/</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>Product</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>/</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>Wines & Alcohol Drinks</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>/</span>
            <span className='text-[15px] font-normal text-[#0099CC] hover:text-primery transition-all duration-300 cursor-pointer'>Soft Mochi & Galeto Ice Cream</span>
          </div>
        </Container>
      </div>
      <Container>
        <div className='grid grid-cols-8 gap- items-top justify-start md:mt-0 md:mb-12 lg:my-16'>
          <div className='col-span-8 md:col-span-8 lg:col-span-3 '>
            <Image width={1000} height={1000} src='https://farmart.botble.com/storage/products/27-1.jpg' alt='Product Feature Image' className='!w-full' />
          </div>
          <div className='col-span-8 md:col-span-4 lg:col-span-3 border-l-0 lg:border-l pl-0 lg:pl-10'>
            <h1 className='text-2xl  font-medium text-heading mb-2'>Soft Mochi & Galeto Ice Cream</h1>
            <h1 className='text-sm text-heading2'>Brand: <Link href='/' className='text-sm font-normal text-link'>Soda Brand</Link></h1>
            <div className='mb-4 mt-3 border-b '></div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-medium text-active'>$1,214.00</h1>
              <h1 className='text-base text-heading2'>Sold By: <Link href='/' className='text-base font-normal  text-link'>Fardin</Link></h1>
              <Peragraph pera='Unrestrained and portable active stereo speaker
                Free from the confines of wires and chords
                20 hours of portable capabilities
                Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                3/4″ Dome Tweeters: 2X and 4'/>
              <div className='mt-3'>
                <h1 className='text-base bg-[#EBFAE9] inline-block font-light border-active border-1 rounded-md  py-2 px-3'>Availability: <span className='font-normal text-base text-active'>15 products available</span></h1>
              </div>
              <div className='my-3 border-b'></div>
              <h1 className='text-base text-heading2'>Quantity:</h1>

              <div className='flex gap-3 items-center'>
                <div className='flex items-center border rounded-sm p-0 m-0'><button className='text-xl text-heading2 font-medium px-2 m-0 bg-[#F7F7F7] py-3'><PiMinus /></button> <input className='text-lg font-normal py-1 px-1 outline-none w-10' name='quentity' type='text' /> <button className='text-xl m-0 text-heading2 font-medium px-2 bg-[#F7F7F7] py-3'><GoPlus /></button></div>
                <button className='text-black font-medium text-base bg-primery px-6 py-2.5 rounded-sm'>Add to cart</button>
              </div>

              <button className='flex mt-1 items-center gap-1'><IoMdHeartEmpty className='text-lg' /> <span>Wishlist</span></button>
              <div className='my-3 border-b'></div>
              <div className='flex gap-2 flex-col'>
              <h1 className='text-sm text-heading2'>SKU:
              <span href='/' className='text-sm font-normal text-link'> #veg20957</span>
              </h1>
              <h1 className='text-sm text-heading2'>Categories: 
              <span href='/' className='text-sm font-normal text-link'> Bouncers, Fruit, Fruits & Vegetables, Meat & Poultry, Milk, Butter & Eggs, Milks and Dairies, Nursery, Pushchairs, Toys, Vegetables</span>
              </h1>
              <h1 className='text-sm text-heading2'>Tags: 
              <span href='/' className='text-sm font-normal text-link'> beef, foody, healthy, meat, organic food</span>
              </h1>
              </div>
            </div>
          </div>

          <div className='col-span-8 md:col-span-4 lg:col-span-2 ml-0 my-10 md:mt-0 md:ml-7'>
            <div className='bg-[#F8F9FA] p-4 rounded-sm'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between md:flex-wrap gap-'>
            {
              footerInfo.map((item, index) => <div key={index} className='flex items-center border-b last:border-b-0  py-3 gap-3'>
                <img src={item.icon} />
                <div className=''>
                  <h1 className='text-[17px] font-semibold text-heading'>{item.title}</h1>
                  <p className='text-sm text-heading2 font-light'>{item.desc}</p>
                </div>
              </div>)
            }
          </div>
            </div>
            <div className='bg-[#F8F9FA] p-5 rounded-sm mt-8 '>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between md:flex-wrap gap-'>
             <h1> <span className='text-heading2 text-xl items-center font-medium '>Hotline Order:</span></h1>
            <h1 className='text-base font-light text-text mb-2'>Mon - Fri: 7:00 am - 18:00PM</h1>
            <a href='tel:+965 7492-4277' className='text-2xl font-medium text-heading duration-300 hover:text-primery'>(+965) 7492-4277</a>
          </div>
            </div>
          </div>
        </div>


      </Container>
    </div>
  )
}

export default SingleProduct