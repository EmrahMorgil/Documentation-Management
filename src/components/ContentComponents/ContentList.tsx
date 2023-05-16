import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IContentList, content } from "../../types/Type";
import Content from "./Content";
import { setContents } from "../../redux/contents/contentsSlice";


const ContentList: React.FC<IContentList> = ({projectId}) => {

  const contents = useSelector((state: RootState) => state.contents.contents);
  const [filterValues, setFilterValues] = useState({ contentName:"", createdDate: "", updatedDate: "",contentTags: ""});
  const [contentNameSorted, setContentNameSorted] = useState({ sorted: "contentName", isReversed: false })
  const [createdDateSorted, setCreatedDateSorted] = useState({sorted: "createdDate", isReversed: false});
  const [updatedDateSorted, setUpdatedDateSorted] = useState({sorted: "updatedDate", isReversed: false});
  const [versionSorted, setVersionSorted] = useState({sorted: "version", isReversed: false});
  const dispatch = useDispatch();

  const handleChange = (e: any) =>{
    setFilterValues({...filterValues, [e.target.name]: e.target.value});
  }


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
      if (contentNameSorted.isReversed) {
        return b.contentName.localeCompare(a.contentName);
      }
      return a.contentName.localeCompare(b.contentName);
    });
  
     dispatch(setContents(sortedData));
     setContentNameSorted({ sorted: "contentName", isReversed: !contentNameSorted.isReversed });
  };

  const sortByCreatedDate = () => {


    const sortedData = [...contents].sort((a, b)=>{
      let dateA: any = new Date(a.createdDate.split("/").reverse().join("/"));
      let dateB: any = new Date(b.createdDate.split("/").reverse().join("/"));
      if(createdDateSorted.isReversed)
      {
        return dateA - dateB;
      }
      return dateB - dateA;
    });

    dispatch(setContents(sortedData));
    setCreatedDateSorted({sorted: "createdDate", isReversed: !createdDateSorted.isReversed});

  };


  const sortByUpdatedDate = () => {

    const sortedData = [...contents].sort((a, b)=>{
      let dateA: any = new Date(a.updatedDate.split("/").reverse().join("/"));
      let dateB: any = new Date(b.updatedDate.split("/").reverse().join("/"));
      if(updatedDateSorted.isReversed)
      {
        return dateA - dateB;
      }
      return dateB - dateA;
    });

    dispatch(setContents(sortedData));
    setUpdatedDateSorted({sorted: "updatedDate", isReversed: !updatedDateSorted.isReversed});

  };


  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <th scope="col"></th>
          <th scope="col"><input placeholder="Search..." name="contentName" size={7} onChange={handleChange}/></th>
          <th scope="col"><input placeholder="Search Date" name="createdDate" size={7} onChange={handleChange}/></th>
          <th scope="col"><input placeholder="Search Date" name="updatedDate" size={7} onChange={handleChange}/></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"><input placeholder="Tag Search" name="contentTags" size={7} onChange={handleChange}/></th>
        </thead>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th onClick={sortByContentName} scope="col">Content Name
            {contentNameSorted.sorted ? (contentNameSorted.isReversed ? "▲" : "▼"):null}
             </th>
            <th onClick={sortByCreatedDate} scope="col">Created Date
            {createdDateSorted.sorted ? (createdDateSorted.isReversed ? "▲" : "▼"):null}
            </th>
            <th onClick={sortByUpdatedDate} scope="col">Updated Date
            {updatedDateSorted.sorted ? (updatedDateSorted.isReversed ? "▲" : "▼"):null}
            </th>
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
            if(content.contentTags.toLowerCase().includes(filterValues.contentTags.toLowerCase())
            && content.contentName.toLowerCase().includes(filterValues.contentName.toLowerCase())
            && content.createdDate.includes(filterValues.createdDate.toLowerCase())
            && content.updatedDate.includes(filterValues.updatedDate.toLowerCase()))
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
