'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import home1 from './assets/home-1.svg';
import rooms1 from './assets/rooms Img.svg';
import rooms2 from './assets/rooms-Img2.svg';
import rooms3 from './assets/room-Img-3.svg';
import room4 from './assets/icon-Restangel.svg';
import whole from './assets/all.svg';
import Product from './product/page';

// Category Fetching Component
interface Item {
  id: number;
  name: string;
  image: string;
}

const CategoryComponent: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
        const items: Item[] = await response.json();
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cards'>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='flex justify-center items-center'>
        {data.length > 0 ? (
          <ul className='flex-wrap flex gap-14 text-center max-w-[1300px]'>
            {data.map((item) => (
              <li className='w-[381px] h-[480px] pt-3' key={item.id}>
                {item.image && <img src={item.image} alt={item.name} className='rounded-md w-[100%] h-[100%]' />}
                <h4 className='font-semibold leading-[80px]'>{item.name}</h4>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

// Home Component
async function getCategory() {
  const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

interface ICategorys {
  id: string;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [category, setCategory] = useState<ICategorys[]>([]);

  useEffect(() => {
    getCategory().then(setCategory).catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Image className="absolute z-0" src={home1} alt="img" />
      <div className="w-[600px] h-auto ml-[750px] mt-[100px] z-10 bg-pink-200 pt-[72px] pr-[53px] pb-[47px] pl-[39px]">
        <p className="text-black text-base font-semibold">New Arrival</p>
        <h2 className="text-5xl text-amber-500 font-bold mt-2 mb-5">Discover Our <br />New Collection</h2>
        <p className="text-lg font-medium mb-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="text-white text-base font-bold py-6 px-16 bg-amber-500">BUY Now</button>
      </div>
      <div className="z-10 mt-[250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Browse The Range</h2>
          <p className="text-xl font-normal text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-3 my-5 ml-[120px]">
          {category.map((c) => (
            <div className="w-[350px] h-[440px]" key={c.id}>
              <Image width={350} height={350} src={c.image} alt={c.name} />
              <p className="text-center py-2 text-black text-2xl font-semibold">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-[60px]">
          <Product />
        </div>
        <div className="text-center mt-10">
          {/* <button className="text-amber-500 border-amber-500 border w-[245px] h-[50px] font-semibold text-base text-center">
            <Link href='/shop'>Show More</Link>
          </button> */}
        </div>
        <div className="mt-[100px] h-[670px] bg-rose-100">
          <div className="flex items-center justify-between">
            <div className="ml-20">
              <h2 className="text-4xl text-black font-bold">50+ Beautiful rooms <br />inspiration</h2>
              <p className="text-base text-gray-400 my-5">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
              <button className="text-base font-semibold text-white w-[176px] h-[48px] bg-amber-600">Explore More</button>
            </div>
            <div className="flex gap-10 relative pt-[50px]">
              <Image src={rooms1} alt="rooms" />
              <div>
                <Image src={rooms2} alt="rooms2" />
                <Image className="absolute mt-5" src={room4} alt="room4" />
              </div>
              <div>
                <Image src={rooms3} alt="rooms3" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center my-10">
            <p className="text-xl text-gray-400 font-semibold">Share your setup with</p>
            <h2 className="text-4xl text-black font-bold">#FuniroFurniture</h2>
          </div>
          <div>
            <Image src={whole} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
