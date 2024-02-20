"use client"
import React, { useState } from 'react';

interface ProductQuantityProps {
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange?.(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange?.(quantity - 1);
    }
  };

  return (
    <div className="product-quantity">
      <button onClick={handleDecrement}>-</button>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ProductQuantity;
