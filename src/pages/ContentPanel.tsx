import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import AddContent from '../components/ContentComponents/AddContent';
import { useDispatch } from 'react-redux';
import { getContentsAsync } from '../services/contentService';
import ContentList from '../components/ContentComponents/ContentList';


const ContentPanel = () => {

    const dispatch = useDispatch();
    let {id} = useParams();

    useEffect(() => {
      dispatch(getContentsAsync(id));
    }, []);
    
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      <AddContent id={String(id)}/>
      <Link to="/projectpanel"><button className="btn btn-danger">Back</button></Link>
    </div>
    <ContentList />
    </>
  )
}

export default ContentPanel