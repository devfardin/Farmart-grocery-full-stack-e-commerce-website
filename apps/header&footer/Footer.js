import React from 'react'
import Container from '../components/shared/Container'
import Link from 'next/link'
import Peragraph from '../components/shared/Peragraph'
import { FiPhone } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Image from 'next/image';
const Footer = () => {
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
    },
    {
      icon: '/icon/f_4.png',
      title: '24/7 Dedicated Support',
      desc: 'Anywhere & anytime'
    },
    {
      icon: '/icon/f_5.png',
      title: 'Daily Offers',
      desc: 'Discount up to 70% OFF'
    },
  ]
  const usefullLink = [
    {
      label: 'About Us',
      link: '/'
    },
    {
      label: 'Help Center',
      link: '/'
    },
    {
      label: 'Career',
      link: '/'
    },
    {
      label: 'Policy',
      link: '/'
    },
    {
      label: 'Flash Sale',
      link: '/'
    },
    {
      label: 'Official',
      link: '/'
    },
    {
      label: 'Sitemap',
      link: '/'
    },
  ]
  const helpCenter = [
    {
      label: 'Payments',
      link: '/'
    },
    {
      label: 'Shipping',
      link: '/'
    },
    {
      label: 'Product Returns',
      link: '/'
    },
    {
      label: 'FAQ',
      link: '/'
    },
    {
      label: 'Checkout',
      link: '/'
    },
    {
      label: 'Other Issues',
      link: '/'
    },
  ]

  const FarmartBusines = [
    {
      label: 'Sell On Farmart',
      link: '/'
    },
    {
      label: 'Affiliate Program',
      link: '/'
    },
    {
      label: 'Our Suppliers',
      link: '/'
    },
    {
      label: 'Accessibility',
      link: '/'
    },
    {
      label: 'Advertise With Us',
      link: '/'
    },

  ]
  return (
    <div>
      {/* Footer header */}
      <div className='py-8 border-y bg-white'>
        <Container>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between md:flex-wrap gap-5'>
            {
              footerInfo.map((item, index) => <div key={index} className='flex items-center gap-3'>
                <img src={item.icon} />
                <div>
                  <h1 className='text-lg font-medium text-heading2'>{item.title}</h1>
                  <p className='text-sm text-text font-light'>{item.desc}</p>
                </div>
              </div>)
            }
          </div>
          <div>

          </div>
        </Container>
      </div>-
      {/* footer body */}
      <div className='py-10 border-b bg-white'>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-start justify-between gap-9'>

            <div className='col-span-2'>
              <h1 className='text-heading2 font-semibold text-lg mb-3'>Farmart – Your Online Foods & Grocery</h1>
              <Peragraph
              pera='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque'
              />
              <div className='mt-5 flex flex-col gap-3'>
              <span className='flex items-start gap-3'> <FiPhone className='text-xl text-heading2'/> <h1> <span className='text-heading2 flex flex-wrap '>Hotline 24/7:</span> <a href='tel:+965 7492-4277' className='text-2xl font-medium text-heading duration-300 hover:text-primery'>(+965) 7492-4277</a> </h1> </span>

              <span className='flex items-start gap-3'> <FiPhone className='text-xl text-heading2'/> <span className='text-heading2 flex flex-wrap '> 959 Homestead Street Eastlake, NYC</span> </span>

              <span className='flex items-start gap-3'> <FiPhone className='text-xl text-heading2'/>  <a href='mailto:+965 7492-4277' 
              className='text-heading2 duration-300 hover:text-primery'> support@farmart.com</a> </span>

              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h1 className='text-heading2 font-semibold text-lg mb-3'>Useful Links</h1>
              {
                usefullLink.map((item, index) => <Link href={item.link} key={index} className='flex flex-col gap-y-5'>
                  <h1 className='text-base font-normal cursor-pointer hover:text-primery mb-3 duration-300 text-text'>{item.label}</h1>
                </Link>)
              }
            </div>

            {/* Help Center */}
            <div>
              <h1 className='text-heading2 font-semibold text-lg mb-3'>Help Center</h1>
              {
                helpCenter.map((item, index) => <Link href={item.link} key={index} className='flex flex-col gap-y-5'>
                  <h1 className='text-base font-normal cursor-pointer hover:text-primery mb-3 duration-300 text-text'>{item.label}</h1>
                </Link>)
              }
            </div>

            {/* Farmart Busines */}
            <div>
              <h1 className='text-heading2 font-semibold text-lg mb-3'>Farmart Busines</h1>
              {
                FarmartBusines
                  .map((item, index) => <Link href={item.link} key={index} className='flex flex-col gap-y-5'>
                    <h1 className='text-base font-normal cursor-pointer hover:text-primery mb-3 duration-300 text-text'>{item.label}</h1>
                  </Link>)
              }
            </div>

            {/* Subscribe  */}
            <div className='col-span-2'>
            <h1 className='text-heading2 font-semibold text-lg mb-3'>Farmart Newsletter</h1>
            <Peragraph
            pera='Register now to get updates on promotions and coupns. Don’t worry! We not spam'
            />
              <h1 className='text-lg font-medium text-heading2 mt-2 mb-1'>Subscribe Us</h1>
            <form className='flex flex-col'>
              <input type='email' required name='subscribe' placeholder='Your Email Address....'
               className='text-base font-medium text-heading py-2 px-3 bg-white border rounded-md outline-none border-primery'/>
               <button  className='text-lg mt-2 font-medium text-heading bg-primery duration-300 px-4 py-1.5 rounded-md'>Subscribe</button>
            </form>
            </div>
          </div>
        </Container>
      </div>

      <div className='py-5'>
          <Container>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-between '>
              <p className='text-base font-normal text-text'>© {new Date().getFullYear()} 
               <a href='https://fardin-ahmed.netlify.app/' target='_blank' className='cursor-pointer text-heading font-medium hover:text-primery duration-300'> Fardin Ahmed</a> All rights reserved</p>
               <img src='/images/footer-new-payment.png'/>
            </div>
          </Container>
        </div>

    </div>
  )
}

export default Footer