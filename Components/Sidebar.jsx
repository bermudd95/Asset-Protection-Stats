import Link from 'next/link'
import React from 'react'
import {GiEyeShield} from 'react-icons/gi'
import {RxDashboard} from 'react-icons/rx'
import {BsClipboardData, BsPersonFill} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-red-500 text-white p-3 rounded-lg inline-block'>
                        <GiEyeShield size={30}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-300 w-full p-2'></span>
                <Link href='/'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={30}/>
                    </div>
                </Link>
                <Link href='/Suspects'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <BsPersonFill size={30}/>
                    </div>
                </Link>
                <Link href='/Apprehension'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <BsClipboardData size={30}/>
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar