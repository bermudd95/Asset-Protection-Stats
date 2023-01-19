import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-5 pt-4 font-medium'>
        <h2>
            Dashboard
        </h2>
        <h2 className='underline font-bold lg:text-lg'>
          Northgate 111
        </h2>
        <h2>
            Welcome, Danny
        </h2>
    </div>
  )
}

export default Header