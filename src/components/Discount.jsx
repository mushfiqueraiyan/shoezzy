import React from "react";
import ad from "../assets/ad-min.jpg";
import { ShoppingCart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/axiosSecure";
import { Link } from "react-router";

const Discount = () => {
  const axiosSecure = useAxiosSecure();

  const { data: discountProduct, isLoading } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  const discountFilter =
    discountProduct?.filter((dis) => dis.discount && dis.discount > 0) || [];

  console.log(discountFilter);

  return (
    <div className="flex flex-col px-3 md:flex-col lg:flex-row mt-15 gap-10">
      <div>
        <img className="hidden md:hidden lg:flex" src={ad} alt="" />
      </div>

      <div>
        <h1 className="font-semibold text-2xl">Discount Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 ">
          {discountFilter.map((prod) => {
            return (
              <>
                <Link
                  to={`/products/${prod._id}`}
                  key={prod._id}
                  className="text-center cursor-pointer h-[20rem] hover:h-[22rem] transition-all duration-300 p-3 relative overflow-hidden group"
                >
                  <img
                    src={prod.thumbnail}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                  <span className="text-gray-500">{prod.category}</span>
                  <h3 className="text-xl font-semibold my-1">{prod.name}</h3>
                  <p className="text-blue-500">${prod.price}</p>

                  <button
                    className="flex items-center gap-2 btn bg-blue-500 text-white w-full mt-2 
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
               transition-all duration-300 ease-in-out"
                  >
                    <ShoppingCart /> Add To Cart
                  </button>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discount;
