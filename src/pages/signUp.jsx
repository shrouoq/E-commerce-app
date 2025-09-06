import { useState } from "react";
import { supabase } from "../components/Auth/supabaseClient.jsx";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/Auth/authentication.jsx";
import toast from "react-hot-toast";
export default function SignUp() {
  let { session, signUpNewUser, signInUser, signOutUser } = UserAuth();
  // console.log('session in signUp: ', session)
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  let handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await signUpNewUser(
        userDetails.userName,
        userDetails.email,
        userDetails.password
      );
      if (result) {
        toast.success(`Welcome ${session.user.user_metadata.userName}`);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 mb-5 max-w-4xl mx-auto shadow-2xl ring-1 ring-gray-900/10 rounded-xl sm:px-6 lg:px-8 lg:py-8 w-full">
      <form className=" " onSubmit={handleSignIn}>
        <div className="flex flex-col @md:flex-row">
          <div className="">
            <p className=" mt-3 text-6xl font-bold text-center">Sign Up</p>
            <div className="gap-y-8 sm:grid-cols-6 flex flex-col justify-center p-8">
              <div className="sm:col-span-4 ">
                <label
                  htmlFor="userName"
                  className="block text-2xl font-medium text-gray-900"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    id="userName"
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    autoFocus
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                      border border-gray-900 placeholder:text-gray-400 
                      focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none
                      sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-2xl font-medium text-gray-900"
                >
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                      border border-gray-900 placeholder:text-gray-400 
                      focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none
                      sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="last-name"
                  className="block text-2xl font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                      border border-gray-900 placeholder:text-gray-400 
                      focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none
                      sm:text-sm leading-6"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="w-50% rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs 
            hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign Up
                </button>
              </div>
              <p className=" text-center">
                Already have account?{" "}
                <Link className="text-green-600 font-bold" to={"/signin"}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
