import React from "react";
import DataTable from "react-data-table-component";
import EmptyDataTable from "../emptyDataTable";

export default function ReactTable({ data, columns, isLoading }) {
  return (
    <>
      <DataTable
        striped
        columns={columns}
        data={data}
        progressPending={isLoading}
        pagination
        noDataComponent={<EmptyDataTable />}
      />
    </>
  );
}
