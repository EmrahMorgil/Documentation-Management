import React from "react";
import { project, user } from "../../types/Type";
import RemoveOnUserProject from "./RemoveOnUserProject";

const RemoveOnUserProjectList = ({ user }: { user: user }) => {
  return (
    <div>
      {user.visibilityProjects.map((item: project, i: number) => {
        return (
          <div className="row">
            <div className="col">{item.projectName}</div>
            <div className="col">{item.createdDate}</div>
            <div className="col">{item.updatedDate}</div>
            {/* <RemoveOnUserProject item={item} userId={user.id} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default RemoveOnUserProjectList;
