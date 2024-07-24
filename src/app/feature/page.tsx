import React from 'react'
import cup from '../assets/kubok.svg';
import gift from '../assets/gift.svg';
import starts from '../assets/starts.svg';
import support from '../assets/support.svg';
import Image from 'next/image';

function Feature() {
  return (
    <div className='bg-rose-100 flex items-center justify-around p-10'>
      <div className='flex items-center gap-3'>
        <Image width={52} height={60} src={cup} alt='cup' />
        <div>
            <h2 className='text-2xl text-black font-semibold'>High Quality</h2>
            <p className='text-xl text-gray-400 font-medium'>crafted from top materials</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Image width={52} height={60} src={starts} alt='starts' />
        <div>
            <h2 className='text-2xl text-black font-semibold'>Warranty Protection</h2>
            <p className='text-xl text-gray-400 font-medium'>Over 2 years</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Image width={52} height={60} src={gift} alt='gift' />
        <div>
            <h2 className='text-2xl text-black font-semibold'>Free Shipping</h2>
            <p className='text-xl text-gray-400 font-medium'>Order over 150 $</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Image width={52} height={60} src={support} alt='support' />
        <div>
            <h2 className='text-2xl text-black font-semibold'>24 / 7 Support</h2>
            <p className='text-xl text-gray-400 font-medium'>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
