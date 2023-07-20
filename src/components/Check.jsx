import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Check = () => {
  const [user, setUser] = useState(true);
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");

  return (
    <>
      {status === "student" ? (
        <Navigate to="/student" />
      ) : (
        <Navigate to="/others" />
      )}
    </>
  );
};

export default Check;
