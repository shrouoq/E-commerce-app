import React from 'react'

export default function ProductCard({orders}) {
        /* 
    [
        {
            "id":41,
            "title":"Frozen Pizza",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_E-OThdf_a4GXg_D58u4rEDv9_a4Sj8Cbw&s",
            "price":"55",
            "description":"Ready-to-bake pepperoni pizza",
            "brand":"Dr. Oetker",
            "model":"Ristorante Pizza",
            "color":"Mixed",
            "category":"Frozen Foods",
            "discount":"0%",
            "image2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf-_HNWu79r8AMi8aUpDUyYbjP2IP_o8svw&s",
            "image3":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2I6VYI_7Qsw-lAapPjIMSheYxyLxf-7QqA&s",
            "image4":"https://eu-central-1-droetker.graphassets.com/AVtdz8Pl3QxerK0kYX32fz/cmdr6jevrciyh07w0y05lxvgi",
            "quantity":2
        }
    ]
    */ 
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
