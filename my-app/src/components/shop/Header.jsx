import { FiFilter, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <>
      <header className="shadow-sm py-4 relative">
        <div className="container mx-auto flex items-center justify-between">
          <h5 className="text-[18px] text-gray-800">
            <Link to="/" className="text-bold">
              Home
            </Link>{" "}
            {">"} <span className="text-gray-300">Products</span>
          </h5>

          {/* Mobile Filter Button */}
          <button
            className="lg:hidden sidebar-toggle p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiFilter className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
