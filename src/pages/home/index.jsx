import React from "react";
import ReactTable from "../../component/reactTable";

import { useGetCharacter } from "./hook/useGetCharacter";

export default function Home() {
  const { data, isFetching } = useGetCharacter();

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
    },
    {
      name: "SPECIES",
      selector: (row) => row.species,
    },
    {
      name: "GENDER",
      selector: (row) => row.gender,
    },
  ];

  return (
    <>
      <ReactTable
        columns={columns}
        data={data?.results}
        isLoading={isFetching}
      />
    </>
  );
}
