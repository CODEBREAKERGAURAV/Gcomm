import React,{useEffect} from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
 

const Services = () => {
   useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <div className="w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
        <img src={shipping} alt='' className="mb-[20px] w-[60px]"/>
        <h1 className="text-xl text-black font-semibold">Worldwide Shipping</h1>
        <p className="text-[17px] text-gray-500">We  Ship All Around The World</p>


      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
        <img src={payment} alt='' className="mb-[20px] w-[60px]"/>
        <h1 className="text-xl text-black font-semibold">100% Secure Payment</h1>
        <p className="text-[17px] text-gray-500">Cash On Delivery Available</p>


      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
        <img src={refund} alt='' className="mb-[20px] w-[60px]"/>
        <h1 className="text-xl text-black font-semibold">Easily Return</h1>
        <p className="text-[17px] text-gray-500">Return Within 7 Days</p>


      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
        <img src={gift} alt='' className="mb-[20px] w-[60px]"/>
        <h1 className="text-xl text-black font-semibold">Offers and Gifts</h1>
        <p className="text-[17px] text-gray-500">Everything For You</p>


      </div>



    </div>
  )
}

export default Services