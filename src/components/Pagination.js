import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({ entities, cardsPerPage, paginate, currPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((entities.length / cardsPerPage) * 1); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col-span-3 rounded-md">
      <div className="flex-row flex gap-x-2 justify-center">
        <button
          onClick={() => paginate(currPage - 1)}
          disabled={currPage === 1}
          className="drop-shadow-sm disabled:drop-shadow-none disabled:bg-stone-200 disabled:text-stone-300 py-2 px-2 rounded-md bg-eggshell focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <ChevronLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`${
              currPage === number ? "border-2 border-gold" : ""
            } drop-shadow-sm py-2 px-4 rounded-md bg-eggshell`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currPage + 1)}
          disabled={currPage === pageNumbers.length}
          className="drop-shadow-sm disabled:bg-stone-200 disabled:text-stone-400 py-2 px-2 rounded-md bg-eggshell focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
