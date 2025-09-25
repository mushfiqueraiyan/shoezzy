import { ShoppingCart } from "lucide-react";
import React from "react";

const PopularProduct = () => {
  return (
    <div className="mt-15 px-3">
      <h1 className="font-semibold text-2xl">Most Popular Products</h1>

      {/* Popular Product Section */}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 ">
        <div className="border rounded-lg border-gray-200 h-[17rem] hover:h-[20rem] transition-all duration-300 p-3 relative overflow-hidden group">
          <img
            src="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/4-min-300x300.jpg"
            alt=""
            className="w-full h-40 object-cover"
          />
          <span className="text-gray-500">Sports Shoe</span>
          <h3 className="text-xl font-semibold my-1">Nike Shorts Shoe 70</h3>
          <p className="text-blue-500">$60.05</p>

          <button
            className="flex items-center gap-2 btn bg-blue-500 text-white w-full mt-2 
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
               transition-all duration-300 ease-in-out"
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
        <div className="border rounded-lg border-gray-200 h-[17rem] hover:h-[20rem] transition-all duration-300 p-3 relative overflow-hidden group">
          <img
            src="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/1-min-300x300.jpg"
            alt=""
            className="w-full h-40 object-cover"
          />
          <span className="text-gray-500">Sports Shoe</span>
          <h3 className="text-xl font-semibold my-1">Nike Shorts Shoe 70</h3>
          <p className="text-blue-500">$60.05</p>

          <button
            className="flex items-center gap-2 btn bg-blue-500 text-white w-full mt-2 
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
               transition-all duration-300 ease-in-out"
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
