import React from 'react'

const CardCategories = ({ imgSrc, productName }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <img
        src={imgSrc}
        alt={productName}
        className="w-10 h-10"
      />
      <p className="text-sm font-medium">{productName}</p>
    </div>
  );
};

export default CardCategories;
