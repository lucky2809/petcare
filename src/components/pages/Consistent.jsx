import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function Consistent() {
    const [ishover, setIshover] = useState(false)
    function Hovertrue() {
        setIshover(true)
    }
    function Hoverfalse() {
        setIshover(false)
    }
console.log(ishover)
  return (
    <div>
        <div>
            <div className='flex items-center justify-center pt-10'>
                <p className='text-6xl max-sm:text-4xl flex flex-col items-center text-center'>Consistent Availability <span> Flexible Scheduling </span></p>
            </div>

            <div  className='w-full flex max-sm:flex-col gap-20 max-sm:gap-10 p-10 px-20 max-sm:px-10'>
                <div onMouseOver={Hovertrue} onMouseLeave={Hoverfalse} className='border flex flex-col gap-6 border-gray-200 shadow-lg w-full p-5 py-10'>
                    <div className={`flex justify-center ${ishover ? "hover:scale-110" || "duration-200" : "" }`}>
                    <div className='p-4 shadow-2xl rounded-full w-fit '>
                    <Icon className="text-sky-700" width={35} icon={"bxl:telegram"} />
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-lg font-semibold text-center'>Last-Minute Requests</p>
                        <p className='text-center'>Find yourself heading out of town unexpectedly? There is no need to stress about finding care for your pet</p>
                    </div>
                </div>
                <div onMouseOver={Hovertrue} onMouseLeave={Hoverfalse} className='border border-gray-200 flex flex-col gap-6 shadow-lg w-full p-5 py-10'>
                    <div className={`flex justify-center ${ishover ? "hover:scale-110" || "duration-200" : "" }`}>
                        <div className='p-4 shadow-2xl rounded-full w-fit'>
                    <Icon className="text-pink-400 " width={35} icon={"ic:outline-watch-later"} />
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-lg font-semibold text-center'>Schedue Changes</p>
                        <p className='text-center'>Want to extend your vacation an extra day or two? That s no problem with us.
                        Spending cnother day</p>
                    </div>
                </div>
                <div onMouseOver={Hovertrue} onMouseLeave={Hoverfalse} className='border border-gray-200 shadow-lg flex flex-col gap-6 w-full p-5 py-10'>
                    <div className={`flex justify-center ${ishover ? "hover:scale-110" || "duration-200" : "" }`}>
                    <div className=' p-4 shadow-2xl rounded-full w-fit '>
                    <Icon className="text-yellow-700" width={35} icon={"simple-line-icons:calender"} />
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 px-7'>
                        <p className='text-lg font-semibold text-center'>Cancellation</p>
                        <p className='text-center'>Don't need our services after all?
                        We are flexible in regard to our cancellation policios</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consistent