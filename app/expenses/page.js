// 'use client'

// import { useSession } from "next-auth/react"
import TransactionList from "../components/transactions/TransactionList"
// import { getServerSession } from "next-auth/next"

const expenses = () => {
    // const{data,status}=useSession();
  // return (
  //   <div>
  //     {status==="loading"?"Loading":<></>}
  //     {status === 'authenticated' ?<TransactionList email={data.user.email}></TransactionList>:<></>}
  //   </div>
  // )
  return (
    <TransactionList />
  )
}

export default expenses;