import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between w-full px-10 py-4 bg-white border-b border-gray-200 text-slate-200  backdrop-filter backdrop-blur-xl bg-opacity-30'>
      <div className="portfolio font-bold">Portfolio</div>
       <div className="mobile-menu text-4xl flex md:hidden">&#8801;</div>
        <ul className='flex gap-4 font-medium hidden md:flex '>
            <li><a className='navlinks whitespace-nowrap hover:bg-slate-800 py-1 px-2 rounded-md active:transform active:translate-y-1 px-2 py-1 transition duration-300' href="#">Home</a></li>
            <li><a className='navlinks whitespace-nowrap hover:bg-slate-800 py-1 px-2 rounded-md active:transform active:translate-y-1 px-2 py-1 transition duration-300' href="#">About me</a></li>
            <li><a className='navlinks whitespace-nowrap hover:bg-slate-800 py-1 px-2 rounded-md active:transform active:translate-y-1 px-2 py-1 transition duration-300' href="#">Education</a></li>
            <li><a className='navlinks whitespace-nowrap hover:bg-slate-800 py-1 px-2 rounded-md active:transform active:translate-y-1 px-2 py-1 transition duration-300' href="#">Mamor Project</a></li>
        </ul>
    </div>
  )
}

export default Navbar