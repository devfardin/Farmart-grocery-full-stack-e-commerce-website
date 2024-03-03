import Container from '@/apps/components/shared/Container'
import React from 'react'

const CardBanner = () => {
    return (
        <div className='pb-14 md:pb-14 lg:pt-8 lg:pb-16  bg-bgColor'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='p-10 bg-[url(/images/homepage-new-banner-2.png)] bg-no-repeat bg-cover bg-center rounded-md flex flex-col justify-between'>
                        <h1 className='text-3xl font-semibold text-black mb-5'>
                            Mango Juice <br /> Bottle
                        </h1>
                        <p className='text-sm font-normal text-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>

                    <div className='p-10 bg-[url(/images/homepage-new-banner-3.png)] bg-no-repeat bg-cover bg-center rounded-md justify-between flex flex-col'>
                        <div className='mb-4'>
                            <h1 className='text-3xl font-semibold text-orange mb-2'>
                                $9.9 <span className='!text-lg line-through text-black font-medium'>15.6</span>
                            </h1>
                            <h1 className='text-lg font-medium uppercase text-black mt-4'>
                                Meat Pork <br /> Canned
                            </h1>
                        </div>
                        <span className='text-sm text-neutral-600 text-light'>250g</span>
                    </div>

                    <div className='p-10 bg-[url(/images/homepage-new-banner-4.png)] bg-no-repeat bg-cover bg-center rounded-md flex flex-col justify-between'>
                        <div>
                        <h1 className='text-3xl font-semibold text-white mb-2'>
                            olive oil
                        </h1>
                        <p className='text-sm font-medium text-white'>Best product to make <br/> your favor</p>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm text-white font-medium uppercase'>Only</span>
                            <h1 className='text-white text-2xl font-semibold'>$12.5</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CardBanner