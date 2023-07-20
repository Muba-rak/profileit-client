import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  const content = token ? <Outlet /> : <Navigate to="/login" replace />;
  return content;
};

export default Private;
