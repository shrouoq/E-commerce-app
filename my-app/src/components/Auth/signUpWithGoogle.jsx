  import { useState, useEffect } from 'react'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

import { supabase } from './supabaseClient.jsx'
  export default function SignUpWithGoogle() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (<Auth supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa, style: {
      button: { 
        fontSize: '20px',       
        padding: '10px',   
        borderRadius: '12px' ,
        width:'50%',
        marginLeft:'25%',
        marginTop:'10px'
      }
    } }}
         providers={['google']}
         onlyThirdPartyProviders />)
    }
    else {
      return (<div>Logged in!</div>)
    }
  }