import React from "react";
import "./HomeProductSection.css";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      //carousel image border is set here
      className="responsive-container cursor-pointer flex flex-col items-center bg-grey border border-white mx-3  mb-4  overflow-hidden max-w-xs"
      // rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 
      
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
