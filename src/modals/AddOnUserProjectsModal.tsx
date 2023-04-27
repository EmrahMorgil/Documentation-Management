import React from "react";
import { project, user } from "../types/Type";

const AddOnUserProjectsModal = ({ item }: { item: user }) => {
  return (
    <div
      className="modal fade"
      id={item.id}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <form>
                <div
                  style={{
                    marginBottom: "50px",
                    width: "400px",
                    textAlign: "center",
                  }}
                >
                  <h3>Add Project</h3>
                </div>
                
                <div>
                    All Projects
                </div>
                
              </form>
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
