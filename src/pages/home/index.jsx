import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import { ExternalLink, Search } from "react-feather";

import Navbar from "../../component/navbar";
import ReactTable from "../../component/reactTable";
import ModalDetail from "../../component/modalDetail";

import { useGetCharacter } from "./hook/useGetCharacter";
import { useGetCharacterId } from "./hook/useGetIdCharacter";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(1);

  const { data, isFetching } = useGetCharacter(name);
  const { data: datas, isFetching: fetching } = useGetCharacterId(id);

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

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClickFilter = () => {
    setName(filter);
  };

  const handleResetFilter = () => {
    setFilter("");
    setName("");
  };

  return (
    <>
      <Navbar />

      <div className="card m-5">
        <div
          className="card-header"
          style={{
            backgroundColor: "#0462A7",
          }}>
          <div className="card-title-cypress fw-bold fs-4 text-white">
            React Data Table
          </div>
        </div>
        <div className="card-body">
          <div className="row pb-2">
            <div className="col-lg-3">
              <Input
                type="text"
                id="name"
                placeholder="Search Name"
                value={filter}
                onChange={handleChange}
              />
              <Label htmlFor="name"></Label>
            </div>
            <div className="col-lg-3">
              <Button
                color="primary"
                className="mx-2"
                onClick={handleClickFilter}>
                <Search size={20} /> Search
              </Button>
              <Button className="secondary" outline onClick={handleResetFilter}>
                Reset
              </Button>
            </div>
            <div className="col-lg-3"></div>
          </div>
          <ReactTable
            columns={columns}
            data={data?.results}
            isLoading={isFetching}
          />
        </div>
      </div>

      <ModalDetail
        modal={modal}
        toggle={toggle}
        isFetching={fetching}
        id={datas?.id}
        name={datas?.name}
        status={datas?.status}
        species={datas?.species}
        type={datas?.type}
        image={datas?.image}
      />
    </>
  );
}
