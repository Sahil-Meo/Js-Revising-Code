import React from 'react'
import LoginForm from '../../Components/Forms/LoginForm'
import SignUpForm from '../../Components/Forms/SignUpForm'

const AuthPage = () => {
     return (
          <div className='min-h-screen bg-flow flex items-center justify-center'>
               <div className='w-full max-w-[900px] p-8 md:p-16 bg-white shadow-lg flex items-center justify-between'>
                    <LoginForm />
                    <SignUpForm />
               </div>
          </div>
     )
}

export default AuthPage;
