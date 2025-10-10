import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const [qtn, setQtn] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart!");
  };

  const handleIncrease = () => {
    setQtn(qtn + 1);
  };
  const handleDecrease = () => {
    setQtn(qtn - 1);
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 text-2xl">Your cart is empty</h2>;
  }

  return (
    <div>
      {" "}
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
                const subtotal = item.price.toFixed(2) * qtn;
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
                    <td className="py-3 px-4  gap-3">
                      {" "}
                      <button
                        onClick={handleDecrease}
                        className="p-2 bg-gray-300 mr-4"
                      >
                        -
                      </button>{" "}
                      {qtn}{" "}
                      <button
                        onClick={handleIncrease}
                        className="p-2 bg-gray-300 ml-4"
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

        <div className="mt-6 flex justify-end">
          <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
