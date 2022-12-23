import React from "react";
import emptyData from "../../assets/emptyData.png";

export default function EmptyDataTable() {
  return (
    <>
      <div className="p-4">
        <img src={emptyData} alt="graphic" style={{ width: 200 }} />
        <p className="font-weight-bold text-center mt-2">
          No data Record to display
        </p>
      </div>
    </>
  );
}
