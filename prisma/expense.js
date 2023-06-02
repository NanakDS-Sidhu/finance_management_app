import prisma from "./prisma";

export const getAllExpense = async () => {
    const expenses = await prisma.expense.findMany({})
    return expenses;
}

export const getExpenseByid = async id => {
    const expenses = await prisma.expense.findUnique({
        where: { id }
    })
    return expenses;
}

export const insertExpense = async (isIncome , account , amount , type) => {
    const dat = {isIncome:isIncome , account : account , amount : amount , transactionType:type};
    // console.log(dat);
    const expenses = await prisma.expense.create({data:dat});
    return expenses;
}
