import React from 'react'

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-lvh">
      <div className='flex flex-col w-[30%] border px-3 pb-5'>
        <h2 className="text-2xl font-bold self-center mb-2 mt-6">Sign Up</h2>
        <p className='text-sm text-center mb-8'>Sign up to continue</p>
        
        <input className="border border-green-500 rounded-lg mb-2 pl-3" type="text" placeholder='Name' />
        <input className="border border-green-500 rounded-lg mb-2 pl-3" type="email" placeholder='Email' />
        <input className="border border-green-500 rounded-lg mb-4 pl-3" type="password" placeholder='Password' />

        <button className="border w-[80%] rounded bg-pink-600 self-center mb-4 text-white">Sign Up</button>

        <p className="self-center mb-4">-----------------Access Quickly----------------</p>

        <div className="flex justify-around">
          <button className="border-2 border-gray=900 px-8 py-1 rounded-md">Google</button>
          <button className="border-2 border-gray=900 px-8 py-1 rounded-md">Facebook</button>
          <button className="border-2 border-gray=900 px-8 py-1 rounded-md">Instagram</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
