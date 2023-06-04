import { getAllExpense, getExpenseByid, insertExpense, deleteExpense, updateExpense } from '@/prisma/expense'
import { getUserbyEmail } from '@/prisma/user';
// import { getSession } from 'next-auth/react';
// import { authOptions } from 'pages/api/auth/[...nextauth]'
import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from "next-auth/next"

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const user = await getUserbyEmail(session.user.email);
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          // Get a single user if id is provided is the query
          // api/users?id=1
          const expense = await getExpenseByid(user.id, req.query.id)
          return res.status(200).json(expense)
        } else {
          // Otherwise, fetch all expenses
          const users = await getAllExpense(user.id)
          return res.json(users)
        }
      }
      case 'POST': {
        // Create a new user
        const {isIncome, account, amount, transactionType } = req.query
        const expense = await insertExpense(user.id, isIncome === "true", account, parseFloat(amount), transactionType)
        return res.json(expense)
      }
      case 'PUT': {
        // Update an existing expense
        const { id, ...updateData } = req.query;
        const convertedUpdateData = {};
        for (const field in updateData) {
          const value = updateData[field];
          if (field === 'isIncome') {
            convertedUpdateData[field] = value === 'true';
          } else if (field === 'amount') {
            convertedUpdateData[field] = parseFloat(value);
          } else {
            convertedUpdateData[field] = value;
          }
        }
        const expense = await updateExpense(user.id, id, convertedUpdateData);
        return res.json(expense);
      }
      case 'DELETE': {
        // Delete an existing user
        const {id } = req.query
        const expense = await deleteExpense(user.id, id)
        return res.json(expense)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}