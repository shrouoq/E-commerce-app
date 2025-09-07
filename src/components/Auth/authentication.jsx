import { createContext, useContext, useEffect, useState } from "react";
import {supabase} from './supabaseClient.jsx'
let AuthContext = createContext()

export const AuthContextProvider = ({children})=> {
    let [session, setSession] = useState(undefined);
    //signUp
    let signUpNewUser = async(userName, email,password,)=>{ // need to pass this function into SignUp component
        let{data, error} = await supabase.auth.signUp({
             email, password,
            options: {
            data: { userName }
            }})
        if(error) console.log('error signing up: ', error)
            else if(data) {
                console.log('sign up data: ', data)
                setSession(data.session)
                return data
            }
    }
    useEffect(()=>{
         supabase.auth.getSession().then(({ data }) => {
    setSession(data.session);
  });

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

   return () => {
    authListener.subscription.unsubscribe();
  };
        
    }, [])
//signIn
const signInUser = async(email, password)=>{
    try{
        let {data, error} = await supabase.auth.signInWithPassword({email, password})
    if(error) {
        console.log('error signing in: ', error)
        return null
    }
    else if(data) {
        console.log('sign in data: ', data)
        setSession(data.session)
        return data
    }
}
    catch(err){
        console.log(err)
    return null
}
    }

// signOut
const signOutUser = async()=>{
    let {error} = await supabase.auth.signOut()
    if(error) console.log('error signing out: ', error)
    else setSession(null)
}
return(
<>
    <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOutUser}}>
        {children}
    </AuthContext.Provider>
</>
)
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}

