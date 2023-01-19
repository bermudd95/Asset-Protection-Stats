import React from 'react'
import {BsThreeDotsVertical, BsFillPersonFill} from 'react-icons/bs'
import { data } from '@/Data/data'

const Suspects = () => {
  return (
    <div className='bg-gray-400 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>
                Apprehensions
            </h2>
            <h2>
                Welcome, Danny
            </h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Name</span>
                    <span className='sm:text-left text-right'>DOB</span>
                    <span className='hidden md:grid'>Case Submitted</span>
                    <span className='hidden sm:grid'>Status</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 ms:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-red-500 p-3 rounded-lg'>
                                    <BsFillPersonFill className='text-black' />
                                </div>
                                <p className='pl-4'>
                                    {order.name.last + " " + order.name.first}
                                </p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>
                                {order.DOB}
                            </p>
                            <p className='hidden md:flex'>
                                {order.date}
                            </p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>
                                    {order.status}
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

export default Suspects