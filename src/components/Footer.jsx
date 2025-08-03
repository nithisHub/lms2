import { FaArrowRightLong } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";


function Footer() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 overflow-hidden pt-6 px-4">
        {/* <div className="border-t border-gray-700 p-2 w-3/4 flex items-center justify-center"></div> */}
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
                <li>
                  <a  href="/herosection" onClick={(e)=>handleNavigation(e,'herosection')}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <FaArrowRightLong className="w-4 h-4 text-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <FaArrowRightLong className="w-4 h-4 text-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Courses</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <FaArrowRightLong className="w-4 h-4 text-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Lectures</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <FaArrowRightLong className="w-4 h-4 text-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Achivements</span>
                  </a>
                </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3"></div>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <LuMapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    No,16 Vadivel Road<br />
                    Karaitivu, Ampara
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-purple-100 p-3 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <MdLocalPhone className="h-5 w-5 text-purple-600" />
                </div>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center group">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <IoIosMail className="h-5 w-5 text-indigo-600" />
                </div>
                <a href="mailto:info@masterbrain.edu" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  info@masterbrain.edu
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full mr-3"></div>
              Stay Updated
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Join our community and get the latest updates on courses, events, and university news.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/90"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full mr-3"></div>
              Follow Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with us on social media for daily updates and community highlights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/70 backdrop-blur-sm border border-blue-200 p-4 rounded-2xl hover:scale-110 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
              >
                <LuFacebook className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
              </a>
              <a 
                href="#" 
                className="bg-white/70 backdrop-blur-sm border border-purple-200 p-4 rounded-2xl hover:scale-110 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group"
              >
                <FaInstagram className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
              </a>
              <a 
                href="#" 
                className="bg-white/70 backdrop-blur-sm border border-indigo-200 p-4 rounded-2xl hover:scale-110 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 group"
              >
                <IoLogoTwitter className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t  border-blue-200 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600  md:text-left">
            MasterBrain University. All rights reserved. Empowering minds since 2010.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 relative group"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>

                <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 relative group"
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>

                 <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 relative group"
                >
                  Accessibility
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>

                 <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 relative group"
                >
                  Campus Safety
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>
          </div>
        </div>
      </div>
    



  )
}

export default Footer
