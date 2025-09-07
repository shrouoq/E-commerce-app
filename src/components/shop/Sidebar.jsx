import React, { useEffect, useState } from "react";
import sidebarBanner from "../../assets/sidebar-banner.gif.png";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../../slice/DataSlice";

const Sidebar = ({ sidebarRef, isSidebarOpen, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [priceRange, setPriceRange] = useState(100);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.DataSlice);

  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  // ======= Handle Category Selection =========
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "All"), category];

      setSelectedCategories(
        updatedCategories.length ? updatedCategories : ["All"]
      );
    }
  };

  // ======= Handle Reset =========
  const handleReset = () => {
    setSelectedCategories(["All"]);
    setPriceRange(100);
  };

  // ======= Call parent filter function =========
  useEffect(() => {
    onFilter({ categories: selectedCategories, price: priceRange });
  }, [selectedCategories, priceRange, onFilter]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`bg-white fixed z-50 lg:z-40 lg:static top-0 left-0 h-full min-h-screen w-4/5 max-w-sm lg:w-1/4  
              transform transition-transform duration-300 ease-in-out 
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 
              overflow-y-auto lg:overflow-y-hidden shadow-lg lg:shadow-none border border-gray-200`}
      >
        <div className="">
          {/* ===============Filter by category=============== */}
          <div className="bg-white p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-4">
              PRODUCT CATEGORIES
            </h2>
            <ul className="space-y-2">
              {/* Add All category */}
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="category-all"
                  checked={selectedCategories.includes("All")}
                  onChange={() => handleCategoryChange("All")}
                  className="mr-2"
                />
                <label htmlFor="category-all" className="text-gray-700">
                  All
                </label>
              </li>
              {categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${index}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="text-gray-700"
                  >
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* ========Filter by price=========== */}
          <div className="bg-white p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">PRICE</h2>
            <div className="mb-2">
              <span className="text-gray-700">From: $0 - ${priceRange}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full"
            />
          </div>
          {/* ========Reset Button=========== */}
          <div className="p-4">
            <button
              onClick={handleReset}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded"
            >
              Reset Filters
            </button>
          </div>
          {/* ==========Sidebar Banner=========== */}
          <div className="shadow mt-6 p-4">
            <img
              src={sidebarBanner}
              className="w-full object-cover object-center"
              alt="sidebarBanner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
