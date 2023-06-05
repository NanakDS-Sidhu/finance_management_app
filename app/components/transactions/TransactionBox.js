"use client"
import TableData from "./TableData"

export default function TransactionBox(props){
    console.log(props.transaction)
  return (
    <>
 
    <tr className=" bg-zinc-800">   
        <TableData type="first" >{props.index+1}</TableData>
        <TableData >{props.transaction.account}</TableData>
        <TableData >{props.transaction.isIncome?<span className=" text-green-400">{props.transaction.amount}</span>:<span className=" text-red-400">{props.transaction.amount}</span>}</TableData>
        <TableData >{props.transaction.transactionType?<span className=" text-yellow-400">Shopping</span>:<span className=" text-purple-300">Food</span>}</TableData>
        <TableData >{props.transaction.createdAt.toDateString()}</TableData>
        <TableData type="last">{props.transaction.isIncome?<span className=" text-green-400">Income</span>:<span className=" text-red-400">Expense</span>}</TableData>
        </tr>

    </>
  )
}
