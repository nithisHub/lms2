import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { FaUpload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";

export default function Testimoniyal() {

  const [currentShearStory,updateShearStory]=useState(false);
  const [currentEntrol,updateEntrol]=useState(false);
  const shearStrory=()=>{
      updateShearStory(!currentShearStory);
  }

  const entrol=()=>{
      updateEntrol(!currentEntrol);
  }

  return (
    <div>
     {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">
              Student Success Stories
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real experiences from our alumni who have achieved their career goals
            </p>
          </div>

          {/* Grid Testimonoyal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {/* 1st div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 mb-6 text-center italic leading-relaxed">
                    "MasterBrain University transformed my career completely. The LMS platform made learning so intuitive and accessible, and I was able to land my dream job at a tech startup within 6 months of graduation."
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">Sarah Johnson</h4>
                      <p className="text-purple-600 font-medium">Computer Science</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>
              
              {/* 2nd div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 mb-6 text-center italic leading-relaxed">
                    "The interactive courses and excellent professors made my learning experience exceptional. The practical approach to business concepts helped me start my own consulting firm."
                     </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">SMichael Chen</h4>
                      <p className="text-purple-600 font-medium">Business Administration</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>

              {/* 3th div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className=" text-gray-700 mb-6 text-center italic leading-relaxed">
                    "The hands-on projects and real-world case studies prepared me perfectly for the digital marketing industry. I've increased my company's ROI by 300% using what I learned here."
                    </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">Emily Rodriguez</h4>
                      <p className="text-purple-600 font-medium">Digital Marketing</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>

              {/* 4th div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="px-2 text-gray-700 mb-6 text-center italic leading-relaxed">
                    "The comprehensive curriculum and cutting-edge tools provided me with the skills I needed to transition into data science. The support from instructors was outstanding."
                    </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">David Thompson</h4>
                      <p className="text-purple-600 font-medium">Data Science</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>

              {/* 5th div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 mb-6 text-center italic leading-relaxed">
                    "The creative freedom and professional feedback I received helped me develop a unique design style. I now run a successful freelance design business with clients worldwide."
                    </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">Priya Patel</h4>
                      <p className="text-purple-600 font-medium">Graphic Design</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>

              {/* 6th div */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 overflow-hidden group">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <LuQuote className="w-8 h-8 text-purple-400 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="px-2 text-gray-700 mb-6  text-center italic leading-relaxed">
                    "The practical labs and industry certifications included in the program made me job-ready from day one. I'm now protecting organizations from cyber threats every day."
                    </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6 text-yellow-400">
                   <FaStar /><FaStar /><FaStar /><FaStarHalf />
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-purple-200 transition-all duration-300"
                     
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-blue-900">James Wilson</h4>
                      <p className="text-purple-600 font-medium">Cybersecurity</p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"></div>
              </div>
            
          </div>
        </div>

         {/* bottom div */}
      <div className="bg-gradient-to-r from-purple-300 to-blue-200 py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-xl text-blue-700 mb-8 leading-relaxed">
            Join thousands of students who have transformed their careers with MasterBrain University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={entrol} 
            className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Enroll Now 
            </button>
             {currentEntrol && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="pt-6  bg-white rounded-3xl flex flex-col px-20 py-10 gap-4 justify-center ">
              {/* line icon */}
              <div className="mt-8 flex justify-center space-x-4 text-2xl gap-6">
                <span className="animate-bounce p-3 rounded-full bg-purple-500" style={{ animationDelay: '0s' }}></span>
                <span className="animate-bounce p-3 rounded-full bg-purple-700" style={{ animationDelay: '0.1s' }}></span>
                <span className="animate-bounce p-3 rounded-full bg-purple-900" style={{ animationDelay: '0.2s' }}></span>
              </div>
              <div className="px-4 text-gray-500 font-bold text-xl"> Please SignIn Your Account..</div>
              <div className="flex justify-center items-center gap-6">
                <div className="flex gap-4 pt-4">
                  <button className="flex justify-center items-center gap-2 text-purple-800 font-bold  border border-purple-700 px-6 py-2 rounded-2xl bg-purple-200 hover:bg-white "> SignIn </button>
                  <button onClick={entrol} className="flex justify-center items-center gap-2 text-red-700 font-bold border border-red-700 px-6 py-2 rounded-2xl hover:bg-red-100  ">Close </button>
                </div>
                  
                  
                </div>
            </div>
            </div>
                
            )}
            <button onClick={shearStrory} className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300">
              Share Your Story
            </button>
          </div>
          {currentShearStory && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="pt-6  bg-white rounded-3xl flex justify-center ">
              <form className=" flex flex-col gap-4 py-12 px-12 md:px-16">
                {/* 1st row */}
                <div className="flex justify-start items-center ">
                <label className="flex items-center w-32 gap-2 text-sm font-medium text-blue-600">
                <FaUser className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                className="bg-purple-100 px-2 w-52 md:w-64 border border-purple-700  rounded-xl h-12 text-blue-700"
                placeholder="Enter your name"
                required />
                </div>

                {/* 2nd row */}
                <div className="flex justify-start items-center">
                 <label  className="flex items-center w-32 gap-2 text-sm font-medium text-blue-600">
                  <FaHeart className="w-4 h-4 text-primary" />
                  Passion
                </label>
                <input
                  type="text"
                  className="bg-purple-100 px-2 w-52 md:w-64 border border-purple-700  rounded-xl h-12 text-blue-700"
                  placeholder="What are you passionate about?"
                  required />

                </div>

                {/* 3th row */}
                <div className="flex justify-start items-center">
                <label className="flex items-center w-32 gap-2 text-sm font-medium text-blue-600">
                  <TbMessageCircleFilled className="w-4 h-4 text-primary" />
                  Comment
                </label>
                <textarea
                  className="bg-purple-100 px-2 w-52 md:w-64 border border-purple-700  rounded-xl h-12 text-blue-700"
                  placeholder="Share your thoughts..."
                  required />
                </div>

                {/* 4th row */}
                <div className="flex justify-start items-center">
                <label className="flex items-center w-32 gap-2 text-sm font-medium text-blue-600">
                  <FaRegStar className="w-4 h-4 text-primary" />
                  Rating
                </label>
               <select
              className="bg-purple-100 px-2 w-52 md:w-64 border border-purple-700  rounded-xl h-12 text-blue-700">
              <option  value="">Select your Rating</option>
              <option value="5">5</option>
              <option value="4.5">4.5</option>
              <option value="4">4</option>
              <option value="3.5">3.5</option>
              <option value="3">3</option>
              <option value="2.5">2.5</option>
              <option value="2">2</option>
              <option value="1.5">1.5</option>
              <option value="1">1</option>
              </select>
                </div>

                {/* 5th row */}
                <div className="flex justify-start items-center">
                <label className="flex items-center w-32 gap-2 text-sm font-medium text-blue-600">
                  <IoCameraOutline className="w-4 h-4 text-primary" />
                  Image
                </label>
                <div className="flex items-center justify-between w-52 md:w-64">

                  <div className="w-16 h-16 rounded-xl bg-purple-100 border-2 border-dashed border-purple-700 flex items-center justify-center">
                    <IoCameraOutline className="w-6 h-6 text-purple-800" />
                  </div>
                  <label htmlFor="image-upload">
                    <button type="button"  size="sm" >
                      <span className="cursor-pointer text-sm md:text-base flex items-center text-purple-800 bg-purple-100 p-2 rounded-xl border border-purple-700">
                        <FaUpload className="w-4 h-4 mr-2" />
                        <p>Choose Image</p>
                      </span>
                    </button>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden" />
                  </label>
                </div>
                </div>

                {/* 6yh row */}
                <div className="flex justify-center items-center gap-6 pt-12">
                  <button onClick={shearStrory} className="flex justify-center items-center gap-2 border border-red-700 bg-red-100 px-6 py-1 rounded-xl"><IoClose /> </button>
                  <button className="flex justify-center items-center gap-2 border border-green-700 bg-green-100 py-1 px-6 rounded-xl"> <MdOutlineDone /> </button>
                </div>
               </form>
            </div>
            </div>
                
            )}
        </div>      
      </div>     
      </div>
      
    </div>
  )
}
