import React from "react";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";

const SingleStudentEmptyState = () => {
  return (
    <div className="flex flex-col border-4 border-dim-gray rounded-md border-dashed w-full p-20 items-center justify-center">
      <Link className="flex flex-col items-center" to="/">
        <UserPlus size={50} strokeWidth={1} />
        <div className="font-sans text-lg font-bold">Enroll to a campus</div>
      </Link>
    </div>
  );
};

export default SingleStudentEmptyState;
