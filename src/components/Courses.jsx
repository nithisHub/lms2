import { HiOutlineBookOpen } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { BsAwardFill } from "react-icons/bs"; 
import { FaClock } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import { useState } from "react";

const Courses = () => {

  const [curentEntroll,updateEntroll] =useState(false);
  const handleEntroll=()=>{
    updateEntroll(!curentEntroll);
  }
 
  return (
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6">
            <HiOutlineBookOpen className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Discover Your Next Learning Adventure</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Explore Our 
            </span><span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Courses</span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of courses designed by industry experts 
            to accelerate your career and expand your knowledge.
          </p>
        </div>

        {/* row feature */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-6 md:px-28">
            
              <div className="border-y-4 border-blue-500 p-6 hover-scale group cursor-pointer bg-white rounded-3xl shadow-lg  transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12  mx-auto rounded-xl bg-education-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br to-blue-400 from-purple-500 group-hover:text-white transition-all duration-300">
                    <FaPlay className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-900">500+</div>
                    <div className="text-sm text-gray-500">Interactive Videos</div>
                  </div>
                </div>
              </div>

              <div className="border-y-4 border-purple-500 p-6 hover-scale group cursor-pointer bg-white rounded-3xl shadow-lg  transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-education-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br to-blue-400 from-purple-500 group-hover:text-white transition-all duration-300">
                    <HiMiniUsers className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-900">50K+</div>
                    <div className="text-sm text-gray-500">Global Students</div>
                  </div>
                </div>
              </div>

              <div className="border-y-4 border-blue-500 p-6 hover-scale group cursor-pointer bg-white rounded-3xl shadow-lg  transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-education-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br to-blue-400 from-purple-500 group-hover:text-white transition-all duration-300">
                    <BsAwardFill className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-900">200+</div>
                    <div className="text-sm text-gray-500">Certificates</div>
                  </div>
                </div>
              </div> 

              <div className="border-y-4 border-purple-500 p-6 hover-scale group cursor-pointer bg-white rounded-3xl shadow-lg  transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-education-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br to-blue-400 from-purple-500 group-hover:text-white transition-all duration-300">
                    <FaClock className="w-6 h-6 text-gray-400 group-hover:text-white"/>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-900">1000+</div>
                    <div className="text-sm text-gray-500">Hours Content</div>
                  </div>
                </div>
              </div>
          </div>

          {/* Trending Topics */}
          <div className="max-w-5xl mx-auto animate-slide-up" >
            <div className="flex items-center justify-center gap-3 mb-8">
              <MdOutlineTrendingUp className="w-6 h-6 text-purple-700" />
              <h3 className="text-xl  text-blue-800 font-bold">Trending Courses in This Week</h3>
              <MdOutlineTrendingUp className="w-6 h-6 text-purple-700" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16 px-2">

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Advanced Machine Learning
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${80}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">95%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-red-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Digital Marketing Strategy
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${87}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">87%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-red-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Introduction to Computer Science
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${82}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">82%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-red-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Introduction to Computer Science
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${78}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">78%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-green-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Financial Analysis & Modeling
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${74}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">74%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-green-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

                <div className=" p-6 hover-scale glow-on-hover group cursor-pointer bg-blue-50 rounded-2xl shadow-lg shadow-gray-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 group-hover:text-blue-800">
                        Web Development Bootcamp
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                          <div style={{ width: `${69}%` }}
                            className="h-full bg-purple-700  rounded-full transition-all duration-500"
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">69%</span>
                      </div>
                    </div>
                   <div className="p-1 mb-4 bg-yellow-500 rounded-full animate-ping group-hover:animate-none group-hover:p-2"></div>
                  </div>
                </div>

            </div>
          </div>


        {/* Search and Filter Section */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
         <div className="text-center text-xl text-blue-900 font-bold pt-2 pb-6">Start Your Learning Journey</div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-center  justify-between w-full">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"/>
            </div>
             {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <div className="text-xl text-gray-600" > <CiFilter/></div>
              <select
              className="px-3 py-2 text-gray-600  rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white">
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </select>
              
              <select
              className="px-3 py-2 text-gray-600  rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white">
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </select>
            
            </div>
          </div>
          </div>
           {/* Results Count */}
           <div className="mb-8 pt-6 md:pl-2 md:pt-2 flex justify-center md:justify-start">
          <p className="text-gray-600">
            Showing 
            <span className="font-semibold text-blue-600">5</span> courses
              <span> in <span className="font-semibold text-blue-600">12</span></span>
          </p>
            </div>


            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {/* 1st Course */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-green-600 rounded-full text-xs font-semibold" >
                    Beginner
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                   Master the fundamentals of computer science with hands-on programming exercises and real-world projects.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">12 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$499</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">1250</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Dr. Sarah Johnson</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">5 Assignments, 1 Final Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Programming Fundamentals
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Algorithms
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Web Development Basics
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button onClick={handleEntroll} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>
            </div>

             {/* 2nd Course */}
             <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-red-600 rounded-full text-xs font-semibold" >
                    Advanced
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Advanced Machine Learning
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                   Dive deep into advanced ML techniques and build sophisticated AI models for real-world applications.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">16 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$899</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">980</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Prof. David Lee</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">8 Assignments, 2 Research Papers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Neural Networks
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Deep Learning
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Natural Language Processing
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Computer Vision
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>

             {/* 3th Course */}
             <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-yellow-600 rounded-full text-xs font-semibold" >
                    Intermediate
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Digital Marketing Strategy
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                  Learn to create and execute effective digital marketing campaigns that drive real business results.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">16 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$799</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">1750</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Ms. Emily Chen</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">5 Assignments, 1 Final Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Programming Fundamentals
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Algorithms
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Web Development Basics
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>

             {/* 4th Course */}
             <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-green-600 rounded-full text-xs font-semibold" >
                    Beginner
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Web Development Bootcamp
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                   Comprehensive full-stack web development program from basics to advanced deployment strategies.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">12 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$499</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">1250</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Dr. Sarah Johnson</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">5 Assignments, 1 Final Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Programming Fundamentals
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Algorithms
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Web Development Basics
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>

             {/* 5th Course */}
             <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-green-600 rounded-full text-xs font-semibold" >
                    Beginner
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                   Computer Science
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">12 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$499</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">1250</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Dr. Sarah Johnson</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">5 Assignments, 1 Final Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Programming Fundamentals
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Algorithms
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Web Development Basics
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>

             {/* 6th Course */}
             <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-white bg-green-600 rounded-full text-xs font-semibold" >
                    Beginner
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Financial Analysis & Modeling
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed h-20">
                   Master financial analysis techniques and build sophisticated models for investment decisions.
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">12 Weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">$499</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">1250</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">Dr. Sarah Johnson</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 flex items-center bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center text-blue-600 space-x-2 text-2xl">
                    <FaAward/>
                    <div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Assignments</p>
                        <p className="text-xs text-blue-600">5 Assignments, 1 Final Project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Programming Fundamentals
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Algorithms
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50">
                        Web Development Basics
                      </span>
                  </div>

                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>
        </div>
      </div>
      </div>

       {curentEntroll && (
                  <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                    <div className="bg-white opacity-100 px-12 py-16 rounded-3xl" >
                  <div className="flex flex-col justify-center items-center">
                    <iframe className="w-24 h-24" src="https://lottie.host/embed/85f24b01-6582-4e63-bc15-68ec9a0f6369/sEHt0ZQtXn.lottie"></iframe>
                    <h1 className="text-3xl font-bold italic bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Congratulation</h1>
                  </div>
                  <p className="text-xl font-semibold text-purple-800 pt-8 text-center">You Entroll the Course</p>
                  <p className="text-lg font-semibold text-blue-700 text-center">"Introduction to Computer Science"</p>
                  <p className="text-center italic  text-gray-600">Total Amount is $499</p>
                  <div className="pt-8 flex flex-col gap-3">
                    <button className="bg-blue-700 hover:bg-white text-white hover:text-blue-800 font-semibold border border-blue-700 rounded-2xl h-12 w-64">Proceed to Checkout</button>
                  <button className=" text-red-700 font-semibold border border-red-700 rounded-2xl h-12 w-64 hover:bg-red-800 hover:text-white" onClick={handleEntroll}>Skip</button>
                  </div>
                  <p></p>
                </div>
                  </div>
                )}

        </div>
  )
}

export default Courses
