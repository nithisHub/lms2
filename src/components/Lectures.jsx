import { SiElectronbuilder } from "react-icons/si";
import { FaFilter } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiBookOpenThin } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { PiBriefcaseLight } from "react-icons/pi";

const Lectures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-16">        
    {/* Header */}
    <div className="shadow-sm  border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6">
                      <SiElectronbuilder className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">Fuel Your Curiosity with Captivating Lectures</span>
                    </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">Meet Our <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Brilliant</span> Lecturers</h1> 
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Learn from industry experts and academic leaders who are passionate about sharing knowledge and mentoring the next generation of professionals.
          </p>
        </div>
       
       {/* 3 circles */}
          <div className="flex flex-wrap justify-center gap-9 md:gap-24 mb-12 pt-12">
            <div className="text-center relative bg-white rounded-full flex flex-col justify-center w-36 h-36 border-x-4 border-purple-600">
              <div className="text-3xl font-bold text-blue-700">50+</div>
              <div className="text-sm text-gray-500 flex flex-col justify-center items-center">Qualified<br/> Lecturers</div>
              {/* <div className="absolute top-0 transform -translate-y-6 -translate-x-9 w-32 h-32  rounded-full shadow-inner shadow-purple-300 animate-pulse"></div> */}
            </div>
            <div className="text-center relative bg-white rounded-full flex flex-col justify-center w-36 h-36 border-x-4 border-purple-600">
              <div className="text-3xl font-bold text-blue-700">100+</div>
              <div className="text-sm text-gray-500 flex flex-col justify-center items-center">Courses<br/> Taught</div>
              {/* <div className="absolute top-0 transform -translate-y-6 -translate-x-6 w-32 h-32  rounded-full shadow-inner shadow-purple-300 animate-pulse"></div> */}
            </div>
            <div className="text-center relative bg-white rounded-full flex flex-col justify-center w-36 h-36 border-x-4 border-purple-600">
              <div className="text-3xl font-bold text-blue-700">15+</div>
              <div className="text-sm text-gray-500 flex flex-col justify-center items-center">Years <br/>Experience</div>
              {/* <div className="absolute top-0 transform -translate-y-6 -translate-x-8 w-32 h-32  rounded-full shadow-inner shadow-purple-300 animate-pulse"></div> */}
            </div>
          </div>

          {/* line */}
          <div className=" flex justify-center items-center text-3xl text-gray-300 gap-6 py-4"><PiBookOpenThin /><GoLightBulb /><PiBriefcaseLight /></div>
          <div className=" flex justify-center items-center text-sm text-gray-600">This is a beautiful educational platform featuring our amazing lecturers!</div>

      </div>
    </div>
    
    {/* Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       {/* Search and Filter Bar */}
    <div className="sticky top-0 z-20 bg-purple-50 shadow border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 min-w-0 max-w-md">
            <div className="flex justify-center items-center gap-4">
              <IoIosSearch className="text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
           <div className="flex gap-3 items-center flex-wrap">
           <FaFilter className="text-gray-500 text-lg mr-2" />

            {/* Rating Filter */}
            <select
              className="px-3 py-2 text-gray-600  rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white">
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </select>

             {/* Filter Subject Lectures */}
            <div>
              <select
              className="px-4 py-2 text-gray-600  rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white">
              <option value="">All Lectures</option>
              <option value="5">Dr.P.Vinosan</option>
              <option value="4">Prof.T.Daya</option>
              <option value="3">T.Selvarakavan</option>
              <option value="2">M.Manirathnam</option>
              <option value="1">A.R Murukathas</option>
            </select>
            </div>

             {/* Sort */}
             <select
              className="px-3 py-2 text-gray-600  rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white">
              <option value="">Medium</option>
              <option value="5">Tamil</option>
              <option value="4">English</option>
              <option value="3">Singala</option>
            </select>

            {/* Clear Filters */}
              <button
                className="flex justify-center items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <IoMdClose className="w-4 h-4" />
                Clear
              </button>
          </div>
        </div>
      </div>
    </div>

      {/* Results Summary */}
      <div className="flex flex-col md:flex-row gap-4  md:items-center justify-between mb-6 pt-8 ">
        
        <p className="text-blue-700 flex items-center font-semibold justify-center gap-2 animate-bounce">
          <div className="text-xl "><LiaUniversitySolid /></div>
          Meet Our <span className="text-purple-800">Distinguished Faculty</span>
        </p>
        
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600">Filtered by:</span>
              <span  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
               4+ Stars
              <button className="hover:text-blue-600">
              <IoMdClose className="w-3 h-3" /> 
              </button>
              </span> 

              <span  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
               Dr.P.Vinosan df
              <button className="hover:text-blue-600">
              <IoMdClose className="w-3 h-3" /> 
              </button>
              </span> 
              
              <span  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
               English
              <button className="hover:text-blue-600">
              <IoMdClose className="w-3 h-3" /> 
              </button>
              </span> 
            
          </div>
        
      </div>

      {/* Lecturers Grid */}
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* 1st card */}
             <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/a.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. Sarah Johnson</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-xs">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>

            {/* 2nd card */}
            <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/b.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. Ayesha Khan</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-sm">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>

            {/* 3th card */}
            <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/c.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. Michael Bennett</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-sm">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>

            {/* 4th card */}
            <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/4.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. James Carter</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-sm">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>


            {/* 5th card */}
            <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/5.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. Sofia Martins</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-sm">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>

            {/* 6th card */}
            <div  className="bg-white rounded-xl shadow-md p-10 hover:scale-105 transform transition duration-300 ease-in-out  ">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16  rounded-full"><img className="aspect-square rounded-full" src='./images/6.jpg'/></div>
                <div className="flex-1">
                  <div className="h-6  rounded mb-2 text-2xl font-semibold">Dr. Priya Desai</div>
                  <div className="h-4 text-gray-400 text-sm rounded w-3/4">Senior Web Developer & UI/UX Expert</div>
                </div>
              </div>
              <div className="h-4  rounded mb-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                  <div className="text-purple-800 font-semibold text-sm">127 Reviews</div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">React</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">CSS</div>
                <div className="px-4 py-1 bg-blue-100 rounded-full italic flex flex-wrap text-purple-900 text-sm">UI/UX Design</div>
              </div>
              <div className=" flex justify-between items-center">
                  <div className="text-sm text-purple-900 font-semibold">8 Years Experience </div>
                  <button className="text-white bg-gradient-to-l to-blue-400 from-purple-400 px-6 py-2 font-bold rounded-3xl">View Profile</button>
              </div>
             </div>

        </div>   
    </div>      
     </div>
  )
}

export default Lectures