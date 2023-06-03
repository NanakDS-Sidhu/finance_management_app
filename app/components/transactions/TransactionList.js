
'use client'
import { useEffect, useState } from "react";

async function getData(userId) {
  const res = await fetch(`http://localhost:3000/api/expense?userId=${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getUser(email) {
  const res = await fetch(`http://localhost:3000/api/user?email=${email}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
    console.log(res)
  }
  return res.json();
}

 
export default function TransactionList(props) {
  const[id,setId]=useState()
  console.log(props.email , "User")
  useEffect(()=>{
    let Userid
    try{
      Userid=getUser(props.email)
    }
    catch(e){
      console.log(e)
    }
    Userid.then((val)=>{getData(val.id)})
  },[])
  return <h1>{id}</h1>;
}