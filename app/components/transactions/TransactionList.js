import { getAllExpense } from '@/prisma/expense'
import React from 'react'

export default function TransactionList() {
    const expenses=getAllExpense()
    let keys=Object.entries(expenses)
    console.log(keys)
  return (
    <div>
      {expenses?<h1>{"the fuck"}</h1>:"Null"}
    </div>
  )
}
