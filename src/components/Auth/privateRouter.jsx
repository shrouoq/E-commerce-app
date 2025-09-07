//To prevent users from accessing certain routes without being authenticated

import { Navigate } from "react-router-dom"
import { UserAuth } from './authentication'

export default function PrivateRouter ({children}){

    let{session} = UserAuth()
    return(
        <>
            {session ? children: <Navigate to='/signUp' replace />}
        </>
    )
}
