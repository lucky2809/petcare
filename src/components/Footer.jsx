import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Footer() {
  return (
    <div className="px-10 w-full bg-purple-950 max-sm:flex max-sm:flex-col max-sm:px-5 mt-">
      <div className="p-5 text-white flex gap-6 border-b border-slate-500 max-sm:flex max-sm:flex-col">
        <div className="left w-full  max-sm:flex max-sm:justify-center">
            <div className='h-54 w-54 flex flex-col justify-center items-center border-b-[7px] border-pink-400'>
            <Icon className="" width={100} icon={"solar:cat-linear"} />
            <p className='text-pink-400'>Petpy.in</p>
            </div>
          {/* <img
            src="/images/footerloge.png"
            alt=""
            srcset=""
            className="object-cover h-64 w-64 border-b-[7px] border-pink-400 "
          /> */}
        </div>

        <div className="right w-full  flex flex-col gap-5 ">
          <h1 className="text-4xl font-semibold font-sans max-sm:flex max-sm:justify-center">
            Petpy.in
          </h1>
          <div className="w-full flex max-sm:flex max-sm:flex-col  max-sm:justify-center">
            <div className="w-full flex flex-col gap-6  py-4 px-2 max-sm:py-0 ">
              <h1 className="text-[22px] max-sm:flex max-sm:justify-center text-pink-400">
                About Us
              </h1>
              <span className="flex flex-col gap-1 text-gray-400">
                <p className=" max-sm:flex max-sm:justify-center">Mission</p>
                <p className=" max-sm:flex max-sm:justify-center">Team</p>
                <p className=" max-sm:flex max-sm:justify-center">
                  Newseletter
                </p>
              </span>
            </div>
            <div className="w-full flex flex-col gap-6 py-4 px-2">
              <h1 className="text-[22px] max-sm:flex max-sm:justify-center text-pink-400">
                Support
              </h1>
              <span className="flex flex-col gap-1 text-gray-400">
                <p className=" max-sm:flex max-sm:justify-center">Contact</p>
                <p className=" max-sm:flex max-sm:justify-center">
                  Refund Policy
                </p>
                <p className=" max-sm:flex max-sm:justify-center">FAQ's</p>
              </span>
            </div>
            <div className="w-full flex flex-col gap-6 py-4 px-2">
              <h1 className="text-[22px] max-sm:flex max-sm:justify-center text-pink-400">
                Social
              </h1>
              <span className="flex flex-col max-sm:flex max-sm:flex-row max-sm:justify-center gap-2 text-center items-center min-xl:w-fit">
                <Icon className="hover:scale-110 duration-300" width={35} icon={"skill-icons:instagram"} />
                <Icon className="hover:scale-110 duration-300" width={35} icon={"logos:facebook"} />
                <Icon className="hover:scale-110 duration-300" width={35} icon={"logos:whatsapp-icon"} />

                
                {/* <p className=" max-sm:flex max-sm:justify-center">Linkedin</p>
                <p className=" max-sm:flex max-sm:justify-center">Twitter</p> */}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white w-full px-5 flex py-6">
        <div className="left w-full flex max-sm:flex-col">
          <div className="w-full">
            <p>Copyright @ Pepty</p>
          </div>
          <div className="w-full">
            <p>Terms of Service</p>
          </div>
        </div>

        <div className="right  w-full flex justify-end items-center gap-1">
          <p>Bact To Top</p>
          <div className="mt-1">
            <Icon icon="fluent-emoji-high-contrast:up-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer