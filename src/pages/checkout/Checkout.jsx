import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { clearCart } from "../../store/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const location = useLocation();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const onSubmit = async (data) => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      customer: data,
      products: cartItems.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      total: totalPrice,
      createdAt: new Date(),
    };

    try {
      const res = await axios.post("http://localhost:3000/orders", orderData);

      if (res.status === 200 || res.status === 201) {
        toast.success("Order placed successfully!");
        reset();
        dispatch(clearCart());
      } else {
        toast.error("Failed to place order");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900">
          Checkout
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 🛒 Cart Summary */}
          <div className="md:col-span-1 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Your Items
            </h2>

            <div className="space-y-6">
              {cartItems.map((item) => {
                const subtotal = (item.price * item.quantity).toFixed(2);

                return (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b border-gray-200 pb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl border"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{item.category}</p>
                        <p className="text-green-600 font-medium mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">
                        Qty:{" "}
                        <span className="font-semibold">{item.quantity}</span>
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        ${subtotal}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-8">
              <h2 className="text-xl font-semibold text-gray-700">Subtotal</h2>
              <span className="text-2xl font-bold text-gray-900">
                ${totalPrice}
              </span>
            </div>
          </div>

          {/* 🧾 Checkout Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white col-span-2 shadow-lg rounded-2xl p-6 border border-gray-100 space-y-5 h-fit"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-3">
              Billing Details
            </h2>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <textarea
                placeholder="123 Street, City, Country"
                {...register("address", { required: "Address is required" })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
            >
              Place Order (${totalPrice})
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
