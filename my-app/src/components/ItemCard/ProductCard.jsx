import { FaRegStar , FaStar } from "react-icons/fa"


export default function ProductCard({product}) {
  return (
    <div
        key={product.id}
        className="group bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
    >
        {/* =======Product Image=========== */}
        <div className="h-48 p-4 flex items-center justify-center">
        <img
            className="w-100 h-full group-hover:scale-105 transition-all duration-300"
            src={product.image}
            alt="product-image"
        />
        </div>

        {/* =======Product Details=========== */}
        <div className="flex flex-col flex-grow p-4">
        {/* =======Product Name=========== */}
            <h3 className="font-medium text-gray-800 mb-2">
                {product.title}
            </h3>

            {/* =======Stock=========== */}
            <p className="text-sm text-green-600 uppercase mb-2">
                instock
            </p>

            {/* =======Reviews=========== */}
            <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, index) =>
                index < product.star ? (
                    <FaStar
                    key={index}
                    className="text-yellow-500"
                    size={14}
                    />
                ) : (
                    <FaRegStar
                    key={index}
                    className="text-yellow-500"
                    size={14}
                    />
                )
                )}
            </div>

            {/* =======Price=========== */}
            <div className="flex items-center justify-between mb-4">
                {product.originalPrice ? (
                <div className="flex items-center">
                    <span className="text-red-600 font-semibold">
                    ${product.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.price}
                    </span>
                </div>
                ) : (
                <span className="font-semibold">
                    ${product.price}
                </span>
                )}
            </div>

            {/* =======Add to Cart=========== */}
            <div className="mt-auto w-full flex items-center justify-center">
                <div className="w-[70%] flex items-center justify-center">
                <button className="w-1/3 border border-gray-300 rounded-tl-[30px] rounded-bl-[30px] bg-gray-200">
                    -
                </button>
                <p className="w-2/3 text-center border border-gray-300 p-0">
                    1
                </p>
                <button className="w-1/3 border border-gray-300 rounded-tr-[30px] rounded-br-[30px] bg-yellow-300">
                    +
                </button>
                </div>
            </div>

        </div>
                  
    </div>
  )
}
