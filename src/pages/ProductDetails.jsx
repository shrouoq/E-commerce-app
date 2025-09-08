import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RelatedProductsSlider from "../components/productsslider/RelatedProductsSlider";
import { BsBasket } from "react-icons/bs";
import { addToCart } from "../slice/cart";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.DataSlice);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [count, setCount] = useState(1);

  const [selectedItem, setSelectedItem] = useState({});
  const [imgSrc, setImgSrc] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  //  Check if item already in cart
  const isInCart = cartItems.some((item) => item.id === selectedItem?.id);

  const handelGoBack = () => {
    navigate("/shopping");
  };

  useEffect(() => {
    if (param.productId && state.data.length > 0) {
      const selectedItemm = state.data.find(
        (product) => product.id === +param.productId
      );
      setSelectedItem(selectedItemm);
      setImgSrc(selectedItemm?.image2 || "");
    }
  }, [param.productId, state.data]);

  //  Add to cart
  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart({ ...selectedItem, quantity: count }));
    }
  };

  useEffect(() => {
    if (selectedItem) {
      setImgSrc(selectedItem.image2);
    }
  }, [selectedItem]);

  return (
    <div className="w-full h-screen z-50 fixed bg-transparent top-0 bottom-0 right-0 flex justify-center items-center">
      <div className="overLay bg-black/70 absolute w-full h-full"></div>

      <div className="bg-white w-[80%] h-auto max-h-[500px] overflow-y-auto z-50 p-5">
        <div className="product-box flex gap-5 w-full justify-center relative max-lg:flex-col ">
          <div className="picture-box flex-1 flex justify-center gap-2">
            <div className="small-pics flex flex-col gap-2 max-xs:hidden">
              <div className="w-[130px] h-[130px] border-[1px]  border-solid border-borderColor rounded-[5px] p-2">
                <img
                  src={selectedItem.image2}
                  alt="pic2"
                  className="w-full h-full"
                  onClick={() => setImgSrc(selectedItem.image2)}
                />
              </div>

              <div className="w-[130px] h-[130px] border-[1px]  border-solid border-borderColor rounded-[5px] p-2">
                <img
                  src={selectedItem.image3}
                  alt="pic2"
                  className="w-full h-full"
                  onClick={() => setImgSrc(selectedItem.image3)}
                />
              </div>

              <div className="w-[130px] h-[130px] border-[1px]  border-solid border-borderColor rounded-[5px] p-2">
                <img
                  src={selectedItem.image4}
                  alt="pic3"
                  className="w-full h-full border-[1px]  border-solid border-borderColor rounded-[5px]"
                  onClick={() => setImgSrc(selectedItem.image4)}
                />
              </div>
            </div>

            <div className="banner w-[400px] flex justify-center items-center h-[400px] border-[1px] border-solid border-borderColor rounded-[5px] overflow-hidden">
              <img
                src={imgSrc}
                alt="banner"
                className=" w-[170px] h-[170px] object-contain"
              />
            </div>
          </div>

          <div className="data flex-1 flex flex-col gap-3">
            <p className="title font-semibold capitalize text-[20px]">
              {selectedItem.title}
            </p>

            <div className="price">
              <span className="font-bold text-[18px] text-darkRed ">
                ${selectedItem.price}
              </span>
            </div>

            <div className="size">
              <span className="block capitalize text-sm mb-2">
                available in:
              </span>

              <div className="size-box flex gap-2">
                <span className="p-2 border-[1px] border-solid border-borderColor rounded-[5px] text-xs capitalize font-medium inline-block">
                  small
                </span>
                <span className="p-2 border-[1px] border-solid border-borderColor rounded-[5px] text-xs capitalize font-medium inline-block">
                  mediem
                </span>
                <span className="p-2 border-[1px] border-solid border-borderColor rounded-[5px] text-xs capitalize font-medium inline-block">
                  large
                </span>
              </div>
            </div>

            {/* =====inCrease & deCrease count===== */}
            {!isInCart && (
              <div className="num w-full bg-borderColor rounded-[5px] py-2 flex items-center">
                <button
                  className="w-1/4 text-md"
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <span className="w-2/4 text-center text-md">{count}</span>
                <button
                  className="w-1/4 text-md"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className={`w-full text-md font-medium rounded-[5px] py-2 capitalize flex justify-center items-center gap-3
              ${
                isInCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
              disabled={isInCart}
            >
              <BsBasket />{" "}
              <span>{isInCart ? "Item in Cart" : "Add to Cart"}</span>
            </button>

            <div className="wish flex gap-3">
              <button className="flex items-center gap-2 border-[1px] border-solid border-borderColor rounded-[5px] p-2 text-xs font-medium capitalize">
                <FaRegHeart /> wish list
              </button>
              <button className="flex items-center gap-2 border-[1px] border-solid border-borderColor rounded-[5px] p-2 text-xs font-medium capitalize">
                <FaShare /> share
              </button>
            </div>

            <div className="tags flex gap-2 items-center flex-wrap ">
              <span className="min-w[85px] w-fit text-[12px] font-medium ">
                <IoPricetagsOutline className="inline-block" /> tags:
              </span>
              <span className="min-w[85px] w-fit border-[1px] border-solid border-borderColor text-xs capitalize inline-block p-2 rounded-[5px] font-semibold">
                fast food
              </span>
              <span className="min-w[85px] w-fit border-[1px] border-solid border-borderColor text-xs capitalize inline-block p-2 rounded-[5px] font-semibold">
                orgsnic corn
              </span>
              <span className="min-w[85px] w-fit border-[1px] border-solid border-borderColor text-xs capitalize inline-block p-2 rounded-[5px] font-semibold">
                flavourd
              </span>
              <span className="min-w[85px] w-fit border-[1px] border-solid border-borderColor text-xs capitalize inline-block p-2 rounded-[5px] font-semibold">
                dry food
              </span>
            </div>

            <div className="des">
              <h5 className="capitalize font-semibold text-md">
                product details :
              </h5>
              <p className="capitalize text-xs font-normal text-lightGray">
                {selectedItem.description}
              </p>
            </div>
          </div>

          <AiOutlineClose
            className="cursor-pointer absolute right-3 top-3 text-[30px] p-1 shadow text-lightGray border-[1px] border-solid border-borderColor rounded-full"
            onClick={handelGoBack}
          />
        </div>

        <div className="related-products-slider mt-8">
          <p className="text-[22px] font-bold capitalize">Related products</p>
          <RelatedProductsSlider category={selectedItem.category} />
        </div>
      </div>
    </div>
  );
}
