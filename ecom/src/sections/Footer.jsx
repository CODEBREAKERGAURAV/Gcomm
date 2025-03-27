import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
   useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
    }, []);

  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center">
      
      {/* Client Logos Section */}
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full bg-purple-500 lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 gap-10">
        {[client1, client2, client3, client4, client5, client6].map((client, index) => (
          <img key={index} src={client} alt={`Client ${index + 1}`} className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"/>
        ))}
      </div>

      {/* Footer Content */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto] grid-cols-1 gap-10">
        
        {/* Branding & App Download */}
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-purple-500 underline italic">Gcomm</h1>
            <p className="text-gray-500 text-justify">
              This is an E-commerce website created by a BTech student, Gaurav. That's why it's named Gcomm.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-semibold">Download Our App</h1>
            <div className="flex gap-4">
              <img src={google} alt="Google Play Store" className="w-[120px]"/>
              <img src={apple} alt="Apple App Store" className="w-[120px]"/>
            </div>
          </div>
        </div>

        {/* Useful Links - Wrapped in Flex */}
        <div className="flex flex-wrap lg:gap-20 gap-10" data-aos="zoom-in" data-aos-delay="200">
          
          {/* Section 1 */}
          <div>
            <h1 className="text-black text-xl font-semibold">Company</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 cursor-pointer hover:text-black">About Us</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Careers</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Blog</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Contact</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h1 className="text-black text-xl font-semibold">Support</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 cursor-pointer hover:text-black">Help Center</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">FAQs</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Terms & Conditions</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Privacy Policy</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h1 className="text-black text-xl font-semibold">Follow Us</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 cursor-pointer hover:text-black">Facebook</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Twitter</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Instagram</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">LinkedIn</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
