import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import Allservice from './Allservice'

function Home() {
  return (
    <div className='max-sm:flex max-sm:flex-col-reverse'>
        <div className=' flex gap-3 w-full px-20 max-sm:flex max-sm:flex-col max-sm:px-5'>

<div className="left w-full py-8 max-sm:h-full max-sm:mt-11">
    <div className='border-b-1 border-gray-500 max-sm:w-full'>
    <p className='text-8xl font-bold  max-sm:text-6xl max-sm:flex max-sm:flex-col max-sm:text-center'>Best Help For Your Lovely Pets</p>
    <p className='py-5 text-[20px] max-sm:text-center'>There are so many challanges that come with finding a good, local pet sitter. You need to find someone both.</p>
</div>



<div className='pt-2 max-sm:pt-5 flex max-sm:flex max-sm:w-full max-sm:flex-col min-xl:items-center gap-14 max-sm:gap-6'>
    <div>
<button className='p-4 max-sm:w-full border-1 font-semibold border-white rounded-[6px] bg-pink-300 text-white hover:bg-white hover:text-black hover:border-1 hover:border-black cursor-pointer'>Schedual a call</button>
</div>
<div>
<button className='p-4 border-1 max-sm:w-full max-sm:border-1 max-sm:border-gray-400 font-semibold flex gap-1 items-center justify-center border-white rounded-[6px] hover:bg-white hover:text-black hover:border-1 hover:border-black cursor-pointer'>Learn more
    <div className=' transition-transform hover:shadow-lg hover:-translate-y-1'><Icon className="mt-1" width={10} icon={"weui:arrow-outlined"} />
    </div>
</button>
</div>
<div className='flex max-sm:hidden max-sm:w-full justify-center items-center'><Icon className="" width={100} icon={"logos:whatsapp-icon"} />
    </div>
</div>




</div>

<div className="right w-full flex justify-end ">
      <div className='image flex justify-center items-center'> 
        <img src="/Images/petcareimg.jpg" alt="" srcset="" className='object-cover h-96 max-sm:h-64' />
      </div>
</div>

</div>

<div>
  <Allservice />
</div>
    </div>
  )
}

export default Home