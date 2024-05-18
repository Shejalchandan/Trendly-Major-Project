// ProductDetailsPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails'; // Assuming you have a ProductDetails component
import VirtualTryOnForm from './VirtualTryOnForm'; // Assuming you have a VirtualTryOnForm component

function ProductDetailsPage() {
  // Use useParams to get the productId from the URL
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <ProductDetails productId={productId} />
      <h2>Virtual Try-On</h2>
      <VirtualTryOnForm productId={productId} />
    </div>
  );
}

export default ProductDetailsPage;
