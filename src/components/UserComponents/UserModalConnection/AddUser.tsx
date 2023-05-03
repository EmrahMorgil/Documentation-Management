import AddUserModal from "../../../modals/UserModal/AddUserModal";

const AddUser: React.FC = () => {
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

      <AddUserModal />
    </div>
  );
};

export default AddUser;
