"use client";
import { ChangeEvent, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Feature from "../feature/page";
import { ToastContainer, toast } from 'react-toastify';
import Image from "next/image";
import pointer from '../assets/pointer.svg'
import restagelImg from '../assets/Rectangle layout-img.svg'
import { schema } from './validation'; // Adjust the path as needed
import { ValidationError } from 'yup';

interface IInitialState {
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    streetAdres: string;
    city: string;
    province: string;
    zipCode: string;
    phone: string;
    emailAddres: string;
    information: string
}

const initialState: IInitialState = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAdres: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    emailAddres: '',
    information: ''
}

function PageCheckout() {
    const [state, setState] = useState(initialState);
    const { firstName, lastName, companyName, country, streetAdres, city, province, zipCode, phone, emailAddres, information } = state;

    const handleSubmit = async () => {
        try {
            await schema.validate(state, { abortEarly: false });
            toast.success('Message sent successfully', {
                position: "top-right",
                autoClose: 5000,
            });
            console.log(state);
            setState(initialState);
        } catch (error) {
            if (error instanceof ValidationError) {
                const errorMessages = error.inner.map(err => err.message);
                toast.error(errorMessages.join(', '), {
                    position: "top-right",
                    autoClose: 5000,
                });
            } else {
                console.error(error);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <div>
                <div className="relative flex items-center justify-center">
                    <Image className="z-0" src={restagelImg} alt="res" />
                    <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
                        <h1 className="text-5xl font-medium mb-5">Checkout Page</h1>
                        <h2 className="flex gap-5 text-base font-medium">Home <Image src={pointer} alt="res" /> Checkout Page</h2>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="ml-[110px] mt-5">
                        <h2 className="font-semibold text-3xl text-black">Billing details</h2>
                    </div>
                    <div className="flex items-start justify-around">
                        <div>
                            <div className="flex items-center">
                                <div className="flex flex-col my-5 mr-[30px]">
                                    <label className="my-3" htmlFor="name">First Name</label>
                                    <input name="firstName" onChange={handleChange} value={firstName} id="name" className="rounded-xl border border-gray-500 w-[211px] h-[75px]" type="text" />
                                </div>
                                <div className="flex flex-col my-5">
                                    <label className="my-3" htmlFor="lastname">Last Name</label>
                                    <input name="lastName" onChange={handleChange} value={lastName} id="lastname" className="rounded-xl border border-gray-500 w-[211px] h-[75px]" type="text" />
                                </div>
                            </div>
                            <div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="companyName">Company Name (Optional)</label>
                                    <input name="companyName" onChange={handleChange} value={companyName} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="country">Country / Region</label>
                                    <select name="country" onChange={handleChange} value={country} className="border border-gray-500 w-[453px] h-[75px] rounded-xl">
                                        <option value="Uzbekistan">Uzbekistan</option>
                                    </select>
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="streetAdres">Street address</label>
                                    <input name="streetAdres" onChange={handleChange} value={streetAdres} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="city">Town / City</label>
                                    <input name="city" onChange={handleChange} value={city} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="province">Province</label>
                                    <select name="province" onChange={handleChange} value={province} className="border border-gray-500 w-[453px] h-[75px] rounded-xl">
                                        <option value="Western Province">Western Province</option>
                                    </select>
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="zipCode">ZIP code</label>
                                    <input name="zipCode" onChange={handleChange} value={zipCode} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="phone">Phone</label>
                                    <input name="phone" onChange={handleChange} value={phone} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex">
                                    <label className="my-3" htmlFor="emailAddres">Email address</label>
                                    <input name="emailAddres" onChange={handleChange} value={emailAddres} className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                                <div className="flex-col flex my-5">
                                    <input name="information" onChange={handleChange} value={information} placeholder="Additional information" className="rounded-xl border border-gray-500 w-[453px] h-[75px]" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[550px] h-auto">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-2xl text-black font-medium">Product</p>
                                    <p><span className="text-gray-300 text-base">Asgaard sofa</span> x 1</p>
                                    <p className="text-base font-medium text-black">Subtotal</p>
                                    <p className="text-base font-medium text-black">Total</p>
                                </div>
                               
                                <div>
                                    <p className="text-2xl text-black font-medium">Subtotal</p>
                                    <p className="text-base text-slate-700 font-light">Rs. 250,000.00</p>
                                    <p className="text-base text-slate-700 font-light">Rs. 250,000.00</p>
                                    <p className="text-2xl text-amber-700 font-bold">Rs. 250,000.00</p>
                                </div>
                            </div>
                            <div>
                                <hr className="my-8" />
                                <div className="flex flex-row items-start justify-start">
                                    <button className="w-5 h-5 rounded-full bg-black border-none mr-6"></button>
                                    <p className="text-base text-black font-medium">Direct Bank Transfer</p>
                                </div>
                                <p className="my-6 text-lg text-gray-500 font-light">
                                    Make your payment directly into our bank account. Please use <br />
                                    your Order ID as the payment reference. Your order will not be <br /> 
                                    shipped until the funds have cleared in our account.
                                </p>
                                <div>
                                    <div className="flex items-center">
                                        <button className="border-gray-500 border w-5 h-5 rounded-full mr-7"></button>
                                        <p className="text-base font-medium text-gray-500">Direct Bank Transfer</p>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <button className="border-gray-500 border w-5 h-5 rounded-full mr-7"></button>
                                        <p className="text-base font-medium text-gray-500">Cash On Delivery</p>
                                    </div>
                                </div>
                                <p className="text-base text-slate-500 font-medium">
                                    Your personal data will be used to support your experience <br />
                                    throughout this website, to manage access to your account, and <br />
                                    for other purposes described in our <span className="text-black font-semibold">privacy policy.</span>
                                </p>
                                <button onClick={handleSubmit} className="w-[318px] h-[60px] rounded-2xl border-black text-black border font-medium text-lg my-5">
                                    Place Order
                                </button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Feature />
            </div>
        </div>
    );
}

export default PageCheckout;
