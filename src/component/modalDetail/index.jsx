import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Loading from "../Loading/loading";

function ModalDetail({
  toggle,
  modal,
  isFetching,
  id,
  name,
  status,
  species,
  type,
  image,
}) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-primary" toggle={toggle}>
          <div className="text-white">Detail Character</div>
        </ModalHeader>
        <ModalBody>
          {isFetching ? (
            <div className="text-center">
              <Loading />
            </div>
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <span className="px-5">: {id}</span>
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <span className="px-5">: {name}</span>
                  </td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span className="px-5">: {status}</span>
                  </td>
                </tr>
                <tr>
                  <th>Species</th>
                  <td>
                    <span className="px-5">: {species}</span>
                  </td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>
                    <span className="px-5">
                      : {type ? type : "Tidak ada type"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Image</th>
                  <td>
                    <a href={image} className="px-5">
                      : {image}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" outline onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalDetail;
