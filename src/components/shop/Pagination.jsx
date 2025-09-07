const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <>
      {/* ========== Pagination ========== */}
      <div className="w-100 flex items-center justify-center">
        <div className="flex justify-center flex-wrap gap-y-2 mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#35AFA0] hover:bg-[#35AFA9] text-white"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-full transition-colors duration-200 ${
                currentPage === index + 1
                  ? "bg-[#35AFA0] hover:bg-[#35AFA9] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#35AFA0] hover:bg-[#35AFA9] text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
