import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../store/cartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart!");
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 text-2xl">Your cart is empty</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
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
              const subtotal = (item.price * item.quantity).toFixed(2);

              return (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    {item.name}
                  </td>

                  <td className="py-3 px-4">{item.category}</td>

                  <td className="py-3 px-4 text-red-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </td>

                  <td className="py-3 px-4 flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQty(item._id))}
                      className="px-3 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>

                    {item.quantity}

                    <button
                      onClick={() => dispatch(increaseQty(item._id))}
                      className="px-3 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </td>

                  <td className="py-3 px-4 font-semibold">${subtotal}</td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
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

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
