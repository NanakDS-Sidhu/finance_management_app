'use client'
import { HiMail, IconName } from "react-icons/hi";

export default function Home() {
  return(
    <div className="pr-1">
      <div className="Hero Section">
      <div className="bg-cyan-200 m-4  p-8 rounded-2xl flex">
        <div className="Text Div w-1/2">        
          <h2 className=" text-cyan-700 font-mono mb-8 mt-4 mx-4">FINANCIAL MANAGEMENT</h2>
          <h1 className=" text-black text-6xl font-mono font-bold my-4 tracking-normal whitespace-pre-line leading-snug">WE MAKE <br></br>
              YOUR BUSINESS <br></br>
              DIFFERENT</h1>
          <div className="flex justify-between mt-4">
          <span className="text-black font-mono m-4 text-lg">BOOK A CONSULTATION</span>
          <HiMail className="text-black mt-6 mx-4"></HiMail>
          </div>
          <hr className="border-2 mb-4 border-black"></hr>
          </div>
        <div className="Image div grow"></div>
      </div>  
      </div>  
      <div className="Hero-2 flex h-72">
        <div className=" w-1/2 relative group">
          <div className="absolute inset-0 mx-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl group-hover:blur-lg transition duration-100"></div>
          <div className=" backdrop-blur-lg bg-gray-800 h-full m-4 mt-0 rounded-xl relative"></div>
        </div>
        <div className=" w-1/4">
          <div className=" bg-orange-200 h-full m-4 mt-0 rounded-xl"></div>
        </div>
        <div className="grow">
          <div className=" bg-purple-300 h-full m-4 mt-0 rounded-xl"></div>
        </div>

      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  )
}
