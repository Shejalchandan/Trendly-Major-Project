// VirtualTryOnForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

function VirtualTryOnForm({ productId }) {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('productId', productId);

      const response = await axios.post('/api/users/try-on', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setProcessedImage(URL.createObjectURL(response.data));
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to try on clothes. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h3>Upload Your Image:</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} accept="image/*" required />
        <button type="submit">Try On</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {processedImage && <img src={processedImage} alt="Virtual Try-On" />}
    </div>
  );
}

export default VirtualTryOnForm;
