import React from "react";
import DataTable from "react-data-table-component";

export default function ReactTable({ data, columns, isLoading }) {
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        progressPending={isLoading}
        pagination
      />
    </>
  );
}
