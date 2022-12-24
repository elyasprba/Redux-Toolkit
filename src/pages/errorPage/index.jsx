import React from "react";

import EmptyDataTable from "../../component/emptyDataTable";

export default function Unauthorized() {
  return (
    <>
      <div
        className="text-center"
        style={{
          height: "100vh",
          paddingTop: "150px",
        }}>
        <EmptyDataTable />
      </div>
    </>
  );
}
