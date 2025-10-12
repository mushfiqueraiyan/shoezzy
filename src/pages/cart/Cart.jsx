import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item._id] = 1;
      return acc;
    }, {})
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart!");
  };

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => {
      const newQty = prev[id] - 1;
      return { ...prev, [id]: newQty < 1 ? 1 : newQty }; // minimum 1
    });
  };

  const totalPrice = cartItems
    .reduce(
      (total, item) => total + item.price * (quantities[item._id] || 1),
      0
    )
    .toFixed(2);

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 text-2xl">Your cart is empty</h2>;
  }

  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Subtotal</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const qty = quantities[item._id] || 1;
                const subtotal = (item.price * qty).toFixed(2);

                return (
                  <tr
                    key={item._id}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="font-medium">{item.name}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{item.category}</td>
                    <td className="py-3 px-4 text-red-600 font-semibold">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <button
                        onClick={() => handleDecrease(item._id)}
                        className="p-2 bg-gray-300"
                      >
                        -
                      </button>
                      {qty}
                      <button
                        onClick={() => handleIncrease(item._id)}
                        className="p-2 bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-3 px-4 font-semibold">${subtotal}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col justify-end">
          <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
          <button
            onClick={() => navigate("/checkout", { state: { quantities } })}
            className="mt-4 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
