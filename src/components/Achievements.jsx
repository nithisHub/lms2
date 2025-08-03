import { GiTrophyCup } from "react-icons/gi";
import { LuBookOpen } from "react-icons/lu";
import { IoMdTrophy } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";
import { RiMedalFill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function Achievements() {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pb-20 pt-8 md:pt-4">
      <div className="">
        {/* Header Section */}
        <header className="mb-12 w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left px-12">
              <div className="">
                 <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6">
                            <GiTrophyCup className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-blue-800">Excellence Recognition Portal</span>
                      </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-3">
            Celebrating Excellence
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Achievements</span> 
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
                Recognizing outstanding student achievements and milestones that shape tomorrow's leaders
              </p>
              <p className="text-gray-600  text-sm">
                Showcase your accomplishments, inspire others, and join our community of achievers. 
                Every milestone matters in your journey to excellence.
              </p>
              </div>

              <div className="md:pr-12">
                <iframe className="h-96 w-96" src="https://lottie.host/embed/62fcd562-c148-48dd-95e7-68874449cc6f/zilxwaUW8r.lottie"></iframe>
              </div>
        </header>

         {/* CTA Button */}
           <div className="flex justify-center items-center">
             <button 
              size="lg" 
              className="flex items-center font-bold justify-center text-center rounded-full group bg-gradient-to-r px-16 py-6 from-blue-600 to-purple-600 text-white hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
            >
              Share Your Achievement
              <RiArrowRightDoubleFill className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
           </div>

        {/* Achievements Grid */}
        {/* 1st */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pt-16 px-12">
          {/* 1st */}
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500 shadow-lg">
                      <LuBookOpen className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-blue-300 text-blue-700 bg-blue-100 " >
                     Academic
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Course Completion 
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Completed Advanced JavaScript with 95% score
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      May 2024
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
           {/* 2nd */}
           <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500  shadow-lg">
                      <IoMdTrophy className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-purple-300 text-blue-700 bg-purple-100 " >
                     Performance
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Top Performer
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Ranked in top 5% of Machine Learning course
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      April 2024
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

            {/* 3th */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-l to-blue-500 from-purple-500  shadow-lg">
                      <FiClock className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 text-blue-700 bg-gray-100 " >
                     Participation
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Perfect Attendance 
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Attended all lectures in Web Development Bootcamp
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      March 2024
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

             {/* 4th */}
             <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r to-blue-500 from-purple-500  shadow-lg">
                      <IoDocumentText className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-red-300 text-red-700 bg-red-100 " >
                     Research
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Research Publication
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Published paper in University Journal
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      February 2024
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* 5th */}
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-t to-blue-500 from-purple-500  shadow-lg">
                      <RiMedalFill className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-green-300 text-green-700 bg-green-100 " >
                     Achievement
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Innovation Award
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Received recognition for outstanding project innovation
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      January 2024
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

               {/* 6th */}
               <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-b to-blue-500 from-purple-500  shadow-lg">
                      <SlGraph className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-yellow-300 text-yellow-700 bg-yellow-100 " >
                     Leadership
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                   Leadership Excellence
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 h-16">
                    Led study group with 98% success rate
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      December 2023
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
           
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mx-12">
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mr-4">
              <FaArrowTrendUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Achievement Progress</h3>
              <p className="text-gray-600">Track your learning milestones</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Progress */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-blue-700">Academic Achievements</span>
                <span className="text-blue-700 font-bold">4/8</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{width: '50%'}}/>
              </div>
              <p className="text-sm text-gray-600">50% complete - Keep up the great work!</p>
            </div>

            {/* Research Progress */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-purple-700">Research Milestones</span>
                <span className="text-purple-700 font-bold">2/5</span>
              </div>
              <div className="w-full bg-purple-100 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all duration-500 shadow-sm" 
                 style={{width: '38%'}}
                />
              </div>
              <p className="text-sm text-gray-600">40% complete - Excellent research progress!</p>
            </div>
          </div>

          {/* Overall Stats */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-1">6</div>
                <div className="text-sm text-gray-600">Total Achievements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-700 mb-1">95%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-700 mb-1">Top 5%</div>
                <div className="text-sm text-gray-600">Class Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Achievements
