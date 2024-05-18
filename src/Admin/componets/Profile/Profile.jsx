import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {
  // Retrieve user profile from Redux store
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <strong>First Name:</strong> {user.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {user.lastName}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* <div>
        <strong>Password:</strong> {user.pass}
      </div> */}
      <div>
        <strong>Mobile:</strong> {user.mobile}
      </div>
    </div>
  );
}

export default ProfilePage;
