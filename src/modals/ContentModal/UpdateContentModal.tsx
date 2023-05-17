import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IContentProp, content, user } from "../../types/Type";
import { setContents } from "../../redux/contents/contentsSlice";
import { updateContents } from "../../services/contentService";

const UpdateContentModal: React.FC<IContentProp> = ({ content }) => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );
  const [updateButtonActive, setUpdateButtonActive] = useState(true);
  const contents = useSelector((state: RootState) => state.contents.contents);
  const dispatch = useDispatch();
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const [updatedContent, setUpdatedContent] = useState<content>({
    id: content.id,
    contentName: content.contentName,
    createdPerson: content.createdPerson,
    updatedPerson: content.updatedPerson,
    createdDate: content.createdDate,
    updatedDate: content.updatedDate,
    version: content.version,
    content: content.content,
    contentTags: content.contentTags,
    projectId: content.projectId,
  });

  const updateContent = async (item: content) => {
    let date = new Date();
    let nowDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
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

  const undoContent = () => {
    setUpdatedContent({
      id: content.id,
      contentName: content.contentName,
      createdPerson: content.createdPerson,
      updatedPerson: content.updatedPerson,
      createdDate: content.createdDate,
      updatedDate: content.updatedDate,
      version: content.version,
      content: content.content,
      contentTags: content.contentTags,
      projectId: content.projectId,
    });
  };

  useEffect(() => {
    if (
      updatedContent.contentName == content.contentName &&
      updatedContent.version == content.version &&
      updatedContent.content == content.content &&
      updatedContent.contentTags == content.contentTags
    ) {
      setUpdateButtonActive(true);
    } else {
      setUpdateButtonActive(false);
    }
  }, [updatedContent]);

  return (
    <div
      className="modal fade"
      id={content.id}
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
                marginTop: "10px",
              }}
            >
              <form>
                <div
                  style={{
                    marginBottom: "50px",
                    width: "400px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  <h3>Update Content</h3>
                </div>
                {adminLoggedIn ? (
                  <>
                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Name
                      </label>
                      <input
                        type="text"
                        style={{ border: "1px solid black" }}
                        value={updatedContent.contentName}
                        name="contentName"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Version
                      </label>
                      <input
                        type="number"
                        style={{ border: "1px solid black" }}
                        value={updatedContent.version}
                        name="version"
                        max={0.9}
                        min={0.1}
                        step={0.1}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        style={{ color: "black" }}
                      >
                        Content
                      </label>
                      <textarea
                        rows={6}
                        style={{ border: "1px solid black" }}
                        value={updatedContent.content}
                        name="content"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Tags
                      </label>
                      <input
                        type="text"
                        style={{ border: "1px solid black" }}
                        value={updatedContent.contentTags}
                        name="contentTags"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  //user
                  <>
                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Name
                      </label>
                      <input
                        type="text"
                        style={{ border: "1px solid black" }}
                        value={updatedContent.contentName}
                        name="contentName"
                        className="form-control"
                        disabled
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Version
                      </label>
                      <input
                        style={{ border: "1px solid black" }}
                        type="text"
                        value={updatedContent.version}
                        name="version"
                        className="form-control"
                        disabled
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        style={{ color: "black" }}
                      >
                        Content
                      </label>
                      <textarea
                        rows={6}
                        style={{ border: "1px solid black" }}
                        value={updatedContent.content}
                        name="content"
                        className="form-control"
                        disabled
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="exampleInput" style={{ color: "black" }}>
                        Content Tags
                      </label>
                      <input
                        style={{ border: "1px solid black" }}
                        type="text"
                        value={updatedContent.contentTags}
                        name="contentTags"
                        className="form-control"
                        disabled
                      />
                    </div>
                  </>
                )}
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
            {adminLoggedIn && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={undoContent}
              >
                Undo Changes
              </button>
            )}

            {adminLoggedIn && (
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                disabled={updateButtonActive}
                onClick={() => updateContent(content)}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContentModal;
