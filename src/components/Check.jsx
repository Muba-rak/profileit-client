import React from "react";
import { Navigate } from "react-router-dom";

const Check = () => {
  const user = false;
  // check for students or not
  return (
    <div> {user ? <Navigate to="/student" /> : <Navigate to="/others" />} </div>
  );
};

export default Check;
