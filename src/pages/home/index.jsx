import React, { useState } from "react";
import ReactTable from "../../component/reactTable";
import { ExternalLink } from "react-feather";
import { Button } from "reactstrap";

import ModalDetail from "../../component/modalDetail";

import { useGetCharacter } from "./hook/useGetCharacter";
import { useGetCharacterId } from "./hook/useGetIdCharacter";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(1);

  const { data, isFetching } = useGetCharacter();
  const { dataId } = useGetCharacterId(id);
  console.log(dataId);

  const toggle = () => setModal(!modal);

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
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <>
          <Button
            size="sm"
            color="outline-primary"
            style={{ padding: "10px", marginLeft: "5px" }}
            onClick={() => {
              setId(row.id);
              toggle();
            }}>
            <ExternalLink size={14} />
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <ReactTable
        columns={columns}
        data={data?.results}
        isLoading={isFetching}
      />
      <ModalDetail modal={modal} toggle={toggle} />
    </>
  );
}
