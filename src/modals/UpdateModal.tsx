import React from "react";

const UpdateModal = () => {
  return (
    <div
      className="modal fade"
      id="updateModal"
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
                marginTop: "150px",
              }}
            >
              <form style={{ width: "400px", textAlign: "center" }}>
                <h3>Add User</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Surname"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
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

export default UpdateModal;
