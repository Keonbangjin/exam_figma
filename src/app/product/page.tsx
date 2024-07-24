'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Item {
  _id: string;
  title: string;
  image: string;
  price: number;
  subtitle: string;
  rate: number;
}

const ProductList: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
        const items: Item[] = await response.json(); 
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper pt-10 mb-10">
      <h2>Our Products</h2>
      <div className="wrapper-child flex justify-center items-center">
        {data.length > 0 ? (
          <ul className="flex gap-10 text-center flex-wrap max-w-[1300px]">
            {data.map((item) => (
              <li className="wrapper-card w-[285px] bg-[#F4F5F7]" key={item._id}>
                <span className="chegirma bg-[#E97171]">-{item.rate}%</span>
                {item.image && <img src={item.image} alt={item.title} className="rounded-md" />}
                <h3 className="ml-5">{item.title}</h3>
                <p className="ml-5">{item.subtitle}</p>
                <span className="flex gap-5 leading-[50px] mb-3 ml-5">
                  <small>Rp {item.price}</small>
                  <small>Rp {item.price}</small>
                </span>
                <div className="qora-fon">
                  <Link href={`/product/${item._id}`} className="add bg-white block mt-[200px] ml-[55px] w-[170px] py-[10px] text-[#E89F71]">Add to Cart</Link>
                  <span className="add1 flex gap-4">
                    <p>Share</p>
                    <p>Compare</p>
                    <p>Like</p>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <Link href="/shop" className="more absolute left-[42%]">Show more</Link>
    </div>
  );
};

export default ProductList;
