import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from "react-icons/bs";

const SectionTitle = ({title,lable,link}) => {
  return (
    <div className='flex gap-7 items-center'>
        <h1 className='text-3xl font-semibold text-heading'>{title}</h1>
        <div>
            <Link href={link} className='text-sm font-normal text-heading2 hover:text-primery duration-300 flex items-center gap-1'> {lable} <BsChevronRight className='text-lg'/> </Link>
        </div>
    </div>
  )
}

export default SectionTitle