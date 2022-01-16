import React, { Fragment } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({ entities, cardsPerPage, paginate, currPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((entities.length / cardsPerPage) * 1); i++) {
    pageNumbers.push(i);
  }

  let counter = 0;
  return (
    <div className="col-span-full rounded-md">
      <div className="flex-row flex gap-x-2 justify-center">
        <button
          onClick={() => paginate(currPage - 1)}
          disabled={currPage === 1}
          className="drop-shadow-sm disabled:drop-shadow-none disabled:bg-stone-200 disabled:text-stone-300 py-2 px-2 rounded-md bg-eggshell focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <ChevronLeft />
        </button>
        {pageNumbers.map((number) => {
          if (number === pageNumbers.length - 1) counter++;
          return (
            <Fragment key={number}>
              <button
                key={number}
                className={`${
                  currPage === number ? "border-2 border-gold" : ""
                } ${
                  (number > currPage + 1 || number < currPage) &&
                  number !== pageNumbers.length
                    ? "hidden"
                    : "block"
                } md:hidden drop-shadow-sm py-2 px-4 rounded-md bg-eggshell`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
              <div
                className={` ${
                  number !== pageNumbers.length && counter > 0 ? "block" : ""
                }hidden drop-shadow-sm md:hidden disabled:bg-stone-200 disabled:text-stone-400 py-2 px-4 rounded-md bg-eggshell focus:outline-none focus:ring-2 focus:ring-gold`}
              >
                ...
              </div>
            </Fragment>
          );
        })}

        {pageNumbers.map((number) => {
          return (
            <button
              key={number}
              className={`${
                currPage === number ? "border-2 border-gold" : ""
              } md:block hidden drop-shadow-sm py-2 px-4 rounded-md bg-eggshell`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          );
        })}

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
