'use client'
import { useForm } from "react-hook-form";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from 'next-auth/react';


// async function getData() {
//     const session = await getSession(); // Retrieve the session information
//     const response = await fetch('http://localhost:3000/api/expense', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${session.accessToken}`, // Include the session token in the Authorization header
//         },
//     });
//     return response.json();
// }
// // import useSWR from 'swr';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DeleteTransaction = () => {
    // console.log(props.user);
    // const { data, error } = useSWR('http://localhost:3000/api/expense', fetcher);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = async (d) => {
    //     console.log(JSON.stringify(d));
    //     try {
    //         const response = await fetch('http://localhost:3000/api/expense', {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             //     Authorization: `Bearer ${session.accessToken}`, // Include the session token in the Authorization header
    //             },
    //             body: JSON.stringify(d), // Replace with your form data
    //         });

    //         if (response.ok) {
    //             // Handle the successful response
    //             console.log('Data deleted successfully');
    //         } else {
    //             // Handle the error response
    //             console.log('Error deleting data');
    //         }
    //     } catch (error) {
    //         // Handle any errors that occurred during the fetch request
    //         console.log('Fetch error:', error);
    //     }
    // };
    return (
        <> 
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Transaction Id:
                    <select {...register('eid', { required: true })}>
                        {data?.map(x => {
                            return <option key={x.id} >{x.id}</option>
                        })}
                    </select>
                </label>
                {errors.isIncome && <span>Type is required</span>}
            </div>

            <button type="submit">Submit</button>
        </form> */}
        </>

    );
}

export default DeleteTransaction;