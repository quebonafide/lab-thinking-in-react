import React from 'react';

const ProductRow = (product) => {
  return (
    <div key={product.id}>
      {product.name} {product.price}
    </div>
  );
};

export default ProductRow;
