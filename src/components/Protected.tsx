import React from "react";
import { Navigate } from "react-router-dom";

interface IProtected{
    loggedIn: boolean,
    children: any,
} 

const Protected: React.FC<IProtected> = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
