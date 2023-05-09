import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { content } from "../../types/Type";
import Content from "./Content";
import { setContents } from "../../redux/contents/contentsSlice";


interface IContentList{
  projectId?: string;
}

const ContentList: React.FC<IContentList> = ({projectId}) => {
  const contents = useSelector((state: RootState) => state.contents.contents);
  const [tagFilter, setTagFilter] = useState("");

  const [contentSorted, setContentSorted] = useState({ sorted: "contentName", isReversed: false })
  const [versionSorted, setVersionSorted] = useState({sorted: "version", isReversed: false});
  const dispatch = useDispatch();



  const sortByVersionContent = () => {
    const sortedData = [...contents].sort((a, b) => {
      if (versionSorted.isReversed) {
        return a.version - b.version;
      }
      return b.version - a.version;
    });
  
    dispatch(setContents(sortedData));
    setVersionSorted({ sorted: "version", isReversed: !versionSorted.isReversed });
  };

  const sortByContentName = () => {
    const sortedData = [...contents].sort((a, b) => {
      if (contentSorted.isReversed) {
        return b.contentName.localeCompare(a.contentName);
      }
      return a.contentName.localeCompare(b.contentName);
    });
  
     dispatch(setContents(sortedData));
    setContentSorted({ sorted: "contentName", isReversed: !contentSorted.isReversed });
  };



  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"><input placeholder="Tag Search" size={7} onChange={(e)=>setTagFilter(e.target.value)}/></th>
        </thead>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th onClick={sortByContentName} scope="col">Content Name
            {contentSorted.sorted ? (contentSorted.isReversed ? "▲" : "▼"):null}
             </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th onClick={sortByVersionContent}  scope="col">Content Version
            {versionSorted.sorted ? (versionSorted.isReversed ? "▲" : "▼"):null}
             </th>
            <th scope="col">Content</th>
            <th scope="col">Content Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content: content, i: number) => {
            if(content.contentTags.toLowerCase().includes(tagFilter.toLowerCase()))
            {
              return <Content content={content} key={i} projectId={projectId}/>;  
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
