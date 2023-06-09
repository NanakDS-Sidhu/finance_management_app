"use client"

import { useEffect, useState } from "react";
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { getUserbyEmail } from "@/prisma/user";
// import { getAllExpense } from "@/prisma/expense";
import TransactionBox from "./TransactionBox";
import { getSession } from "next-auth/react";
import TypingCursor from "../Typing";

// async function getData() {
//   // const res = await fetch('http://localhost:3000/api/expense');
//   // return res.json();
//   const session = await getServerSession(authOptions)
//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   const user = await getUserbyEmail(session.user.email);
//   const users = await getAllExpense(user.id)
//   // console.log(users);
//   return users;
// }

export async function logged(){

    const session = await getSession()
    if(session){
      return true
    }else{
      return false
    }
}

export async function getData() {
  const res = await fetch('http://localhost:3000/api/expense');
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default function Page() {
  const[data,setData]=useState(null)

  async function fetching_expenses(){
      const expense = await getData();
      setData(expense)
  }

  useEffect(()=>{
      fetching_expenses()
  },[])

  if(data){
    return (
      <div>
        <div className=" bg-zinc-900 m-10 mb-0 rounded-t-2xl ">
          <h1 className="py-4 pl-6 font-sans text-2xl" >My Expenses </h1>
        </div>
        <div className=" bg-zinc-900 m-10 mt-1 rounded-b-2xl text-left flex justify-center ">
        <table className="border-separate border-spacing-y-2 mb-5">
        <thead >
              <tr >
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                 S.No
                </th>
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                  Account
                </th>
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                  Amount
                </th>
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                  Category
                </th>
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                  Date Submitted
                </th>
                <th scope="col" className="text-lg font-medium px-20 py-4 text-left">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="p-5">
            {data.map((x,i) => {
              return <>
                <TransactionBox transaction={x} index={i}></TransactionBox>
                </>
            })}
            </tbody>
        </table>
        </div>
      </div>
    )
  }else{
    return (
    <div className="flex text-3xl items-center h-screen justify-center ">
      <div className=" border-t-zinc-700 w-16 h-16 border-8 border-zinc-200 rounded-full animate-spin"></div> <span className="ml-10">Loading</span>
    </div>
    )
  }
  

}
