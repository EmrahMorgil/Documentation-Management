import React, { useState } from "react";
import { project, user } from "../../types/Type";
import OnUserProjectContainer from "../../components/ProjectComponents/OnUserProject/OnUserProjectContainer";

interface IAddOnUserProjectsModal{
  onUser?: user;
} 

const OnUserProjectsModal: React.FC<IAddOnUserProjectsModal> = ({ onUser }) => {
  
  return (
    <div
      className="modal fade" id={onUser?.id + "on"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div style={{display: "flex", justifyContent: "center",marginTop: "50px"}}>
              {onUser?.totalProject === 0 ? <h3>This user has no projects</h3> : <OnUserProjectContainer onUser={onUser}/>}
              
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

export default OnUserProjectsModal;