"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Blog1 from '../assets/blog-1.svg';
import Blog2 from '../assets/blog-2.svg';
import Blog3 from '../assets/blog3.svg';
import Blog5 from '../assets/blog-5.svg';
import Blog6 from '../assets/blog6.svg';
import Blog7 from '../assets/blog7.svg';
import Blog8 from '../assets/blog-8.svg';
import Blog9 from '../assets/blog-9.svg';
import peopleBlog from '../assets/people-Blog.svg';
import dateCheck from '../assets/check.svg';
import search from '../assets/search-icon.svg';
import Feature from '../feature/page';
import pointer from '../assets/pointer.svg';
import restagelImg from '../assets/Rectangle layout-img.svg';

interface BlogProps {
  imgSrc: StaticImageData;
  title: string;
  date: string;
  category?: string;
}

const BlogCard: React.FC<BlogProps> = ({ imgSrc, title, date, category }) => (
  <div className='flex flex-col'>
    <Image src={imgSrc} alt={title} />
    <div className='my-5 flex items-center gap-10'>
      <div className='flex items-center justify-between w-20'>
        <Image src={peopleBlog} alt='Admin' />
        <p className='text-base font-normal text-gray-400'>Admin</p>
      </div>
      <div className='flex items-center justify-between w-[125px]'>
        <Image src={dateCheck} alt='Date' />
        <p className='text-base font-normal text-gray-400'>{date}</p>
      </div>
      {category && (
        <div className='flex items-center justify-between w-[75px]'>
          <Image src={dateCheck} alt='Category' />
          <p className='text-base font-normal text-gray-400'>{category}</p>
        </div>
      )}
    </div>
    <div>
      <h1 className='text-3xl text-black font-medium mb-2'>{title}</h1>
      <p className='text-base font-medium text-gray-400'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin 
        <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. 
        <br />Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit 
        <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
      </p>
      <button className='border-b-2 border-black pt-2 pb-1'>Read more</button>
    </div>
  </div>
);

const PageBlog: React.FC = () => {
  const blogs = [
    { imgSrc: Blog1, title: 'Going all-in with millennial design', date: '14 Oct 2022', category: 'Wood' },
    { imgSrc: Blog2, title: 'Exploring new ways of decorating', date: '14 Oct 2022', category: 'Wood' },
    { imgSrc: Blog3, title: 'Handmade pieces that took time to make', date: '14 Oct 2022', category: 'Wood' },
  ];

  const recentPosts = [
    { imgSrc: Blog5, title: 'Going all-in with millennial design', date: '03 Aug 2022' },
    { imgSrc: Blog6, title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
    { imgSrc: Blog7, title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
    { imgSrc: Blog8, title: 'Modern home in Milan', date: '03 Aug 2022' },
    { imgSrc: Blog9, title: 'Colorful office redesign', date: '03 Aug 2022' },
  ];

  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Image className="z-0" src={restagelImg} alt="Blog Background" />
        <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
          <h1 className="text-5xl font-medium mb-5">Blog</h1>
          <h2 className="flex gap-5 text-base font-medium">Home <Image src={pointer} alt="Arrow" />Blog</h2>
        </div>
      </div>
      <div className='flex items-start justify-around mt-[100px]'>
        <div>
          {blogs.map((blog) => (
            <div key={blog.title} className='flex flex-col gap-5 my-10'>
              <BlogCard {...blog} />
            </div>
          ))}
          <div className='flex flex-row items-center justify-end w-[850px] gap-5'>
            <button className='w-12 h-12 bg-amber-600 text-white rounded-xl'>1</button>
            <button className='w-12 h-12 bg-gray-300 text-black rounded-xl'>2</button>
            <button className='w-12 h-12 bg-gray-300 text-black rounded-xl'>3</button>
            <button className='w-24 h-12 bg-gray-300 text-black rounded-xl'>Next</button>
          </div>
        </div>
        <div className='w-[400px]'>
          <div className='border border-gray-400 w-[311px] h-[58px] rounded-xl flex items-center justify-end mb-[50px]'>
            <Image className='mr-5' src={search} alt='Search Icon' />
          </div>
          <div>
            <p className='text-2xl font-medium text-black'>Categories</p>
            <div className='flex w-[280px] items-center justify-between mt-8'>
              <p className='text-base font-medium text-gray-500'>Crafts</p>
              <p className='text-base font-medium text-gray-500'>2</p>
            </div>
            <div className='flex w-[280px] items-center justify-between my-6'>
              <p className='text-base font-medium text-gray-500'>Design</p>
              <p className='text-base font-medium text-gray-500'>8</p>
            </div>
            <div className='flex w-[280px] items-center justify-between'>
              <p className='text-base font-medium text-gray-500'>Handmade</p>
              <p className='text-base font-medium text-gray-500'>7</p>
            </div>
            <div className='flex w-[280px] items-center justify-between my-6'>
              <p className='text-base font-medium text-gray-500'>Interior</p>
              <p className='text-base font-medium text-gray-500'>1</p>
            </div>
            <div className='flex w-[280px] items-center justify-between'>
              <p className='text-base font-medium text-gray-500'>Wood</p>
              <p className='text-base font-medium text-gray-500'>6</p>
            </div>
          </div>
          <div>
            <h2 className='text-2xl text-black font-medium mt-[100px]'>Recent Posts</h2>
            {recentPosts.map((post, index) => (
              <div key={post.title} className='flex items-center mt-5'>
                <Image className='mr-5' src={post.imgSrc} alt={`Recent Post ${index + 1}`} />
                <div>
                  <h3 className='text-lg font-medium'>{post.title}</h3>
                  <p className='text-sm font-normal text-gray-500 mt-2'>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-16 mb-10'>
        <Feature />
      </div>
    </div>
  );
}

export default PageBlog;
