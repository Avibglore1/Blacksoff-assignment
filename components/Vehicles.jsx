'use client';
import React, { useState } from 'react'

const vehicles=[
        {
            title:'Passenger vehicles',
            desc:'Revving up innovation from interior to exterior.',
            video:'/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4',
            features:['Complete Body','Front','Cabin','Trunk','Exterior']
        },
        {
            title:'Commercial vehicles',
            desc:'Advancing engineering for heavy-duty vehicles.',
            video:'/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4',
            features:['Complete Body','Engine','Cabin']
        }
    ];
function Vehicles() {
    const [selected,setSelected] = useState(0);
    return(
        <div className='flex flex-col h-screen bg-black text-white'>
            <h2 className='text-3xl mt-16 font-light  text-center'>
                Evolving the drive with <span className='font-bold'>360-degree</span><br/>
                comprehensive solutions
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-start 
             mt-9'>
                <div className='w-full md:w-1/3 flex flex-col justify-center px-10 md:pl-10'>
                {vehicles.map((vehicle,index)=>(
                    <div
                    key={index}
                    onMouseEnter={()=>setSelected(index)}
                    className={`cursor-pointer py-4 transition-colors duration-300 ${
                        selected===index ? 'text-white' : 'text-white/40'
                    }`}>
                    <h2 className={`text-2xl font-bold`}>{vehicle.title}</h2>
                    <p className='text-md mt-1'>{vehicle.desc}</p>
                    </div>            
                ))}
                </div>
                <div className='w-full md:w-2/3 flex flex-col justify-center items-center text-center 
                px-6 mt-6 md:mt-0'>
                    <video src={vehicles[selected].video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="rounded-lg w-full max-w-xl h-auto md:h-[300px] object-cover mb-6"></video>
                    <div className="mt-6 flex gap-6 items-center ">
                        {vehicles[selected].features.map((feature,idx)=>(
                            <div key={idx} className='flex flex-col items-center w-20'>
                                <img src="/images/Cabin 1.png"
                                className='w-10 h-10 object-contain' alt="" />
                                <span className='text-xs text-white/60 text-center mt-2'>{feature}</span>
                            </div>    
                        ))}                   
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Vehicles