import AddModal from "../modals/AddModal";

const AddUser = () => {
  return (
    <div>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "30px" }}
        >
          <div>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add User
            </button>

            <AddModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
