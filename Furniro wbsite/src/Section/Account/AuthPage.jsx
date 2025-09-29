import React, { useContext } from 'react'
import LoginForm from '../../Components/Forms/LoginForm'
import SignUpForm from '../../Components/Forms/SignUpForm'
import WebContext from '../../ContextApi/WebContext'
import UserProfileCard from '../../Components/Cards/UserProfileCard'

const AuthPage = () => {
     const { isLogin, setIsLogin, userData, setUserData, isUserLoggedIn, } = useContext(WebContext)

     return (
          <div className='min-h-screen bg-flow flex items-center justify-center'>
               {isUserLoggedIn ? (
                    <UserProfileCard />
               ) : (<div className='flex items-center justify-between w-full max-w-[980px] bg-white shadow-lg'>
                    <div className={`flex items-center justify-center md:w-1/2 w-full h-full
                         transition-transform duration-200 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}>
                         {isLogin ? <LoginForm IsSwitch={setIsLogin} /> : <SignUpForm IsSwitch={setIsLogin} />}
                    </div>
                    <div
                         className={`hidden md:block w-1/2 h-[80vh]
                          transition-transform duration-200 ease-in-out
                          ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                         <img src="img/hero-bg.png" alt="Cover Image" className='w-full h-full object-cover object-center' />
                    </div>
               </div >)}
          </div >
     )
}

export default AuthPage;
