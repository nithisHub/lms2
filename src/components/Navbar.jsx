
import HeroSection from './HeroSection';
import Lectures from './Lectures';
import Courses from './Courses';
import Achievements from './Achievements';
import LoginSignup from './LoginSignup';
import Notification from './Notification';
import { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { GiBrain } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

   const [currentPage,updatePage]=useState('herosection');
   const handleNavigation = (e,targetPage)=>{
    e.preventDefault();
    updatePage(targetPage);
   }

  return (
   <div>
     <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-3xl"><GiBrain /></span>
              </div>
              <a href="/herosection" onClick={(e)=>handleNavigation(e,'herosection')}  className="text-xl font-bold text-gray-900">MasterBrain</a>
            </div>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className='flex gap-16 justify-center item-center'>
          <div class="relative inline-block group">
                <a href="/herosection" onClick={(e)=>handleNavigation(e,'herosection')} className='hidden md:flex text-gray-700 font-semibold text-sm uppercase group-hover:text-blue-800 transition-colors pb-1 cursor-pointer'>
                  Home
                </a>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
          </div>

          <div class="relative inline-block group">
                <a href="/lectures" onClick={(e)=>handleNavigation(e,'lectures')} className='hidden md:flex text-gray-700 font-semibold text-sm uppercase group-hover:text-blue-800 transition-colors pb-1 cursor-pointer'>
                  Lectures
                </a>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
          </div>

          <div class="relative inline-block group">
                <a href="/courses" onClick={(e)=>handleNavigation(e,'courses')} className='hidden md:flex text-gray-700 font-semibold text-sm uppercase group-hover:text-blue-800 transition-colors pb-1 cursor-pointer'>
                  Courses
                </a>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
          </div>

          <div class="relative inline-block group">
                <a href="/achievements" onClick={(e)=>handleNavigation(e,'achievements')} className='hidden md:flex text-gray-700 font-semibold text-sm uppercase group-hover:text-blue-800 transition-colors pb-1 cursor-pointer'>
                achievements
                </a>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
          </div>

          </div>

          {/* Right side - Search, Login, Signup (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button href="/notification" onClick={(e)=>handleNavigation(e,'notification')} className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <IoIosNotifications className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <FiSearch className="w-5 h-5" />
            </button>
            <div href="/loginSignup" onClick={(e)=>handleNavigation(e,'loginSignup')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white  font-medium p-3  rounded-md text-sm transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:scale-105">
            <FaUser />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-3 flex justify-between items-center bg-white border-t border-gray-200">
              {/* left mobile items */}
              <d className='w-1/2 '>
              <a href="/herosection" onClick={(e)=>handleNavigation(e,'herosection')} className='w-full relative inline-block group py-4 ps-8 hover:bg-blue-100 text-gray-700  hover:text-blue-700 '> 
                <div  className='font-semibold text-sm uppercase cursor-pointer'>
                  home
                </div> 
                <span class="absolute left-0 bottom-0 w-full  h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
              </a>
              <a href="/lectures" onClick={(e)=>handleNavigation(e,'lectures')} className='w-full relative inline-block group py-4 ps-8 hover:bg-blue-100 text-gray-700  hover:text-blue-700 '> 
                <div  className='font-semibold text-sm uppercase cursor-pointer'>
                Lectures
                </div> 
                <span class="absolute left-0 bottom-0 w-full  h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
              </a>
              <a href="/courses" onClick={(e)=>handleNavigation(e,'courses')} className='w-full relative inline-block group py-4 ps-8 hover:bg-blue-100 text-gray-700  hover:text-blue-700 '> 
                <div  className='font-semibold text-sm uppercase cursor-pointer'>
                courses
                </div> 
                <span class="absolute left-0 bottom-0 w-full  h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
              </a>
              <a href="/achievements" onClick={(e)=>handleNavigation(e,'achievements')} className='w-full relative inline-block group py-4 ps-8 hover:bg-blue-100 text-gray-700  hover:text-blue-700 '> 
                <div  className='font-semibold text-sm uppercase cursor-pointer'>
                achievements
                </div> 
                <span class="absolute left-0 bottom-0 w-full  h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
              </a>  
              </d>

              {/* Mobile Search and Auth Buttons */}
              <div className="pt-4 pb-3 w-1/2 gap-4 flex flex-col justify-center items-center ">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className='flex   items-center gap-1 justify-center text-xl'>
                  <a href="/notification" onClick={(e)=>handleNavigation(e,'notification')} className='text-2xl p-4 rounded-2xl hover:bg-blue-100 text-gray-500 hover:text-blue-600'> <IoIosNotifications className="" /></a>
                  <a href="/loginSignup" onClick={(e)=>handleNavigation(e,'loginSignup')} className='text-xl p-4 rounded-2xl hover:bg-blue-100 text-gray-500 hover:text-blue-600'><FaUser /></a>
                  </div>

                  <button className="flex-1 flex border px-8 py-2 items-center justify-center p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-100">
                    <FiSearch className="w-5 h-5 mr-2" />
                    Search
                  </button>
                </div>
                
                <div className="space-y-2">                
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

    {currentPage === 'herosection' && <HeroSection/>}
    {currentPage === 'lectures' && <Lectures/>} 
    {currentPage === 'courses' && <Courses/>}
    {currentPage === 'achievements' && <Achievements/>} 
    {currentPage === 'loginSignup' && <LoginSignup/>} 
     {currentPage === 'notification' && <Notification/>}



   </div>
  );
};

export default Navbar; 