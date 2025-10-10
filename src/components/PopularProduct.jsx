import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const PopularProduct = () => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/products");
      return res.data;
    },
  });

  return (
    <div className="mt-15 px-3">
      <h1 className="font-semibold text-2xl">Most Popular Products</h1>

      {/* Popular Product Section */}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 ">
        {product?.map((p) => {
          return (
            <>
              <Link to={`/products/${p._id}`}>
                <div className="border rounded-lg border-gray-200 h-[17rem] hover:h-[20rem] transition-all duration-300 p-3 relative overflow-hidden group">
                  <img
                    src={p.thumbnail}
                    alt=""
                    className="w-full h-35 object-contain mb-2"
                  />
                  <span className="text-gray-500 ">{p.category}</span>
                  <h3 className="text-xl font-semibold ">{p.name}</h3>
                  <p className="text-blue-500">${p.price}</p>

                  <button
                    className="flex items-center gap-2 btn bg-blue-500 text-white w-full mt-2 
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
               transition-all duration-300 ease-in-out"
                  >
                    <ShoppingCart /> Add To Cart
                  </button>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProduct;
