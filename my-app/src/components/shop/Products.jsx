import React, { useEffect, useState } from "react";
import containerImg from "../../assets/Container.png";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../../slice/DataSlice";
import ProductCard from "../ItemCard/ProductCard";

const Products = ({ setIsSidebarOpen, filters }) => {
  const dispatch = useDispatch();
  const { data, loading, errors } = useSelector((state) => state.DataSlice);

  useEffect(() => {
    dispatch(GetData()); // هنا بتجيب البيانات من Supabase
  }, [dispatch]);

  // Apply Filters
  const filteredData = data.filter((product) => {
    const inCategory =
      filters.categories.includes("All") ||
      filters.categories.includes(product.category);

    const inPrice = Number(product.price) <= filters.price;

    return inCategory && inPrice;
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredData.length / productsPerPage);

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
          <p>{filteredData.length} products</p>
          <p>
            Sort by : <span className="text-black">Alphabetically, A-Z</span>
          </p>
        </div>

        {/* ===========Product Grid=========== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
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
