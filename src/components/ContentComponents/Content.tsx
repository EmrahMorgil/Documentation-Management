import React from "react";
import { content } from "../../types/Type";
import DeleteContent from "./DeleteContent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import UpdateContentModal from "../../modals/ContentModal/UpdateContentModal";

interface IContent {
  content: content;
  projectId?: string;
}

const Content: React.FC<IContent> = ({ content, projectId }) => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );

  return (
    <>
      <tr>
        <td scope="row">{content.id.substring(0, 2) + "..."}</td>
        <td scope="row">{content.contentName}</td>
        <td scope="row">{content.createdDate}</td>
        <td scope="row">{content.updatedDate}</td>
        <td scope="row">{content.createdPerson}</td>
        <td scope="row">{content.updatedPerson}</td>
        <td scope="row">{content.version}</td>
        <td scope="row">{content.content.substring(0, 20) + "..."}</td>
        <td scope="row">{content.contentTags}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          {adminLoggedIn ? (
            <>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Options
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    type="button"
                    className="dropdown-item"
                    data-toggle="modal"
                    data-target={`#${content.id}`}
                  >
                    Detail
                  </button>
                  <DeleteContent contentId={content.id} projectId={projectId} />
                </div>
              </div>
              <UpdateContentModal item={content} />
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#${content.id}`}
              >
                Detail
              </button>
              <UpdateContentModal item={content} />
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default Content;
