import React, { useState } from "react";
import { project, user } from "../types/Type";
import AddOnUserProjectContainer from "../components/UserComponents/AddOnUserProjectContainer";

const AddOnUserProjectsModal = ({ onUser }: { onUser?: user }) => {
  
  return (
    <div
      className="modal fade" id={onUser?.id + "on"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{display: "flex", justifyContent: "center",marginTop: "50px"}}>
              <AddOnUserProjectContainer onUser={onUser}/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-success" data-dismiss="modal">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnUserProjectsModal;
