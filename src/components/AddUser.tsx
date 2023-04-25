import AddModal from "../modals/AddModal";

const AddUser = () => {
  return (
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
  );
};

export default AddUser;
