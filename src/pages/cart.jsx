import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
  calculateTotals, // 👈 مهم
} from "../slice/cart";

import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // 🟢 حساب الإجمالي عند تحميل الصفحة أو عند تغيير الـ cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        🛒 <span className="text-[#35AFA0]">Shopping Cart</span>
      </h2>

      {cartItems.length === 0 ? (
        <div
          className="text-center bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative"
          role="alert"
        >
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => {
              const price = Number(item.price);
              const discountValue = item.discount
                ? Number(item.discount.replace("%", "")) / 100
                : 0;
              const finalPrice = price - price * discountValue;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white border rounded-lg shadow-sm p-4"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm">
                        {item.discount ? (
                          <span className="flex items-center gap-2">
                            <span className="text-red-600 font-semibold">
                              ${finalPrice.toFixed(2)}
                            </span>
                            <span className="text-gray-500 line-through">
                              ${price.toFixed(2)}
                            </span>
                          </span>
                        ) : (
                          <span className="text-gray-800">
                            ${price.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#35AFA0] hover:bg-[#35AFA8] text-white transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaRegTrashAlt size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Total Price */}
          <div className="mt-8 flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800">
              Total: ${totalAmount.toFixed(2)}
            </h3>
            <div className="flex items-center gap-4">
              <Link
                to="/checkout"
                className="bg-[#35AFA0] hover:bg-[#35AFA8] text-white py-2 px-6 rounded-lg shadow transition"
              >
                Checkout
              </Link>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg shadow transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
