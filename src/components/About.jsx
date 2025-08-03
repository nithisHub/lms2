import { useState } from "react" 
import LoginSignup from './LoginSignup';
import { RiCloseLargeLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  const [currentOpen,updateOpen]=useState(false);
  const handleOpen=()=>{
     updateOpen(true);
  }

  return ( 
    <div>
      <section className='flex flex-col gap-4  bg-blue-300 px-12 py-24 justify-center items-center relative'>
     <div className="py-6 px-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
          <h2 className="text-3xl font-semibold text-indigo-800 py-6 flex text-center">About MasterBrain University</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 ">

               {/* Left Content */}
            <div className="flex flex-col gap-4">
                <p className="text-gray-700 text-sm font-medium">
                  Founded in <span className="text-blue-600 font-bold">1985</span>, MasterBrain University has been at the Programming of academic excellence and innovation for nearly four decades.
                </p>
                <p className="text-gray-700 text-sm">
                  With over <span className="text-purple-600 font-bold">5,000 students</span> across <span className="text-blue-600 font-bold">12+ programs</span>, we pride ourselves on fostering intellectual growth, innovation, and professional development in a dynamic learning environment.
                </p>
                <p className="text-gray-700 text-sm">
                  Our university is consistently ranked among the top educational institutions nationally, with particular strengths in technology, business, engineering, and the liberal arts.
                </p>
            </div>

              {/* Right Content */}
             <div className="flex flex-col">
              {/* mission */}
              {/* parent div */}
              <div className="relative px-12 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Our Mission</h3>
                <p className="text-indigo-700 leading-relaxed">
                  To empower the next generation of leaders through innovative education, cutting-edge research, and transformative experiences that prepare students for success in an ever-evolving global landscape.
                </p>
                
               {/* child div */}
             <div className="absolute transform -translate-y-6 translate-x-6 right-0 top-0 bg-gradient-to-r from-blue-400 to-purple-400 p-3 text-2xl rounded-full animate-bounce">🎓</div>
             </div>
           </div>
                     </div>

                    {/* bottom Button */}
                    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                  <div className="group flex flex-col md:flex-row gap-4 justify-center items-center bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:rotate-12 transition-transform duration-300">
                        👤
                      </div>
                      <div>
                        <h3 className="text- lg font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent"> Authoritative public speakers</h3>
                      </div>
                  </div>  

                    <div className="group flex flex-col md:flex-row gap-4 justify-center items-center bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:rotate-12 transition-transform duration-300">
                        🌍
                      </div>
                      <div>
                        <h3 className="text- lg font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">Students from 6+ countries</h3>
                      </div>
                  </div>  

                    <div className="group flex flex-col md:flex-row gap-4 justify-center items-center bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:rotate-12 transition-transform duration-300">
                        🏆
                      </div>
                      <div>
                        <h3 className="text- lg font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent"> Top 5% of universities in Asia</h3>
                      </div>
                  </div>  

                    </div>
              </div>  

              {/* mobile page    */}
                   {currentOpen && (
                    <div className="absolute backdrop-blur-sm p-12 flex flex-col gap-6">
                       <div className="relative" >
                        <LoginSignup/>
                       <button onClick={()=>updateOpen(false)} className="absolute top-0 right-0  p-2 bg-yellow-100 hover:bg-red-100 text-red-800  rounded-full border border-red-400 cursor-pointer hover:scale-105"><RiCloseLargeLine /></button>
                       <button onClick={()=>updateOpen(false)} className="absolute transform mt-4 -4 p-2 bg-yellow-100 hover:bg-red-100 text-red-800  rounded-full border border-red-400 cursor-pointer hover:scale-105 flex gap-4 items-center px-4" ><FaArrowLeft /> Back to Home</button>
                       </div>
                    </div>)}    
    </section>
    </div>
  )
}

export default About

 