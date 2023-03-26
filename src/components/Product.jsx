import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({item}) => {
  return (
    <Link to={`${item.id}`} className='w-32 h-56 lg:w-56 lg:h-80 gap-2 border-2 shadow-md hover:shadow-2xl flex flex-col justify-start lg:gap-4 items-center border-gray-500 rounded-lg'>
        {/* Image container */}
        <img src={item.image} alt={item.title}  className="w-28 h-28 lg:w-48 p-2 lg:h-48 block object-contain" />
        <p className='rounded-lg px-4 lg:text-lg bg-gray-100'>&#36; {item.price}</p>
        <h2 className='line-clamp-2 text-sm lg:text-md font-bold w-full px-2' title={item.title}>{item.title}</h2>

    </Link>
  )
}
