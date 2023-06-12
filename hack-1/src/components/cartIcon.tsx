import React from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// Cart Icon on Header
const Cart = () => {

  const cartValue = useSelector(
    (state:RootState) => state.cart.totalQty
)

  return (
    <div className="relative">
      <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 duration-300">
        <CgShoppingCart className="text-gray-800 text-2xl" />
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
          <span className="text-white text-xs font-bold">{cartValue}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
