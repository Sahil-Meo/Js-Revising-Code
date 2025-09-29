import React, { useContext, useState } from 'react';
import WebContext from '../../ContextApi/WebContext';

const PaginationButtons = () => {
  const { totalPages, setPage, fetchItems, setFetchItems } = useContext(WebContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPagesCount = totalPages || 3;
  const handlePageChange = (page) => {
    if (page <= totalPagesCount) {
      setCurrentPage(page)
      setPage(page);
      setFetchItems({
        ...fetchItems,
        skip: (page - 1) * fetchItems.limit
      });
      console.log(`Page changed to: ${page}`);

    }
  };

  return (
    <div className="w-full flex justify-center gap-4 text-[20px] overflow-x-auto py-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`rounded-lg min-w-12 h-12 transition duration-200 cursor-pointer ${currentPage === page
            ? 'text-white bg-ochre'
            : 'text-black bg-flow'
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-black bg-[#F9F1E7] rounded-lg px-8 h-12 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
