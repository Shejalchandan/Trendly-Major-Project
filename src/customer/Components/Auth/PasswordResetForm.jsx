// // PasswordResetForm.js
// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// const PasswordResetForm = () => {
//   const [token, setToken] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, newPassword }),
//       });
//       const data = await response.json();
//       alert(data); // Display success message to the user
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to reset password'); // Display error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Password Reset</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Token"
//           type="text"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           required
//         />
//         <TextField
//           label="New Password"
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained">Reset Password</Button>
//       </form>
//     </div>
//   );
// };

// export default PasswordResetForm;
