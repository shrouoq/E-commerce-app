import React, { useState } from "react";
import sidebarBanner from "../../assets/sidebar-banner.gif.png";

const Sidebar = ({ sidebarRef, isSidebarOpen }) => {
  const [priceRange, setPriceRange] = useState(55);
  const [availability, setAvailability] = useState("all");
  const productOutcomes = [
    "Beverages",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Fruits & Vegetables",
    "Grocery & Snacks",
    "Household Meals",
    "Meats & Seafood",
  ];

  const brands = ["Frito Lay", "Quaker", "Cola", "Valerba", "Oreo"];

  return (
    <>
      <div
        ref={sidebarRef}
        className={`bg-white fixed lg:static top-0 left-0 h-full min-h-screen w-4/5 max-w-sm lg:w-1/4 z-40 
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
              {productOutcomes.map((category, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${index}`}
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
          {/* ===============Filter by brand=============== */}
          <div className="bg-white p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-4">BRANDS</h2>
            <ul className="space-y-2">
              {brands.map((brand, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      id={`brand-${index}`}
                      className="mr-2"
                    />
                    <label htmlFor={`brand-${index}`} className="text-gray-700">
                      {brand}
                    </label>
                  </div>
                  <span className="text-gray-700">(10)</span>
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
          {/* ===========availability=========== */}
          <div className="bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              AVAILABILITY
            </h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="in-stock"
                  name="availability"
                  checked={availability === "in-stock"}
                  onChange={() => setAvailability("in-stock")}
                  className="mr-2"
                />
                <label htmlFor="in-stock" className="text-gray-700">
                  In stock
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="out-of-stock"
                  name="availability"
                  checked={availability === "out-of-stock"}
                  onChange={() => setAvailability("out-of-stock")}
                  className="mr-2"
                />
                <label htmlFor="out-of-stock" className="text-gray-700">
                  Out of stock
                </label>
              </div>
            </div>
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
