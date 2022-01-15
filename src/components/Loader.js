import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center p-15 col-span-full">
      <div className="rounded-full p-3 w-20 bg-eggshell  flex space-x-2 justify-center items-center">
        <div className="bg-stone-400 w-2 h-2 rounded-full animate-bounce delay-100"></div>
        <div className="bg-stone-400 w-2 h-2 rounded-full animate-bounce delay-200"></div>
        <div className="bg-stone-400 w-2 h-2 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;
