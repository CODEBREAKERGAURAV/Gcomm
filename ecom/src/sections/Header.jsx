import React, { useEffect, useState } from 'react'
import {FaSearch,FaHeart,FaShoppingCart,FaMapMarkerAlt} from 'react-icons/fa'
import {IoPerson} from 'react-icons/io5'
import {Link} from 'react-scroll'
import {FaXmark,FaBars,FaPhoneVolume} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
   useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
    }, []);
 
    const[isMenuOpen,SetIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
       SetIsMenuOpen(!isMenuOpen);
    }

    const closeMenu=()=>{
      SetIsMenuOpen(false);
    }

    const navItems=[
      {
        link:'Home',path:'home'
      },
      {
        link:'About',path:'about'
      },
      {
        link:'Products',path:'products'
      },
      {
        link:'Testimonials',path:'testimonials'
      },
      {
        link:'Contact',path:'contact'
      },
    ]
  return (
    <>
    <div className="w-full px-16 py-2 bg-yellow-400 lg:flex hidden justify-between items-center gap-6">
      <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><FaPhoneVolume className="size-[18px]"/><span>+91 6387412528</span></h1>
      <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><FaMapMarkerAlt className="size-[18px]"/><span>MuradNagar</span></h1>
      <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><MdEmail className="size-[18px]"/><span>xyz@gmail.com</span></h1>
    </div>
    <nav className="w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50">
      <h1 className="text-purple-500 font-bold lg:text-[30px] text-3xl underline italic ">Gcomm</h1>
      <ul className="lg:flex justify-center items-center gap-10 hidden">

        {navItems.map(({link,path})=>(
          <Link key={path} className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      <div id="heder-icons" className="lg:flex hidden justify-center items-center gap-6 text-black">
      <FaSearch className="w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-500  "/>
      <IoPerson className="w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-500  "/>
      <FaHeart className="w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-500  "/>
      <div className="relative">
      <FaShoppingCart className="w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-500  "/>
      <div className="bg-purple-500 hover:bg-yellow-400 px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold ">
      </div>
      </div>
      </div>
     <div className="flex justify-center items-center lg:hidden mt-3" onclick={toggleMenu}>
      <div>
        {isMenuOpen?<FaXmark className="text-purple-500 text-3xl cursor-pointer"/>:<FaBars className="text-purple-500 text-3xl cursor-pointer"/>}
      </div>
     </div>

     <div className="{`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit  p-4 absolute top-[80px] left-0`}
" onclick={closeMenu}> 
     </div>
    </nav>
    </>
  )
}

export default Header