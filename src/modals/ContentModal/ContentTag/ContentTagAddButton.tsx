import React from 'react'
import { mdlContent } from '../../../types/Type';
import { nanoid } from 'nanoid';

export interface IContentTagAddButton{
    newContent: mdlContent;
    contentTag: string;
    setContentTag: React.Dispatch<React.SetStateAction<string>>;
}

const ContentTagAddButton: React.FC<IContentTagAddButton> = ({newContent, contentTag, setContentTag}) => {

    const addContentTag = (e: any)=>{
        e.preventDefault();
        newContent.contentTags.push({id: nanoid(), tag: contentTag});
        setContentTag("");
      }

  return (
    <button className="btn btn-primary" onClick={(e)=>addContentTag(e)}>Add</button>
  )
}

export default ContentTagAddButton