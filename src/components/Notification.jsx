import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import { PiBookOpen } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";

export default function Notification() {

    const [currentClose1,updateClose1]=useState(true);
     const [currentClose2,updateClose2]=useState(true);
      const [currentClose3,updateClose3]=useState(true);
       const [currentClose4,updateClose4]=useState(true);
        const [currentClose5,updateClose5]=useState(true);
  return (
    <div>
        <div className=" bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Your Notifications
          </h1>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-purple-900 "></div>
            <div className="w-24 h-1 bg-gradient-to-l from-purple-900 via-blue-400 to-purple-900 "></div>
            <div className="w-1 h-1 bg-purple-900 "></div>
          </div>
          </div>
        
        
        <div className="flex flex-col gap-8 justify-center items-center pt-4 ">
          
           {/* 1st noti */}
             {currentClose1 && (
                 <div className="bg-purple-50 shadow-lg p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border">
                <div className="text-blue-700 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiFileText className="w-6 h-6"  />
                </div>
                <div className="flex flex-col justify-start w-64  md:w-96">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">
                    New Assignment: React Basics
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs italic ">
                    Due on August 7th. Please submit on time.
                  </p>
                  <span className="w-24 text-sm text-purple-600 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    2 hours ago
                  </span>
                </div>
                <button onClick={()=>updateClose1(false)} className="text-red-800 bg-red-100 p-2 rounded-full cursor-pointer hover:border hover:border-red-300">
                    <RiCloseLargeLine />
                </button>
              </div>
             )}

              {/* 2nd noti */}
             {currentClose2 && (
                 <div className="bg-purple-50 shadow-lg p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border">
                <div className="text-purple-700 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <PiBookOpen className="w-6 h-6"  />
                </div>
                <div className="flex flex-col justify-start w-64  md:w-96">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">
                    Course Update: Java Fundamentals
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs italic ">
                   New video lecture added to Module 2.
                  </p>
                  <span className="w-24 text-sm text-purple-600 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    1 day ago
                  </span>
                </div>
                <button onClick={()=>updateClose2(false)} className="text-red-800 bg-red-100 p-2 rounded-full cursor-pointer hover:border hover:border-red-300">
                    <RiCloseLargeLine />
                </button>
              </div>
             )}

             {/* 3th noti */}
             {currentClose3 && (
                 <div className="bg-purple-50 shadow-lg p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border">
                <div className="text-blue-700 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiBell className="w-6 h-6"  />
                </div>
                <div className="flex flex-col justify-start w-64  md:w-96">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">
                    Reminder: Group Meeting
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs italic ">
                  Zoom call scheduled at 4 PM today.
                  </p>
                  <span className="w-24 text-sm text-purple-600 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    3 days ago
                  </span>
                </div>
                <button onClick={()=>updateClose3(false)} className="text-red-800 bg-red-100 p-2 rounded-full cursor-pointer hover:border hover:border-red-300">
                    <RiCloseLargeLine />
                </button>
              </div>
             )}

             {/* 4th noti */}
             {currentClose4 && (
                 <div className="bg-purple-50 shadow-lg p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border">
                <div className="text-purple-700 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaRegCalendar className="w-6 h-6"  />
                </div>
                <div className="flex flex-col justify-start w-64  md:w-96">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">
                    Assignment Deadline Approaching
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs italic ">
                   Your JavaScript project is due tomorrow at 11:59 PM
                  </p>
                  <span className="w-24 text-sm text-purple-600 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    5 hours ago
                  </span>
                </div>
                <button onClick={()=>updateClose4(false)} className="text-red-800 bg-red-100 p-2 rounded-full cursor-pointer hover:border hover:border-red-300">
                    <RiCloseLargeLine />
                </button>
              </div>
             )}


             {/* 5th noti */}
             {currentClose5 && (
                 <div className="bg-purple-50 shadow-lg p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border">
                <div className="text-blue-700 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <TbMessageCircle className="w-6 h-6"  />
                </div>
                <div className="flex flex-col justify-start w-64  md:w-96">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">
                    New Discussion Post
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs italic ">
                    Sarah replied to your question in the React forum.
                  </p>
                  <span className="w-24 text-sm text-purple-600 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    1 week ago
                  </span>
                </div>
                <button onClick={()=>updateClose5(false)} className="text-red-800 bg-red-100 p-2 rounded-full cursor-pointer hover:border hover:border-red-300">
                    <RiCloseLargeLine />
                </button>
              </div>
             )}
              
       
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            You're all caught up! 🎉
          </p>
        </div>
      </div></div>
    
  )
}
