"use client"
import { useSession } from "next-auth/react"
import TransactionList from "../components/transactions/TransactionList"


const expenses = () => {
  const { data, status } = useSession();
  if (status === 'authenticated'){
    return (

      <div className=" min-h-screen py-10 bg-zinc-950">
        <TransactionList />
      </div>
    )
  }else if(status==="loading"){
    return(
      <div className="flex text-3xl items-center h-screen justify-center ">
      <div className=" border-t-zinc-700 w-16 h-16 border-8 border-zinc-200 rounded-full animate-spin"></div>
    </div>
    )
  }  
  else{
    return (
      <div className="flex text-3xl items-center h-screen justify-center ">
        <div>
          <h2 className="text-2xl">Please Sign in to Proceed</h2>
      </div>

    </div>
    )
  }

}

export default expenses;