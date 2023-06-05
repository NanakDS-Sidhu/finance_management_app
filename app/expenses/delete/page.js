'use client'
import DeleteTransaction from "@/app/components/transactions/DeleteTransaction";
import { useSession } from "next-auth/react";
const DeleteExpense = () => {
    return (
        <>
            <DeleteTransaction />
        </>
    );
}

export default DeleteExpense;