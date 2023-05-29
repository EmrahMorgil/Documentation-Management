import React from "react";
import { mdlContent } from "../../../types/Type";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export interface IContentTagAddButton {
  newContent: mdlContent;
  contentTag: string;
  setContentTag: React.Dispatch<React.SetStateAction<string>>;
  contentType: string;
  setUpdatedContent?: React.Dispatch<React.SetStateAction<mdlContent>>;
}

const ContentTagAddButton: React.FC<IContentTagAddButton> = ({newContent,contentTag,setContentTag,contentType,setUpdatedContent}) => {
  const addContentTag = (e: any) => {
    e.preventDefault();
    if (newContent.contentTags.includes(contentTag)) {
      toast.error("This tag is already attached!!");
    } else {
      if (contentType === "addContentModal") {
        newContent.contentTags.push(contentTag);
      } else {
        let newContentTag: string[] = [...newContent.contentTags, contentTag];
        setUpdatedContent!({
          id: newContent.id,
          contentName: newContent.contentName,
          createdPerson: newContent.createdPerson,
          updatedPerson: newContent.updatedPerson,
          createdDate: newContent.createdDate,
          updatedDate: newContent.updatedDate,
          version: newContent.version,
          content: newContent.content,
          contentTags: newContentTag,
          projectId: newContent.projectId,
        });
      }
    }
    setContentTag("");
  };

  return (
    <button className="btn btn-primary" onClick={(e) => addContentTag(e)}>
      Add
    </button>
  );
};

export default ContentTagAddButton;
