import React from "react";
import { User } from "react-feather";

function Navbar() {
  return (
    <>
      <div className="pt-3">
        <div className="card mx-5">
          <div className="card-body">
            <div className="d-flex justify-content-end gap-4">
              <div className="fw-semibold">Elyas Purba Prastiya</div>
              <User />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
