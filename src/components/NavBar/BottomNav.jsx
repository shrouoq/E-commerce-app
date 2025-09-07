import Logo from "../../assets/logo-pic.jpeg";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";

import SideNav from "../sideBar/SideNav";
import NavLinks from "../NavLinks";
import Categories from "./categories";
import { calculateTotals } from "../../slice/cart";

export default function BottomNav() {
  const { data } = useSelector((state) => state.DataSlice);
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [Fixed, setFixed] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  let handelCategoriesMenu = useCallback(() => {
    setOpenCategories(prev => !prev);
  },[])

  let handelCloseNav = useCallback(() => {
    setOpenNav(false);
  },[])

  let handelOpenNav = useCallback(()=> {
    setOpenNav(true);
  },[])

  let handelChange = useCallback((e) =>{
      setQuery(e.target.value);
  },[])

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-bottom");
      let top = window.scrollY;
      if (top <= 36) {
        setFixed(false);
        nav.classList.remove("fixed", "shadow");
      } else {
        setFixed(true);
        nav.classList.add("fixed", "shadow");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSearchedData([]);
    } else {
      let filterdData = data.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });

      setSearchedData(filterdData);
    }
  }, [query, data]);

  return (
    <>
      <div
        className={`max-lg:hidden z-50 nav-bottom transition-all duration-200 ease-in-out ${
          Fixed ? "fixed top-0 right-0 left-0 w-full" : "relative"
        } `}
      >
        <div className="top-box h-10 text-mainColor border-b-[1px] border-solid border-b-borderColor">
          <div className="container h-full mx-auto flex justify-between items-center text-xs font-normal">
            <div className="top-box-links">
              <NavLink to="about" className="pr-3 capitalize">
                about us
              </NavLink>
              <NavLink to="/compare" className="pr-3 capitaliz">
                Compare
              </NavLink>
              <NavLink to="/wish" className="pr-3 capitalize">
                Wish list
              </NavLink>
            </div>

            <div className="top-box-content flex capitalize">
              <div className="box px-3 flex items-center gap-2">
                <FaHandSparkles className="w-4 h-4" />
                <p>100% secure delivery without contacting the couier</p>
              </div>

              <div className="box px-3 border-x-[1px] border-x-borderColor border-solid">
                <p>
                  need help?call us:{" "}
                  <span className="text-primary">+0020 500</span>
                </p>
              </div>

              <div className="box pl-3">
                <select name="lang-box" className="capitalize">
                  <option value="english" className="capitalize">
                    english
                  </option>
                  <option value="arabic" className="capitalize">
                    arabic
                  </option>
                </select>

                <select name="pay-box" className="capitalize">
                  <option value="usd" className="capitalize">
                    usd
                  </option>
                  <option value="ُEGP" className="capitalize">
                    EGP
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-box h-[60px]">
          <div className="container mx-auto h-full flex items-center justify-between">
            <NavLink to="/" className="w-[130px] overflow-hidden">
              <img src={Logo} alt="logo-pic" className="w-[200px]" />
            </NavLink>

            <div className="search-box relative bg-borderColor w-[50%] h-[40px] rounded-[7px] flex items-center px-3">
              <form className="flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={handelChange}
                  placeholder="search for products,fruit,meat,eggs,etc"
                  className="bg-transparent placeholder:capitalize placeholder:text-xs w-full border-none outline-none"
                />
              </form>
              <AiOutlineSearch className="text-xl text-mainColor" />

              {searchedData.length !== 0 && (
                <div className="search-menu absolute overflow-y-auto left-0 top-[50px] z-50 h-auto max-h-[300px] w-full p-4 bg-white text-black rounded-[5px] shadow border-[1px] border-solid border-borderColor">
                  <ul className="flex flex-col gap-3">
                    {searchedData.map((product, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() =>
                            navigate(`productDetails/${product.id}`)
                          }
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt="pic"
                            className="w-[40px] h-[40px] rounded-[2px]"
                          />
                          <p className="tit dosis text-sm font-semibold capitalize text-black">
                            {product.title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="user-box flex items-center gap-4">
              {/* ===========signIn======== */}
              <div className="log-In-Out">
                <NavLink
                  to="signUp"
                  className="In w-[42px] h-[42px] border-[1px] border-solid border-borderColor rounded-full flex justify-center items-center cursor-pointer"
                >
                  <BiUser className="text-xl text-mainColor" />
                </NavLink>
              </div>

              {/* ==========products total Price======== */}
              <div className="totalPrice">
                <p className="dosis text-mainColor font-semibold text-base">
                  $
                  <span className="total">{totalAmount.toFixed(2) || 0.0}</span>
                </p>
              </div>

              <Link
                to="/cart"
                className="shopping-icon w-[42px] h-[42px] rounded-full bg-lightRed relative flex justify-center items-center"
              >
                <BsBasket3 className="text-darkRed" />
                <span className="items-num absolute h-[17px] w-[17px] rounded-full bg-darkRed text-textWhite text-[10px] font-normal leading-[15px] text-center top-[-5px] right-0">
                  {cartItems.length > 0 ? cartItems.length : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom-box border-b-[1px] border-solid border-b-borderColor h-[63px]">
          <div className="container mx-auto flex h-full justify-between items-center relative">
            <div
              className="categories text-[15px] font-semibold flex items-center rounded-[40px] px-5 relative h-[50px] bg-primary text-textWhite cursor-pointer transition-all duration-500 ease-linear"
              onClick={() => handelCategoriesMenu()}
            >
              <HiBars3 className="text-xl" />
              <span className="dosis pl-2 pr-5 uppercase">All categories</span>
              {openCategories ? (
                <MdKeyboardArrowDown className="text-xl" />
              ) : (
                <MdKeyboardArrowUp className="text-xl" />
              )}
              <span className="dosis absolute bg-borderColor text-mainColor px-4  w-fit font-semibold text-[10px] uppercase  rounded-3xl bottom-[-2px] left-[45px]">
                total 50 products
              </span>
            </div>

            <Categories open={openCategories} />

            {/* ========links======== */}
            <div className="bottom-box-links flex uppercase text-mainColor font-semibold text-[14px]">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============Mobile Nav============ */}
      <div
        className={`nav-bottom z-50 lg:hidden py-5 border-b-[1px] border-solid border-b-borderColor ${
          Fixed ? "fixed top-0 right-0 left-0 w-full" : "relative"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <button
            className="menu-btn cursor-pointer border-[1px] border-solid border-borderColor rounded-[5px] text-lightGray p-2"
            onClick={handelOpenNav}
          >
            <FaBars />
          </button>

          <div className="logo flex justify-center items-center">
            <NavLink to="/" className="w-[130px] overflow-hidden">
              <img src={Logo} alt="logo-pic" className="w-[200px]" />
            </NavLink>
          </div>

          <div className="user-box flex items-center gap-4">
            <div className="log-In-Out">
              <div className="In w-[42px] h-[42px] border-[1px] border-solid border-borderColor rounded-full flex justify-center items-center cursor-pointer">
                <BiUser className="text-xl text-mainColor" />
              </div>
            </div>

            <Link
              to="/cart"
              className="shopping-icon w-[42px] h-[42px] rounded-full bg-lightRed relative flex justify-center items-center"
            >
              <BsBasket3 className="text-darkRed" />
              <span className="items-num absolute h-[17px] w-[17px] rounded-full bg-darkRed text-textWhite text-[10px] font-normal leading-[15px] text-center top-[-5px] right-0">
                {cartItems.length > 0 ? cartItems.length : 0}
              </span>
            </Link>
          </div>

          {/* ========sideBar Nav links======== */}
          <SideNav openNav={openNav} handelClose={handelCloseNav} />
        </div>
      </div>
    </>
  );
}
