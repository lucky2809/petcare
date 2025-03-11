import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'



function Navbar() {
const [toggle, setToggle] = useState(false)
console.log(toggle)

  return (
    <div className='sticky top-0 z-1'>
            <div >
                <div className="nav font-semibold bg-white py-3.5 max-sm:px-4 max-sm:py-6 border-b border-gray-400">
                    <nav className='flex justify-between gap-40 items-center '>

                        <div className=' w-full max-sm:hidden'>
                            <ul className='flex justify-center gap-11  '>
                                <li><a href="">About</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Accesories</a></li>
                            </ul>
                        </div>

                        <div className="logo w-full flex justify-center items-center text-3xl font-serif">
                            <div><Icon className="" width={41} icon={"solar:cat-linear"} /></div>
                            <h1>Petpy</h1>
                        </div>

                        <div className="button w-full flex justify-center items-center gap-12  ">
                            <div className='border-2 border-white max-sm:hidden'>
                                <select className='flex border-2 border-white px-3' name="" id="">
                                    <option className='border-2 border-white' value="">ENG</option>
                                    <option className='border-2 border-white' value="">HIN</option>


                                </select>
                            </div>
                            <div className="hamburger cursor-pointer w-1 max-sm:w-fit" onClick={() => setToggle(!toggle)}>
                                {toggle ? <div><Icon className="" width={21} icon={"fluent-emoji-high-contrast:cross-mark"} /></div> : <div><Icon className="" width={30} icon={"mdi:hamburger-menu"} /></div>
                                }
                                </div>
                        </div>
                        

                    </nav>
                

                </div>
            </div>
<div className='min-xl:flex min-xl:justify-end min-xl:px-5'>
            <div  className='absolute w-30 max-sm:w-full p-3 '>
                {toggle == true ? 
                            <ul className='popup w-full bg-black text-white border border-white h-full flex flex-col justify-center items-center  py-3 gap-7'>
                            <li>
                                <a href="">Home</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                            :
                            <div></div>
                                    }
                        </div>
                        </div>
                        

        </div>
  )
}

export default Navbar