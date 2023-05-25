import React from 'react'
import { CgShoppingCart } from 'react-icons/cg';

const Cart = () => {
    let counter = 2
  return (
    <div className="relative">
      <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 duration-300">
        <CgShoppingCart className="text-gray-800 text-2xl" />
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
          <span className="text-white text-xs font-bold">{counter}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
