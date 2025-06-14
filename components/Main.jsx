import React from 'react'

function Main() {
  return (
     <div className="relative w-screen h-screen overflow-hidden">
      <video src="/videos/automotive.224e7418884105595114.mp4" 
      autoPlay 
      muted 
      loop 
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"></video>
      <div className="relative z-10 flex font-semibold flex-col text-white justify-center text-center items-center h-full">
        <p className="font-bold text-md mb-1.5">Driven by performance</p>  
        <p className="text-3xl">Soft trims and <span className="text-blue-700 font-bold">NVH solutions</span> <br></br> for seamless rides</p>  
      </div>
    </div>
  )
}

export default Main