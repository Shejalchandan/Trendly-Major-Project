// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// const ForgotPasswordForm = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       alert(data); // Display success message to the user
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to send password reset token'); // Display error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained">Send Reset Token</Button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPasswordForm;
