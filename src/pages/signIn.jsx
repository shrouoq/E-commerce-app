import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/Auth/authentication.jsx";
import { useState } from "react";
import SignUpWithGoogle from "../components/Auth/signUpWithGoogle.jsx"
import toast from "react-hot-toast";


export default function SignIn() {
  let{session, signInUser} = UserAuth()
  let[loading, setLoading] = useState(false)
  let[userSigndIn, setuserSigndIn] = useState({
    email:'', password:''})
  let navigate = useNavigate()
   let handleChange = (e)=>{
    setuserSigndIn({...userSigndIn, [e.target.name]:e.target.value})
   }
   let handleSignIn = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
        let result = await signInUser(userSigndIn.email, userSigndIn.password)
        if(result) {
            toast.success(`Welcome ${session.user.user_metadata.full_name || session.user.user_metadata.userName}`)
            navigate('/')
        }
    }
    catch(err){console.log(err)}
    finally{setLoading(false)}
}

  return (
<div className="max-w-xl mx-auto mt-5 mb-5 shadow-xl border-[1px] border-solid border-borderColor ring-1 ring-gray-900/10 rounded-xl sm:px-6 lg:px-8 lg:py-8 w-full">
  <form className=" " onSubmit={handleSignIn}>
        <div className="flex flex-col @md:flex-row dosis">

            <p className=" mt-3 text-3xl font-bold text-center">Sign In</p>

            <div className=" gap-y-8 sm:grid-cols-6 flex flex-col justify-center p-8">

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-lg capitalize font-medium text-gray-900">Email address <span className="text-darkRed">*</span></label>
                <div className="mt-2">
                  <input id="email" type="email" name="email" onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                      border-[1px] border-solid border-borderColor
                      focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none
                      sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="last-name" className="block text-lg capitalize font-medium text-gray-900">
                  Password <span className="text-darkRed">*</span>
                </label>
                <div className="mt-2">
                  <input id="password" type="password" name="password" onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  border-[1px] border-solid border-borderColor
                  focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none
                  sm:text-sm leading-6"/>

                </div>
              </div>

              <div className=" flex items-center justify-center">
                <button type="submit" 
                  className="w-50 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-md
                  hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign In
                </button>
              </div>

              <p className=" text-center">New account? <Link className="text-green-600 font-bold" to={'/signup'}>Sign Up</Link></p>
            
            </div>
                  
        </div>

        
      </form>
      <p className="text-center font-bold text-lg">OR</p>
      {/* Install  npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared*/}
      <SignUpWithGoogle />

</div>
  );
}
