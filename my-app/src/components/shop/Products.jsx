import React, { useState } from "react";
import containerImg from "../../assets/Container.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import Pagination from "./Pagination";
import { products } from "./data";

const Products = ({ setIsSidebarOpen }) => {
  // make pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);
  return (
    <>
      <div className="w-full lg:w-3/4" onClick={() => setIsSidebarOpen(false)}>
        {/* ======= Container Image=========== */}
        <div className="mb-6">
          <img
            src={containerImg}
            className="w-full object-cover object-center"
            alt="containerImg"
          />
        </div>
        {/* ======= Products Number=========== */}
        <div className="px-3 py-4 mb-4 bg-gray-200 text-gray-500 text-xs font-semibold flex items-center justify-between w-100 rounded-md">
          <p>{products.length} products</p>
          <p>
            Sort by : <span className="text-black">Alphabetically, A-Z</span>
          </p>
        </div>
        {/* ===========Product Grid=========== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts?.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* =======Product Image=========== */}
              <div className="h-48 flex items-center justify-center">
                <img
                  className="w-100 group-hover:scale-105 transition-all duration-300"
                  src={product.image}
                  alt="product-image"
                />
              </div>

              {/* =======Product Details=========== */}
              <div className="flex flex-col flex-grow p-4">
                {/* =======Product Name=========== */}
                <h3 className="font-medium text-gray-800 mb-2">
                  {product.name}
                </h3>

                {/* =======Stock=========== */}
                <p className="text-sm text-green-600 uppercase mb-2">
                  {product.code}
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
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="font-semibold">
                      ${product.price.toFixed(2)}
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
          ))}
        </div>
        {/* ==========Pagination=========== */}
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default Products;
