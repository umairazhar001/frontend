import React from 'react'
import classes from './login.module.css';

const Login = () => {
  return (
    <div className="flex ">
      <div className="w-[50%] flex flex-col gap-1 shadow-xl p-14">
        <h2 className="text-2xl font-bold self-center mb-8 mt-6">Login page</h2>

        <label htmlFor="">Enter Email</label>
        <input type="email" className=" w-full border-2 border-yellow-200 rounded-lg mb-3 pl-3" placeholder='Enter your email' />

        <label htmlFor="">Enter Email</label>
        <input type="email" className=" w-full border-2 border-yellow-200 rounded-lg mb-3 pl-3" placeholder='Enter your email' />

        <h4 className="mb-4 text-red-600 cursor-pointer">Forget Password ?</h4>

        <button className="w-[80%] bg-violet-600 rounded-md text-center self-center py-1 mb-3">login</button>
        <div className="flex justify-around gap-2 mt-auto">
          <button className="border-2 border-gray=900 px-8 py-1 rounded-md">Google</button>
          <button className="border-2 border-gray=900 px-8 py-1 rounded-md">Facebook</button>
        </div>
      </div>
      <div className="w-[50%]">
        <img src="/search.svg" alt="" />
      </div>


    </div>
  )
}

export default Login
