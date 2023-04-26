import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { content } from "../../types/Type";
import Content from "./Content";

const ContentList = () => {
  const contents = useSelector((state: RootState) => state.contents.contents);

  return (
    <>
      {contents.map((item: content, i: number) => {
        return <Content item={item} key={i} />;
      })}
    </>
  );
};

export default ContentList;
