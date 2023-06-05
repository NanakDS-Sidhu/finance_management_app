// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { getUserbyEmail } from "@/prisma/user";
// import { getAllExpense } from "@/prisma/expense";
// import { deleteExpense } from "@/prisma/expense";

// async function getUserId() {
//   const session = await getServerSession(authOptions)
//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   const user = await getUserbyEmail(session.user.email);
//   return user.id;
// }

// async function getData(user) {
//   const users = await getAllExpense(user)
//   console.log(users);
//   return users;
// }

// export default async function Page() {
//   const user = getUserId();
//   console.log(user);
//   const data = await getData(user);
//   return (
//     <ul>
//       {data.map(x => {
//         return (
//           <li>
//             <h1>{x.transactionType}</h1>
//             {x.amount}
//             {/* <button onClick={async ()=>{
//                 const expense = await deleteExpense(user, x.id)
//                 console.log(expense);
//             }}>Delete</button> */}
//           </li>
//         )
//       })}
//     </ul>
//   )
// }


// import { getSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

// async function getData() {
//   const session = await getSession({ req: authOptions.req });

//   if (!session) {
//     return { error: 'Unauthorized' };
//   }

//   const response = await fetch('http://localhost:3000/api/expense', {
//     headers: {
//       Authorization: `Bearer ${session.accessToken}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch expense data');
//   }

//   return response.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return (
//     <ul>
//       {data.map((x) => (
//         <li key={x.id}>{x.amount}</li>
//       ))}
//     </ul>
//   );
// }
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
