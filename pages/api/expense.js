import { getAllExpense, getExpenseByid, insertExpense, deleteExpense, updateExpense } from '@/prisma/expense'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          console.log(req.query.userId , "bye");
          // Get a single user if id is provided is the query
          // api/users?id=1
          const user = await getExpenseByid(req.query.userId,req.query.id)
          return res.status(200).json(user)
        } else {
          // Otherwise, fetch all expenses
          const users = await getAllExpense(req.query.userId)
          return res.json(users)
        }
      }
      case 'POST': {
        // Create a new user
        const {userId , isIncome, account, amount, transactionType } = req.query
        const expense = await insertExpense(userId , isIncome === "true", account, parseFloat(amount), transactionType)
        return res.json(expense)
      }
      case 'PUT': {
        // Update an existing expense
        const { userId, id, ...updateData } = req.query;
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
        const expense = await updateExpense(userId, id, convertedUpdateData);
        return res.json(expense);
      }
      case 'DELETE': {
        // Delete an existing user
        const { userId , id } = req.query
        const expense = await deleteExpense(userId,id)
        return res.json(expense)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}