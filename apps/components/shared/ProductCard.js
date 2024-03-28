'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactStars from "react-rating-stars-component";

// import { Rating } from 'react-simple-star-rating';
const ProductCard = ({ products, fit }) => {
  const { productName, image, weight, brand, categories, tags, reviews, description, price, oldPrice, date, } = products
  const discount = ((oldPrice - price) / oldPrice) * 100
  const discountPrce = discount.toFixed(2)
  const handleAddToCart = () => {
    toast.success('Your Product Has Been added')
  }
  const calculateReviewsAverage = () => {
    if (reviews.length === 0) {
        return 0; // or any default value you prefer
    }
    let average = reviews.reduce((acc, review) => {
        return acc + review.rating / reviews.length;
    }, 0);
    return average.toFixed(1);
}


  return (
  <div className='relative'>
      <div style={{ transition: 'transform 0.2s ease-in' }}
      className={`p-4 rounded-md w-full  border !bg-white transition-all duration-300 hover:shadow-md shadow-s ${fit ? 'hover:h-[490px] bg-white  hover:border hover:border-gray-200 duration-300 transition-all border' : 'border'}
       h-[420px] hover:h-[470px] ease-in-out delay-150 $`}>
      {/* <Toaster/> */}
      <Link href='/' className='z-0'>
        {
          oldPrice > 0 && <span className='text-xs absolute top-3 left-4 font-normal bg-orange rounded inline-block py-1 px-2  text-white'>{discountPrce}% off</span>
        }
        <Image src={image} className='mt-2' alt='product' width={270} height={270} />
        <h1 className='text-[15px] mt-5 font-normal hover:text-primery duration-300 text-[#09f] truncate'>{productName}</h1>


        <div className='flex gap-2 items-center'>
        <ReactStars
            count={5}
            onChange={calculateReviewsAverage()}
            size={24}
            activeColor="#ffd700"
            value={calculateReviewsAverage()}
            edit={false}
          />  <span className='text-base text-neutral-500 font-normal'>({reviews.length})</span>
        </div>
        <h1 className='text-sm mt-0.5 text- font-light text-heading2 duration-300'>{weight}</h1>
        <div className='flex gap-1 items-center'>
          <h1 className={`${oldPrice ? 'text-orange' : 'text-[#669900]'} text-lg font-medium `}>${price}</h1>
          {
            oldPrice > 0 && <h1 className='text-lg font-light text-heading2 line-through'>${oldPrice}</h1>
          }
        </div>
      </Link>
      <button onClick={handleAddToCart}
        style={{ transition: 'transform 0.2s ease-in' }}
        className='text-sm hidden mt-3 z-10 font-medium group-hover:block  duration-500 transition-all text-center text-heading bg-primery px-4 py-3 rounded'>Add to cart</button>
      <div className='absolute top-5 text-center justify-center  right-4 overflow-hidden flex flex-col'>
        <BsArrowsFullscreen title='Quick View' className='text-base text-primery translate-x-6 group-hover:translate-x-0   ease-in delay-100' style={{ transition: 'transform 0.2s ease-in' }} />
        <IoMdHeartEmpty title='Add Wishlist' className='text-2xl text-primery translate-x-6 group-hover:translate-x-0 mt-4 cursor-pointer delay-200 ' style={{ transition: 'transform 0.3s ease-in' }} />
      </div>
    </div>
  </div>
  )
}

export default ProductCard