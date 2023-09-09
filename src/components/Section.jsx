import React from 'react'
function Section({title, description}) {

  return (
    <div className='w-full px-8 mx-6 mt-8 max-w-4xl border-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-lg hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 cursor-pointer'>
        <div className="deatils-div py-10 flex flex-col items-center justify-center ">
          <div className="heading text-white  mb-4 font-semibold text-3xl">{title}</div>
          <div className="para text-slate-200">{description}</div>
        </div>
    </div>
  )
}

export default Section