import React, { useState } from 'react';

const SideCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleCart}
        className="m-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Cart
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button
            onClick={toggleCart}
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
          <p className="mt-2">Your cart items will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
