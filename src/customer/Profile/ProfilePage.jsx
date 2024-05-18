import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { auth } = useSelector((store) => store);
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "40px" }}>Profile Details</h1>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <table>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", paddingRight: "20px" }}>First Name:</td>
              <td>{auth.user?.firstName}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", paddingRight: "20px" }}>Last Name:</td>
              <td>{auth.user?.lastName}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", paddingRight: "20px" }}>Email:</td>
              <td>{auth.user?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;

