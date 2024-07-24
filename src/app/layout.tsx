import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "./assets/furniture_logo.svg";
import pImg from './assets/people-icon.svg'
import sImg from './assets/search-icon.svg'
import shImg from './assets/shop-icon.svg'
import yImg from './assets/heart-icon.svg'

import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const FurnitureLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-orange-50 text-gray-900">
          <nav className="bg-yellow-100 text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex gap-2">
                <Image src={logo} alt="logo img" width={50} />
                <h2 className="text-orange-600 font-bold text-3xl">Furniro</h2>
              </div>
              <div className="flex space-x-12">
                <Link href="/" className="text-orange-700 hover:text-orange-500">Home</Link>
                <Link href="/shop" className="text-orange-700 hover:text-orange-500">Shop</Link>
                <Link href="/CheckoutPage" className="text-orange-700 hover:text-orange-500">Checkout</Link>
                <Link href="/contact" className="text-orange-700 hover:text-orange-500">Contact</Link>
                <Link href="/blog" className="text-orange-700 hover:text-orange-500">About Us</Link>

              </div>
              <div className="flex space-x-6">
                <Link href='/blog'><Image width={25} src={pImg} alt="img" /></Link>
                <Link href='productComparison'><Image className="cursor-pointer" width={25} src={sImg} alt="img" /></Link>
                <Link href='/cart'><Image className="cursor-pointer" width={25} src={shImg} alt="img" /></Link>
                <Image className="cursor-pointer" width={25} src={yImg} alt="img" />
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto p-8 bg-orange-100 rounded-lg mt-8">
            {children}
          </main>
          <footer className="bg-yellow-100">
            <div className="container mx-auto p-8">
              <div className="flex justify-around items-start">
                  <div>
                    <h2 className="text-orange-600 font-bold text-3xl mb-[55px]">Furniro</h2>
                    <p className="text-orange-800">400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
                  </div>
                  <div>
                    <ul>
                      <p className="text-base font-medium text-orange-500 mb-[55px]">Links</p>
                      <li className="text-orange-700">Home</li>
                      <li className="my-[46px] text-orange-700">Shop</li>
                      <li className="text-orange-700">About</li>
                      <li className="mt-[55px] text-orange-700">Contact</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <p className="text-base font-medium text-orange-500 mb-[55px]">Help</p>
                      <li className="text-orange-700">Payment Options</li>
                      <li className="my-[46px] text-orange-700">Returns</li>
                      <li className="text-orange-700">Privacy Policies</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium text-orange-500 mb-[55px]">Discover Our New Collection</p>
                    <input className="border-b-2 border-orange-400 mr-2 outline-none cursor-pointer bg-transparent" type="text" placeholder="Enter Your Email Address" />
                    <button className="border-b-2 border-orange-400 cursor-pointer text-orange-600 hover:text-orange-500">SUBSCRIBE</button>
                  </div>
              </div>
            </div>
            <div className="container mx-auto">
              <p className="text-start text-orange-700 py-4">2023 furino. All rights reverved</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FurnitureLayout>{children}</FurnitureLayout>;
}