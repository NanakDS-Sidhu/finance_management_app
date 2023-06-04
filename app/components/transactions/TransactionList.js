import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserbyEmail } from "@/prisma/user";
import { getAllExpense } from "@/prisma/expense";

async function getData() {
  // const res = await fetch('http://localhost:3000/api/expense');
  // return res.json();
  const session = await getServerSession(authOptions)
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const user = await getUserbyEmail(session.user.email);
  const users = await getAllExpense(user.id)
  console.log(users);
  return users;
}

export default async function Page() {
  const data = await getData();
  return (
    <ul>
      {data.map(x => {
        return <li>{x.amount}</li>
      })}
    </ul>
  )
}