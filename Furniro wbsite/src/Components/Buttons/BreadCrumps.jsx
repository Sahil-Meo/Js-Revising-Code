import { Link } from 'react-router-dom';
import React from 'react';

const BreadCrumps = ({ label }) => {
  return (
    <nav className="flex bg-flow p-4 sm:p-6 md:p-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm md:text-lg font-medium text-primary hover:text-ochre"
          >
            Home
          </Link>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to="/shop"
              className="ms-1 text-sm md:text-lg font-medium text-primary hover:text-ochre md:ms-2"
            >
              Shop
            </Link>
          </div>
        </li>

        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm md:text-lg font-normal text-gray-500 md:ms-2">
              {label}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumps;
