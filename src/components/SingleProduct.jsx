import { ArrowLeftSquareIcon } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const product = useLoaderData();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!");
  };

  const isInCart = cartItems.some((item) => item._id === product._id);

  return (
    <div>
      <span onClick={() => navigate("/")} className="cursor-pointer">
        <ArrowLeftSquareIcon color="#1055C9" size={30} className="mt-5" />
      </span>
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center ">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="rounded-lg shadow-lg max-w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">Category: {product.category}</p>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-red-600">
              {" "}
              <span className="text-gray-500 ">${product.price}</span>
            </span>
            {product.discount > 0 && (
              <span className="text-gray-500 bg-blue-500 text-white p-2 rounded-4xl">
                {product.discount}% discount
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {isInCart ? (
            <button
              onClick={() => toast.error("Already added to the cart")}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Already added to the cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
