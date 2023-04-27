import React, { useState } from "react";
import { project, user } from "../types/Type";
import ProjectsList from "../components/ProjectComponents/ProjectsList";

const AddOnUserProjectsModal = ({ item }: { item: user }) => {


  return (
    <div
      className="modal fade"
      id={item.id+"on"}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div style={{textAlign: "center"}}>
                <div
                  style={{
                    marginBottom: "50px",
 
                  }}
                >
                  <h3>Add Project</h3>
                </div>
                
                <div>
                    <ProjectsList onUserControl={"addUserOnProject"}/>
                </div>
                <div>
                <h3>User's Projects</h3>
                {JSON.stringify(item.visibilityProjects)}
                </div>
                
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnUserProjectsModal;
