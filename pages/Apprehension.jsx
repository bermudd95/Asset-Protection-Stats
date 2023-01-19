import React from 'react'
import { data } from '@/Data/data'
import { GiHandcuffs } from 'react-icons/gi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Apprehension = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
            <h2>
                Apprehensions
            </h2>
            <h2>
                Welcome, Danny
            </h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 ms:grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Order</span>
                    <span className='sm:text-left text-right'>Status</span>
                    <span className='hidden md:grid'>Last Order</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer'>
                            <div className='flex'>
                                <div className='bg-red-500 p-3 rounded-lg'>
                                    <GiHandcuffs className='text-black'/>
                                </div>
                                <div className='pl-4'>
                                    <p className='text-green-600 font-bold'>
                                        ${order.total.toLocaleString()}
                                    </p>
                                    <p className='text-gray-800 text-sm'>{order.name.last}</p>
                                </div>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>
                                <span className={
                                    order.status == "Approved" 
                                        ? 'bg-green-200 p-2 rounded-lg' 
                                        : order.status == "Awaiting Approval" 
                                        ? 'bg-yellow-300 p-2 rounded-lg' 
                                        : 'bg-red-600 p-2 rounded-lg text-black'
                                }>
                                    {order.status}
                                </span>
                            </p>
                            <p className='hidden md:flex'>
                               {order.date}
                            </p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>
                                   {order.method}  
                                </p>
                                <BsThreeDotsVertical />
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Apprehension