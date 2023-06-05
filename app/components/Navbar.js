'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import {MdOutlineSpaceDashboard} from "react-icons/md";
import Image from 'next/image';

const Navbar = () => {
    const { data, status } = useSession();
    return (

        <nav class="flex dark:bg-slate-900 items-center relative justify-between bg-zinc-800 px-5 py-6 w-full h-16">
        <div>
            <a href="/">            <Image src="/Mediamodifier-Design.svg" width={100} height={100} ></Image></a>
        </div>
        <ul id="drawer" role="menu" class="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  ">

          <li class="font-medium p-3 hover:text-white sm:p-0 sm:hover:bg-transparent text-gray-600">
            <a href="#" className="dark:text-white">About</a>
          </li>
          <li class="font-medium p-3 hover:text-white sm:p-0 sm:hover:bg-transparent text-gray-600">
            <a href="/setting" class="dark:text-white">Setting</a>
          </li>
          <li class="font-medium p-3 hover:text-white sm:p-0 sm:hover:bg-transparent text-gray-600">
            <a href="/expenses" class="dark:text-white">Expenses</a>
          </li>
          <li class="font-medium p-3 hover:text-white sm:p-0 sm:hover:bg-transparent text-gray-600">
            <a href="/expenses/create" class="dark:text-white">Manage</a>
          </li>
        </ul>
        <div class="flex gap-3 items-center text-3xl">
            <a href="/dashboard"><MdOutlineSpaceDashboard/></a> 
            {status === 'loading' ?<>     <div className=" border-t-teal-400 w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
    <span class="ml-2 text-base">loading</span></>: status === 'authenticated' ? (
                <>
                    <img className=' rounded-full hover:border-2 border-emerald-300 transition duration-200' width={40} height={40} src={data.user.image} alt={data.user.name + ' photo'} />
                    <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline text-base" onClick={signOut}>Sign Out</button>
                </>
            ): <button className=" text-base border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => signIn('google')}>Sign In</button>
            } 
            

          </div>

      </nav>
    );
}

export default Navbar;