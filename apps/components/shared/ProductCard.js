import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ products }) => {
  const { productName, image,weight,brand,categories,tags,reviews, description, price,oldPrice,date,} = products
  return (
    <div className='border p-4 rounded-md'>
      <Link href={'/'}>
        <Image src={image} alt='product' width={270} height={270} />
        <h1 className='text-base mt-5 font-normal hover:text-primery duration-300 text-[#09f]'>{productName}</h1>
        <h1 className='text-lg mt-0.5 text- font-medium text-heading duration-300 group-hover:text-primery'>{weight}</h1>
      </Link>
    </div>
  )
}

export default ProductCard