import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, totalpage, handlePageChange } = useContext(AppContext);

  return (
    <div className="w-full border flex justify-center py-2 fixed bottom-0 bg-white mt-4">
      <div className="w-11/12 max-w-[700px] flex justify-between">
        <div className="flex gap-x-5">
          {page > 1 && (
            <button
              onClick={() => {
                handlePageChange(page - 1);
              }}
              className="border rounded-md px-4 py-1"
            >
              Previous
            </button>
          )}
          {page < totalpage && (
            <button
              onClick={() => {
                handlePageChange(page + 1);
              }}
              className="border rounded-md px-4 py-1"
            >
              next
            </button>
          )}
        </div>
        <p className="font-bold">
          Page <span>{page}</span> of <span>{totalpage}</span>
        </p>
      </div>
    </div>
  );
}

export default Pagination;
