import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slice/cart";
import { Link } from "react-router-dom";

const ProductCard = ({ product , wid='' , tex=''}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const price = Number(product.price) || 0;
  const discountValue = product.discount
    ? Number(String(product.discount).replace("%", "")) / 100
    : 0;
  const finalPrice = price - price * discountValue;

  // check if product is already in cart
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className={`${wid} group relative bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full`}>
      {/* ===== Discount Badge ===== */}
      {product.discount && (
        <span className="absolute z-10 top-2 left-2 bg-gray-100 py-1 px-2 text-green-600 text-xs font-medium">
          {product.discount} OFF
        </span>
      )}

      {/* ===== Product Image ===== */}
      <Link to={`/productDetails/${product.id}`}>
        <div className="h-48 flex items-center justify-center">
          <img
            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* ===== Product Details ===== */}
        <div className="flex flex-col flex-grow p-4">
          <h3 className="font-medium text-gray-800 mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

          {/* ===== Price ===== */}
          <div className="mb-4">
            <div className={`flex ${tex} items-center w-full gap-2`}>
              <span className="text-red-600 font-semibold">
                ${finalPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* ===== Add to Cart / In Cart ===== */}
          <div className="mt-auto w-full flex items-center justify-center">
            {inCart ? (
              <button
                disabled
                className="mt-auto w-full bg-gray-400 text-white py-1 rounded-md cursor-not-allowed"
              >
                In Cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-auto w-full bg-[#35AFA0] hover:bg-[#2e8b7d] text-white py-1 rounded-md transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
