import React from "react";
// import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileBox = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  // const { user: currentUser } = useSelector((state) => state.authSlice);
  console.log(currentUser);
  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Profile</strong>
        </h3>
        <p>
          <strong>Id:</strong> {currentUser.id}
          {/* <strong>Id:</strong> {currentUser.loginId} */}
        </p>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      {/* <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default ProfileBox;
