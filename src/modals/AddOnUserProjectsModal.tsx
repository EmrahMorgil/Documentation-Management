import React, { useState } from "react";
import { project, user } from "../types/Type";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import RemoveOnUserProject from "../components/ProjectComponents/RemoveOnUserProject";
import AddOnUserProjectContainer from "../components/UserComponents/AddOnUserProjectContainer";

const AddOnUserProjectsModal = ({ user }: { user?: user }) => {
  
  return (
    <div
      className="modal fade" id={user?.id + "on"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{display: "flex", justifyContent: "center",marginTop: "50px"}}>
              <AddOnUserProjectContainer user={user}/>
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
