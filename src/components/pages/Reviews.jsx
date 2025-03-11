import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import Reviewdata from '../data/Reviewdata.json'
const CardData = Reviewdata.carddata
console.log(CardData)

function Reviews() {

    // const [card, setCard] = useState(CardData)

  return (
        <div class="py-16 p-10 ">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- Section Header --> */}
        <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold sm:text-4xl">
                What Users Are Saying
            </h2>
            <p class="max-w-2xl mx-auto text-lg text-gray-600">
                Hear from tools that have successfully listed on our platform
            </p>
        </div>
        </div>


        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {CardData.map((carditem) => {
            return(
                <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="flex-shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src={carditem.img} alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">{carditem.name}</h3>
                        <p class="text-sm text-gray-500">{carditem.username}</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            {/* <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path> */}
                           <Icon className="text-yellow-700" width={25} icon={carditem.fromlogo} />
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">{carditem.review}</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <Icon className="text-red-700" width={25} icon={"mdi:heart-outline"} />

                        {/* <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path> */}
                    </svg>
                    <span class="mr-4">{carditem.likes}</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <Icon className="text-gray-700" width={25} icon={"material-symbols:comment-outline"} />

                        {/* <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path> */}
                    </svg>
                    <span class="mr-4">{carditem.comments}</span>
                    <span class="text-sm">{carditem.timedate}</span>
                </div>
            </div>
            )
        })}
       

            </div>
    </div>
  )
}

export default Reviews