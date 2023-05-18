import React from "react";
import { IContentDetailUpdateButton, content } from "../../../types/Type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateContents } from "../../../services/contentService";
import { setContents } from "../../../redux/contents/contentsSlice";

const ContentDetailUpdateButton: React.FC<IContentDetailUpdateButton> = ({
  content,
  updatedContent,
  buttonActive,
  setButtonActive,
}) => {
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const contents = useSelector((state: RootState) => state.contents.contents);
  const dispatch = useDispatch();

  const updateContent = async (item: content) => {
    setButtonActive(true);
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

  return (
    <button
      type="button"
      className="btn btn-warning"
      data-dismiss="modal"
      disabled={buttonActive}
      onClick={() => updateContent(content)}
    >
      Update
    </button>
  );
};

export default ContentDetailUpdateButton;
