import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Loading from "../Loading/loading";

function ModalDetail({ toggle, modal, isFetching, id }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-primary" toggle={toggle}>
          <div className="text-white">Detail Character</div>
        </ModalHeader>
        <ModalBody>
          {isFetching ? (
            <Loading />
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <span className="px-5">{id}</span>
                  </td>
                </tr>
                <tr>
                  <th>SourceSystem</th>
                  <td>
                    <span className="px-5"></span>
                  </td>
                </tr>
                <tr>
                  <th>MessageType</th>
                  <td>
                    <span className="px-5"></span>
                  </td>
                </tr>
                <tr>
                  <th>CampaignName</th>
                  <td>
                    <span className="px-5"></span>
                  </td>
                </tr>
                <tr>
                  <th>StartActiveDate</th>
                  <td>
                    <span className="px-5"></span>
                  </td>
                </tr>
                <tr>
                  <th>EndtActiveDate</th>
                  <td>
                    <span className="px-5"></span>
                  </td>
                </tr>
                <tr>
                  <th>AccountName</th>
                  <td>
                    <span className="px-5"></span>
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
