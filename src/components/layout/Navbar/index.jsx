import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <Link to="/" className='flex-1 px-2 mx-2 font-bold text-2xl'>Game Harbour</Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <Link to='/' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>Home</Link>
              <Link to='/about' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>About</Link>
              <Link to='/games' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>Games</Link>
            </ul>
          </div>
        </div>
      </div> 
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Link to='/' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>Home</Link>
          <Link to='/about' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>About</Link>
          <Link to='/games' className='p-2 transform hover:bg-gray-800 rounded-lg duration-300 ease-in-out'>Games</Link>
        </ul>
      </div>
    </div>
  )
}