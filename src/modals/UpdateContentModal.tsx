import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { content, user } from "../types/Type";
import { updateUsers } from "../services/userService";
import { setUsers } from "../redux/users/usersSlice";
import { setContents } from "../redux/contents/contentsSlice";
import { updateContents } from "../services/contentService";

const UpdateContentModal = ({ item }: { item: content }) => {
  const contents = useSelector((state: RootState) => state.contents.contents);
  const dispatch = useDispatch();
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const [updatedContent, setUpdatedContent] = useState<content>({
    id: item.id,
    contentName: item.contentName,
    createdPerson: item.createdPerson,
    updatedPerson: item.updatedPerson,
    createdDate: item.createdDate,
    updatedDate: item.updatedDate,
    version: item.version,
    content: item.content,
    contentTags: item.contentTags,
    projectId: item.projectId,
  });

  const updateContent = async (item: content) => {
    let nowDate = new Date().toString().substring(0, 24);
    const setUpdatedContent = { ...updatedContent };
    setUpdatedContent.updatedDate = nowDate;
    setUpdatedContent.updatedPerson = activeUser;

    const {
      id,
      contentName,
      createdPerson,
      updatedPerson,
      createdDate,
      updatedDate,
      version,
      content,
      contentTags,
      projectId,
    } = setUpdatedContent;

    updateContents(item.id, setUpdatedContent);
    //api

    const newArr = contents.map((contents: content) => {
      if (contents.id === item.id) {
        return {
          id,
          contentName,
          createdPerson,
          updatedPerson,
          createdDate,
          updatedDate,
          version,
          content,
          contentTags,
          projectId,
        };
      }
      return contents;
    });
    dispatch(setContents(newArr));
  };

  const handleChange = (e: any) => {
    setUpdatedContent({ ...updatedContent, [e.target.name]: e.target.value });
  };

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
                marginTop: "150px",
              }}
            >
              <form style={{ width: "400px", textAlign: "center" }}>
                <h3>Update Content</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedContent.contentName}
                    name="contentName"
                    className="form-control"
                    placeholder="Content Name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedContent.version}
                    name="version"
                    className="form-control"
                    placeholder="Content Version"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedContent.content}
                    name="content"
                    className="form-control"
                    placeholder="Content"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedContent.contentTags}
                    name="contentTags"
                    className="form-control"
                    placeholder="Content Tags"
                    onChange={handleChange}
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
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => updateContent(item)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContentModal;
