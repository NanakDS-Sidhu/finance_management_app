import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserbyEmail } from "@/prisma/user";
import { getAllExpense } from "@/prisma/expense";
import TransactionBox from "./TransactionBox";

async function getData() {
  // const res = await fetch('http://localhost:3000/api/expense');
  // return res.json();
  const session = await getServerSession(authOptions)
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const user = await getUserbyEmail(session.user.email);
  const users = await getAllExpense(user.id)
  // console.log(users);
  return users;
}

export default async function Page() {
  const data = await getData();
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
}
