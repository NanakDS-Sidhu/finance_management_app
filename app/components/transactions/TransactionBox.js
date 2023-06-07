"use client"
import TableData from "./TableData"

export default function TransactionBox(props){
    console.log(typeof props.transaction.createdAt)
  return (
    <>
 
    <tr className=" bg-zinc-800">   
        <TableData type="first" >{props.index+1}</TableData>
        <TableData >{props.transaction.account}</TableData>
        <TableData >{props.transaction.isIncome?<span className=" text-green-400">{props.transaction.amount}</span>:<span className=" text-red-400">{props.transaction.amount}</span>}</TableData>
        <TableData ><span className=" text-purple-300">{props.transaction.transactionType}</span></TableData>
        <TableData >{props.transaction.createdAt.substring(0,10)}</TableData>
        <TableData type="last">{props.transaction.isIncome?<span className=" text-green-400">Income</span>:<span className=" text-red-400">Expense</span>}</TableData>
        </tr>

    </>
  )
}
