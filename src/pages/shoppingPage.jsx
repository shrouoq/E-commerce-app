import { useState, useEffect, useRef } from "react";
import Products from "../components/shop/Products";
import Sidebar from "../components/shop/Sidebar";
import Header from "../components/shop/Header";

const ShoppingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: ["All"],
    price: 100,
  });
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Prevent body scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <Sidebar
            sidebarRef={sidebarRef}
            isSidebarOpen={isSidebarOpen}
            onFilter={setFilters}
          />

          {/* Overlay for mobile when sidebar is open */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"></div>
          )}

          {/* Product Grid */}
          <Products setIsSidebarOpen={setIsSidebarOpen} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
