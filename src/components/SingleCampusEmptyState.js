import React from "react";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";

const SingleCampusEmptyState = ({ url }) => {
  return (
    <div className="mt-5 md:my-10 flex flex-col border-4 border-dim-gray rounded-md border-dashed w-full p-20 items-center justify-center">
      <Link className="flex flex-col items-center" to={`${url}/edit`}>
        <UserPlus size={50} strokeWidth={1} />
        <div className="font-sans text-lg font-bold text-center">
          Enroll students
        </div>
      </Link>
    </div>
  );
};

export default SingleCampusEmptyState;
