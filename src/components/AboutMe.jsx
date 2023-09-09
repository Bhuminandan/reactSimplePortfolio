import React from 'react'
import profileImg from "../assets/profileimg.jpg"


function AboutMe() {
  return (
    <div className='w-full flex flex-col mt-14  max-w-4xl px-10 mx-6 border-2 items-center justify-center h-auto py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-lg hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 cursor-pointer'>
    <div className="img">
        <img src={profileImg} alt="profileimg" className='rounded-full shadow-xl' />
    </div>
    <div className="title-text flex flex-col text-center py-8 text-white">
      <div className="title text-3xl font-bold">Hii I'm Bhuminandan 👋🏽</div>
      <div className="sub-title text-lg py-2 font-semibold">A front-end devloper from India</div>
    </div>
    </div>
  )
}

export default AboutMe