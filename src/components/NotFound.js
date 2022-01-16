import React, { useEffect } from "react";
import { ChevronLeft } from "react-feather";

const NotFound = ({ history }) => {
  return (
    <div className="flex flex-col col-span-3 justify-center items-center my-10">
      <img src="/404.png" alt="" />
      <div className="flex flex-col gap-4 items-center">
        <div className="text-6xl font-serif">Ooooooops!</div>
        <div className="text-2xl"> Looks like you took the wrong turn. </div>
        <button
          onClick={() => history.goBack()}
          className="flex gap-2 items-center"
        >
          <ChevronLeft size={20} strokeWidth={4} />
          <div className="text-2xl font-extrabold">Go back</div>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
