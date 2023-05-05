import React from 'react'
import { user } from '../../types/Type'
import ProjectsList from '../../components/ProjectComponents/ProjectsList'

const AddOnUserProjectsModal = ({addOnUserProject}: {addOnUserProject?: user}) => {
  return (
    <div
      className="modal fade" id={addOnUserProject?.id + "add"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">

        <h3 className='text-center mt-3'>Add Project</h3>
          <div style={{display: "flex", justifyContent: "center",marginTop: "50px"}}>
            <ProjectsList filterValue="" projectsControl={"addUserOnProject"} userId={addOnUserProject?.id}/>
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
  )
}

export default AddOnUserProjectsModal