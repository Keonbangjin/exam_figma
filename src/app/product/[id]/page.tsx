 'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pointer from '../../assets/pointer.svg';
import feature from '../../assets/filter-right-3.svg';
import starsOne from '../../assets/one-star.png';
import beshyulduz from '../../assets/beshyulduz.png';
import uchyulduz from '../../assets/three-star.png';
import ikkiyulduz from '../../assets/ikkiyulduz.png';
import starsBirYarim from '../../assets/stars-one-half.png';
import startsonehalf from '../../assets/twohalf.png';
import starsthreehalf from '../../assets/threehalf.png';
import starfourhalf from '../../assets/fourhalf.png';
import zeroStars from '../../assets/zero-stars.png';
import faceBook from '../../assets/face-book.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

interface Product {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  size: string;
  color: string;
}

const getProdId = async (id: string): Promise<Product> => {
  const res = await fetch(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Error fetching product');
  }
  return res.json();
};

const ProductDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const prod = await getProdId(id);
        setProduct(prod);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  const ratingImages = {
    1: starsOne,
    2: ikkiyulduz,
    3: uchyulduz,
    4: beshyulduz,
    5: beshyulduz,
    1.5: starsBirYarim,
    2.5: startsonehalf,
    3.5: starsthreehalf,
    4.5: starfourhalf,
    0: zeroStars,
  };

  return (
    <div>
      <div className="bg-rose-100 h-24 flex items-center gap-5 pl-24">
        <p className="text-base font-normal text-gray-400">Home</p>
        <Image src={pointer} alt="Pointer" />
        <p className="text-base font-normal text-gray-400">Shop</p>
        <Image src={pointer} alt="Pointer" />
        <Image src={feature} alt="Feature" />
        <p className="text-base font-medium text-black">{product.title}</p>
      </div>
      <div className="flex items-start justify-around my-5">
        <div className="flex flex-col">
          {[product.image, product.image, product.image, product.image].map((img, index) => (
            <Image
              key={index}
              className="rounded-md"
              width={100}
              height={60}
              src={img}
              alt={`Product Image ${index + 1}`}
            />
          ))}
        </div>
        <div>
          <Image src={product.image} alt="Product" width={423} height={500} />
        </div>
        <div>
          <h1 className="text-5xl font-normal text-black capitalize">{product.title}</h1>
          <p className="text-2xl font-medium text-gray-400 mt-5 mb-3">Rs {product.price}.00</p>
          <Image
            width={250}
            height={250}
            src={ratingImages[product.rate] || zeroStars}
            alt="Rating Stars"
          />
          <p className="text-sm font-normal text-black mt-5 mb-3">{product.subtitle}</p>
          <p className="text-sm font-normal text-gray-400">Size</p>
          <button className="w-10 h-10 bg-amber-600 text-white rounded-lg uppercase my-3">{product.size}</button>
          <p className="text-sm font-normal text-gray-400">Color</p>
          <button className={`bg-${product.color}-600 w-10 h-10 rounded-full my-3`} />
          <div className="flex items-center gap-5">
            <Link href={`/cart/add/${product._id}`}>
              <button className="w-[200px] h-[60px] border rounded-xl border-black">+ Add to Cart</button>
            </Link>
            <Link href="/productComparison">
              <button className="w-[200px] h-[60px] border rounded-xl border-black">+ Compare</button>
            </Link>
          </div>
          <hr className="border my-10" />
          <div className="flex items-center justify-between w-[290px]">
            <div>
              <p className="text-base font-medium text-gray-400">SKU</p>
              <p className="text-base font-medium text-gray-400">Category</p>
              <p className="text-base font-medium text-gray-400">Tags</p>
              <p className="text-base font-medium text-gray-400">Share</p>
            </div>
            <div>
              <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span> SS001</p>
              <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span> Sofas</p>
              <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span> Sofa, Chair, Home, Shop</p>
              <p className="flex items-center gap-3 text-gray-400">
                <span className="mr-3">:</span>
                <Image src={faceBook} alt="Facebook" />
                <Image src={linkedin} alt="LinkedIn" />
                <Image src={twitter} alt="Twitter" />
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-400 mt-5 mb-3">
            Share your thoughts!
          </p>
          <textarea className="w-full h-32 p-3 border border-gray-300 rounded-lg" placeholder="Write your review here..."></textarea>
          <button className="w-full h-10 mt-5 bg-amber-600 text-white rounded-lg">Submit Review</button>
        </div>
      </div>
      <div>
        <hr className="border-2" />
        <div className="mt-11 mb-5">
          <h2 className="text-3xl font-medium text-center">Related Products</h2>
        </div>
        <div className="flex items-center justify-around">
          {[product.image, product.image, product.image].map((img, index) => (
            <div key={index} className="relative">
              {index % 2 === 0 && (
                <button className={`absolute w-12 h-12 rounded-full text-white top-6 left-[210px] ${index === 0 ? 'bg-rose-400' : 'bg-emerald-500'}`}>
                  {index === 0 ? '-30%' : 'New'}
                </button>
              )}
              <Image width={284} height={300} src={img} alt={`Related Product ${index + 1}`} />
              <div className="bg-gray-200 w-[284px] p-5">
                <h2 className="text-2xl font-semibold text-black">{index === 0 ? 'Home' : index === 1 ? 'Good' : 'Vad'}</h2>
                <p className="text-base font-medium text-gray-400 my-2">Stylish cafe chair</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-medium text-black">
                    {index === 0 ? 'Rp 2.500.000' : index === 2 ? 'Rp 7.000.000' : 'Rp 2.500.000'}
                  </p>
                  {index === 0 && <del className="text-base font-normal text-gray-400">Rp 3.500.000</del>}
                  {index === 2 && <del className="text-base font-normal text-gray-400">Rp 14.000.000</del>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-[44px] mb-[50px]">
          <button className="w-[245px] h-[45px] border border-amber-600">
            <Link className="text-amber-600 text-base font-medium" href='/shop'>Show More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
