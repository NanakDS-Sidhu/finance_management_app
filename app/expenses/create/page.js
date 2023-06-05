'use client'
import { useForm } from "react-hook-form";
import { getSession } from "next-auth/react";
import { useState } from "react";

const CreateExpense = () => {
    const[sucess,setSucess]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading]=useState(false)
    const onSubmit = async (data) => {
        setLoading(true)
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
            setSucess(true)
        } catch (error) {
            // Handle any errors that occurred during the fetch request
            console.log('Fetch error:', error);
        }
        setLoading(false)
    };

    return (
        <div className=" min-h-screen py-10">
            <div className="flex justify-center">
                <div className="bg-zinc-800/60 w-1/2 rounded-xl">
                    <h1 className=" text-xl m-4 font-mono mb-1">CREATE TRANSACTION</h1>
                    <hr className=" border-2 border-white opacity-100 mx-4 mr-6"></hr>
                    {sucess?<h1 className="text-base text-green-400 mt-4 ml-4">* Submitted Successfully *</h1>:""}
                    <form className="text-black p-10 py-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                <label for="Transaction" class="block mb-2 text-sm font-medium text-white">
                    Transaction Type:
                    <select id="Transaction" className=" border   text-sm rounded-lg  block w-full p-2.5 bg-zinc-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" {...register('isIncome', { required: true })} defaultValue={true}>
                        <option value={true}>Income</option>
                        <option value={false}>Expense</option>
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>
            <div>
                <label for="account" class="block mb-2 text-sm font-medium text-white">
                    Account:
                    <input id="account" class=" border text-sm rounded-lg  block w-full p-2.5 bg-zinc-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" {...register('account')} 
                    type="number" step="1" />
                </label>
            </div>
            <div>
                <label for="amount" class="block mb-2 text-sm font-medium text-white">
                    Amount:
                    <input id="amount" class=" border text-sm rounded-lg  block w-full p-2.5 bg-zinc-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"  {...register('amount')} type="number" step="0.01" />
                </label>
            </div>
            <div>
                <label for="Type" class="block mb-2 text-sm font-medium text-white">
                    Transaction Type:
                    <select id="Type" className=" border   text-sm rounded-lg  block w-full p-2.5 bg-zinc-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"{...register('transactionType', { required: true })}>
                        <option >Food</option>
                        <option >Shopping</option>
                        <option >Travel</option>
                        <option >Entertainment</option>
                        <option >Bills</option>
                        <option >Health</option>
                        <option >Education</option>
                        <option >Charity</option>
                        <option >Investments</option>
                        <option >Other</option>
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>
                <div className="flex justify-center">
                <button
        type="Submit"
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline w-1/2"
        disabled={loading}
      >
        {loading?"Please wait":"Submit"}
      </button>
                </div>
        </form>
                </div>
            </div>
            {/* <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="Transaction" class="block mb-2 text-sm font-medium text-white">
                    Transaction Type:
                    <select id="Transaction" className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" {...register('isIncome', { required: true })} defaultValue={true}>
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
                        <option >Food</option>
                        <option >Shopping</option>
                        <option >Travel</option>
                        <option >Entertainment</option>
                        <option >Bills</option>
                        <option >Health</option>
                        <option >Education</option>
                        <option >Charity</option>
                        <option >Investments</option>
                        <option >Other</option>
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>

            <button type="submit">Submit</button>
        </form> */}
      </div>
        
    );
}

export default CreateExpense;