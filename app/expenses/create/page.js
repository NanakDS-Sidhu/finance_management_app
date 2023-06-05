'use client'
import { useForm } from "react-hook-form";
import { getSession } from "next-auth/react";
const CreateExpense = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const session = await getSession(); // Retrieve the session information

            if (!session) {
                // Handle the case when the user is not authenticated
                console.log('User is not authenticated');
                return;
            }

            const response = await fetch('http://localhost:3000/api/expense', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.accessToken}`, // Include the session token in the Authorization header
                },
                body: JSON.stringify(data), // Replace with your form data
            });

            if (response.ok) {
                // Handle the successful response
                console.log('Data added successfully');
            } else {
                // Handle the error response
                console.log('Error adding data');
            }
        } catch (error) {
            // Handle any errors that occurred during the fetch request
            console.log('Fetch error:', error);
        }
    };
    //   isIncome, account, amount, transactionType

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-red-400 text-blue-400">
            <div>
                <label>
                    Transaction Type:
                    <select {...register('isIncome', { required: true })} defaultValue={true}>
                        <option value={true}>Income</option>
                        <option value={false}>Expense</option>
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>
            <div>
                <label>
                    Account:
                    <input {...register('account')} type="number" step="0.01" />
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input {...register('amount')} type="number" step="0.01" />
                </label>
            </div>
            <div>
                <label>
                    Transaction Type:
                    <select {...register('transactionType', { required: true })}>
                        <option value={true}>Food</option>
                        <option value={false}>Shopping</option>
                        <option value={true}>Travel</option>
                        <option value={false}>Entertainment</option>
                        <option value={false}>Bills</option>
                        <option value={false}>Health</option>
                        <option value={false}>Education</option>
                        <option value={false}>Charity</option>
                        <option value={false}>Investments</option>
                        <option value={false}>Other</option>
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateExpense;