import React, { useState } from "react";
import { project, user } from "../types/Type";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import RemoveOnUserProject from "../components/ProjectComponents/RemoveOnUserProject";

const AddOnUserProjectsModal = ({ user }: { user: user }) => {
  return (
    <div
      className="modal fade"
      id={user.id + "on"}
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
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  <h3>Add Project</h3>
                </div>

                <div>
                  <ProjectsList
                  filterValue=""
                    projectsControl={"addUserOnProject"}
                    userId={user.id}
                  />
                </div>
                <div>
                  <h3>User's Projects</h3>
                  {/* {JSON.stringify(item.visibilityProjects)} */}
                  {user.visibilityProjects.map((item: project, i: number) => {
                    return (
                      <div key={i}>
                        <div className="row">
                          <div className="col">{item.projectName}</div>
                          <div className="col">{item.createdDate}</div>
                          <div className="col">{item.updatedDate}</div>
                          <RemoveOnUserProject item={item} userId={user.id}/>
                        </div>
                      </div>
                    );
                  })}
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
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnUserProjectsModal;
