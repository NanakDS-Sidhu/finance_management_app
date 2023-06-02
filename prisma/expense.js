import prisma from "./prisma";

export const getAllExpense = async (userId) => {
    // Check user authentication status
    if (!userId) {
        throw new Error("Unauthorized access");
    }

    try {
        console.log(userId,"hi");
        const expenses = await prisma.expense.findMany({
            where: {
                userId: userId,
            },
        });
        return expenses;
    } catch (error) {
        console.error("Failed to retrieve expenses:", error);
        throw new Error("Failed to retrieve expenses");
    }
};

export const getExpenseByid = async (userId, id) => {
    // Check user authentication status
    if (!userId) {
        throw new Error("Unauthorized access");
    }

    try {
        const expense = await prisma.expense.findUnique({
            where: { id },
        });
        if (!expense || expense.userId !== userId) {
            throw new Error("Expense not found");
        }
        return expense;
    } catch (error) {
        console.error("Failed to retrieve expense:", error);
        throw new Error("Failed to retrieve expense");
    }
};

export const insertExpense = async (userId, isIncome, account, amount, type) => {
    if (!userId) {
        throw new Error("Unauthorized access");
    }

    try {
        const expense = await prisma.expense.create({
            data: {
                userId: userId,
                isIncome: isIncome,
                account: account,
                amount: amount,
                transactionType: type,
            },
        });

        return expense;
    } catch (error) {
        console.error("Failed to create expense:", error);
        throw new Error("Failed to create expense");
    }
};


export const deleteExpense = async (userId, id) => {
    try {
      // Check user authentication status
      if (!userId) {
        throw new Error("Unauthorized access");
      }
  
      // Retrieve the expense to check if the userId matches
      const expense = await prisma.expense.findUnique({
        where: {
          id,
        },
      });
  
      // If expense is not found or userId doesn't match, throw an error
      if (!expense || expense.userId !== userId) {
        throw new Error("Expense not found or unauthorized access");
      }
  
      // Delete the expense
      const deletedExpense = await prisma.expense.delete({
        where: {
          id,
        },
      });
  
      return deletedExpense;
    } catch (error) {
      console.error("Failed to delete expense:", error);
      throw new Error("Failed to delete expense");
    }
  };
  


  export const updateExpense = async (userId, id, updateData) => {
    try {
      // Check user authentication status
      if (!userId) {
        throw new Error("Unauthorized access");
      }
  
      // Retrieve the expense to check if the userId matches
      const expense = await prisma.expense.findUnique({
        where: {
          id,
        },
      });
  
      // If expense is not found or userId doesn't match, throw an error
      if (!expense || expense.userId !== userId) {
        throw new Error("Expense not found or unauthorized access");
      }
  
      // Update the expense
      const updatedExpense = await prisma.expense.update({
        where: {
          id,
        },
        data: {
          ...updateData,
        },
      });
  
      return updatedExpense;
    } catch (error) {
      console.error("Failed to update expense:", error);
      throw new Error("Failed to update expense");
    }
  };
  