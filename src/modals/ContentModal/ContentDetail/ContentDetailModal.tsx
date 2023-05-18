import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IContentProp, content } from "../../../types/Type";
import ContentDetailUndoButton from "./ContentDetailUndoButton";
import ContentDetailUpdateButton from "./ContentDetailUpdateButton";

const ContentDetailModal: React.FC<IContentProp> = ({ content }) => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );
  const [buttonActive, setButtonActive] = useState(true);

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

  const handleChange = (e: any) => {
    setUpdatedContent({ ...updatedContent, [e.target.name]: e.target.value });
    if(e.target.name === "contentTags")
    {
      setUpdatedContent({...updatedContent, ["contentTags"]: [e.target.value]});
    }
  };

  useEffect(() => {
    if (
      updatedContent.contentName == content.contentName &&
      updatedContent.version == content.version &&
      updatedContent.content == content.content &&
      updatedContent.contentTags == content.contentTags
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
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
                    disabled={!adminLoggedIn}
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
                    step={0.1}
                    className="form-control"
                    onChange={handleChange}
                    disabled={!adminLoggedIn}
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
                    disabled={!adminLoggedIn}
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
                    disabled={!adminLoggedIn}
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
            {adminLoggedIn && (
              <ContentDetailUndoButton
                content={content}
                updatedContent={updatedContent}
                setUpdatedContent={setUpdatedContent}
                buttonActive={buttonActive}
              />
            )}

            {adminLoggedIn && (
              <ContentDetailUpdateButton
                content={content}
                updatedContent={updatedContent}
                buttonActive={buttonActive}
                setButtonActive={setButtonActive}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailModal;
