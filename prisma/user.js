// /prisma/user.js
import prisma from './prisma'

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async id => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

export const getUserbyEmail = async e => {
  const user = await prisma.user.findFirst({
    where: { email : e}
  })
  return user
}

// UPDATE
export const updateUser = async (id, updateData) => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return user
}

// DELETE
export const deleteUser = async id => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}