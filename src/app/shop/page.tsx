import Image from 'next/image';
import filterL from '../assets/filter-left.svg';
import filterR1 from '../assets/filter-right-1.svg';
import filterR2 from '../assets/filter-right-2.svg';
import filterR3 from '../assets/filter-right-3.svg';
import Product from '../product/page';
import Feature from "../feature/page";
import pointer from '../assets/pointer.svg';
import restagelImg from '../assets/Rectangle layout-img.svg';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <Image className="w-full h-auto" src={restagelImg} alt="Background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 py-12">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <h2 className="text-lg flex items-center justify-center gap-2">
            Home <Image src={pointer} alt="Pointer" className="w-4 h-4" /> Shop
          </h2>
        </div>
      </div>
      
      <div className="bg-rose-200 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mx-6 md:mx-24">
          <Image src={filterL} alt="Filter Left" className="w-6 h-6" />
          <p className="text-lg font-medium">Filter</p>
          <div className="flex gap-2">
            <Image src={filterR1} alt="Filter Right 1" className="w-6 h-6" />
            <Image src={filterR2} alt="Filter Right 2" className="w-6 h-6" />
            <Image src={filterR3} alt="Filter Right 3" className="w-6 h-6" />
          </div>
          <p className="text-sm text-gray-800">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center gap-4 mx-6 md:mx-24">
          <p className="text-lg font-medium">Show</p>
          <button className="w-14 h-14 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition">
            16
          </button>
          <p className="text-lg font-medium">Sort by</p>
          <button className="w-44 h-14 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition text-left pl-4">
            Default
          </button>
        </div>
      </div>
      
      <div className="my-16 mx-6 md:mx-24">
        <Product />
      </div>
      
      <div className="my-16 mx-6 md:mx-24">
        <Feature />
      </div>
    </div>
  );
}

export default Page;
