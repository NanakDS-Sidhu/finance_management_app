// pages/api/user

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
  } from '../../prisma/user'
import { getAllExpense , insertExpense } from '@/prisma/expense'
  
  export default async function handle (req, res) {
    try {
      switch (req.method) {
        case 'GET': {
          if (req.query.id) {
            // Get a single user if id is provided is the query
            // api/users?id=1
            const user = await getUser(req.query.id)
            return res.status(200).json(user)
          } else {
            // Otherwise, fetch all users
            const users = await getAllExpense()
            return res.json(users)
          }
        }
        case 'POST': {
          // Create a new user
          const { isIncome , account , amount , type } = req.query
          const expense = await insertExpense(isIncome==="true" , account , parseFloat(amount) , type)
          return res.json(expense)
        }
        case 'PUT': {
          // Update an existing user
          const { id, ...updateData } = req.body
          const user = await updateUser(id, updateData)
          return res.json(user)
        }
        case 'DELETE': {
          // Delete an existing user
          const { id } = req.body
          const user = await deleteUser(id)
          return res.json(user)
        }
        default:
          break
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message })
    }
  }