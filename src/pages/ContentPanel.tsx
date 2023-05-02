import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddContent from "../components/ContentComponents/AddContent";
import { useDispatch, useSelector } from "react-redux";
import { getContentsAsync } from "../services/contentService";
import ContentList from "../components/ContentComponents/ContentList";
import { RootState } from "../redux/store";
import Loading from "../components/Loading";

const ContentPanel = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const isLoading = useSelector((state: RootState) => state.contents.isLoading);
  const adminLoggedIn = useSelector((state:RootState)=>state.users.adminLoggedIn);

  useEffect(() => {
    dispatch(getContentsAsync(id));
  }, []);

  return (
    <>
      {isLoading === "loading" ? (
        <Loading />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px",
            }}
          >
            {adminLoggedIn && <AddContent id={String(id)} />}
            <Link to={adminLoggedIn ? "/projectpanel" : "/projects"}>
              <button className="btn btn-danger">Back</button>
            </Link>
          </div>
          <ContentList projectId={id}/>
        </>
      )}
    </>
  );
};

export default ContentPanel;
