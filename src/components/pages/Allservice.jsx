import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import styled from 'styled-components'

function Allservice() {
    const [popup, setPopup] = useState (false)
    // const Button = styled.button`
    // background-color: rgb(68, 128, 206);
    // color: white;
    // padding: 10px;
    // align-items: center;
    // font-size: 18px;
    // cursor: pointer;
    // `;
  return (
    <div className='px-18 p-10 max-sm:p-4'>
        <div className='p-4 flex flex-col max-sm:w-full  gap-4 border-1 border-gray-400 rounded-tl-2xl'>
            <div className='flex flex-col gap-4'>
                <div >
                    <h1 className='font-semibold text-[18px]'>I am looking for </h1>
                </div>
                <div className='flex max-sm:flex-col justify-between text-center gap-1 max-sm:grid max-sm:grid-cols-2'>
                    <button className='flex border-1 text-center px-3 p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={29} icon={"solar:bed-linear"} />Pet Boarding</button>
                    <button className='flex border-1 text-center  p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={29} icon={"material-symbols:house-outline"} />House Sitting</button>
                    <button className='flex border-1 text-center px-3 p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={29} icon={"el:guidedog"} />Dog Walking</button>
                    <button className='flex border-1 text-center px-3 p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={25} icon={"medical-icon:i-care-staff-area"} />Pet Daycare</button>
                    <button className='flex border-1 text-center px-3 p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={25} icon={"mingcute:scissors-fill"} />Pet Grooming</button>
                    <button className='flex border-1 text-center px-3 p-2 gap-1 text-[16px] w-45 max-sm:w-40 items-center justify-center bg-pink-400 text-white hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 cursor-pointer' onClick={() => setPopup(!popup)}><Icon width={29} icon={"bx:taxi"} />Pet Taxi</button>
                </div>

                <div className='flex w-full  max-sm:pr-4'>
            <div  className='  max-sm:w-full flex '>
                {popup == true ? 
                <div className='bg-gray-100 flex justify-between gap-3 w-full border-1 border-gray-400 rounded-tl-lg p-2'>
                    <div className='flex justify-between gap-2'>
                           <p>Pet</p>
                           <select className='rounded-[5px] border-1 px-7 py-1' name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                           </select>
                           </div>
                           <div className='flex justify-between gap-2'>
                            <p>Age</p>
                            <select className='rounded-[5px] border-1 px-7' name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                           </select>
                           </div>
                           </div>
                            :
                            <div></div>
                                    }
                        </div>
                        </div>
            </div>

            <div className='flex gap-8 max-sm:w-full max-sm:felx max-sm:flex-col'>
                <div className=' flex flex-col gap-2 w-full'>
                    <label htmlFor="" className='font-semibold text-[18px]'>Near Me in</label>
                    <input className='border-1 boder-gray-400 p-2' type="text" placeholder='Search Your Location'/>
                    </div>
                    <div className=' flex flex-col gap-2 w-[50%] max-sm:w-full'>
                    <label htmlFor="" className='font-semibold text-[18px]'>My Pet Type</label>
                    <select className='p-2 border-1 
                    ' name="" id="">
                        <option value="">All</option>
                        <option value="">Dog</option>
                        <option value="">Cat</option>
                        <option value="">Rabbit</option>
                        <option value="">Animal</option>
                        <option value="">Bird</option>
                    </select>

                    </div>
            </div>

            <div>
                <button className='w-full bg-black text-white p-3 font-semibold text-[18px] rounded-md'>Submit</button>
            </div>
        </div>

        

    </div>
  )
}

export default Allservice