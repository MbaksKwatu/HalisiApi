import React from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IoArrowBackCircleOutline,IoArrowForwardCircleOutline } from "react-icons/io5";

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage + 1;
  const lastItem = Math.min(indexOfLastItem, totalItems);

  return (
    <div className="flex items-center justify-between mt-4">
      <p className="text-sm text-gray-600">
        Showing {indexOfFirstItem} to {lastItem} of {totalItems}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-gray-100 hover:bg-gray-200'
          } `}
        >
          <IoArrowBackCircleOutline className="w-5 h-5 text-gray-600" />
        </button>
        {[...Array(Math.ceil(totalItems / itemsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            } `}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
          className={`px-3 py-1 rounded-md ${
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-gray-100 hover:bg-gray-200'
          } `}
        >
          <IoArrowForwardCircleOutline className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
