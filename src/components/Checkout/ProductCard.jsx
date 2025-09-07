import React from 'react'

export default function ProductCard({orders}) {
 
    return (
        <>
            {orders.map((product, index) => (
                <div className='md:flex md:text-sm justify-start items-center gap-3' key={index}>
                    <div className='relative border-2 p-3'>
                        <img src={product.image} alt={product.title} className='size-20 md:mx-0 ' />
                        <div className='absolute right-[-3px] top-0 bg-gray-600 size-7 rounded-full flex justify-center items-center'>
                            <span className=' text-white'>{product.quantity}</span>
                        </div>
                    </div>
                    <p className=' text-center text-xl '> {product.title} </p>
                    <p className='pl-10 pt-5 md:pt-0 '> ${product.price}</p>

                </div>
            ))}
        </>
    )
}
