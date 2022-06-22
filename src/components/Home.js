import React from 'react'
import { Link } from 'react-router-dom';
import '../static/css/App.css'
// import climatechange from '../static/images/climatechange.png'
import transparent from '../static/images/transparent.png'
import pattern from "../static/images/pattern.png"


export default function Home() {
    return (
        <body style={{
            backgroundColor: "#0f2526",
            minHeight: "100%",
            height: "100%",
        }}>
            <div className="min-h-full" style={{
                backgroundColor: "#0f2526",
                minHeight: "100%",
                backgroundImage: `url(${pattern})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
            }}>
                {/* <div className="absolute z-50 top-60 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[100rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div> */}
                {/* <div className="absolute z-50 top-60 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[80rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div> */}
                {/* <div className="absolute z-50 top-10 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[60rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/6-dark@tinypng.8d34024cd761e88dc7ab31fa147559b2.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/6-dark@tinypng.8d34024cd761e88dc7ab31fa147559b2.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div> */}
                <div className="sticky top-0 w-full backdrop-blur flex-none transition-colors duration-500 z-40 border-b border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent min-h-full">
                    {/* <div className="w-100 bg-gradient-to-r from-green-700 to-green-400 h-1.5"></div> */}
                    <div className="pb-3 pt-5 border-b border-slate-900/10 px-8 border-0 dark:border-slate-300/10 mx-4 lg:mx-0 items-center justify-center">
                        <div>
                            <div className="px-4 inline-flex items-start justify-center">
                                <img
                                    src={transparent}
                                    alt="logo"
                                    width={28}
                                    height={28}
                                />
                                <p className="logo px-2 text-2xl text-white">#climatechange</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-center md:px-10 px-4 md:py-24 py-5 min-h-full" style={{

                }}>
                    {/* <div className="mb-5">
                    <span className="text-center font-normal text-white pr-4 pl-4 pt-2 pb-2 rounded-full text-3xl bg-green-800">#climatechange</span>
                </div> */}




                    <div className='md:w-10/12 my-5 sm:w-full m-auto'>



                        <h1 className=' text-white md:text-8xl text-5xl font-bold'>
                            {/* Write a hero for a marketing agency */}


                            We’re creating TikTok videos about climate change

                            {/* write a headline for a tiktok marketing agency */}
                            {/* If you’re building a brand, you need to get on TikTok */}
                            {/* Save hours of research with our Tiktok influencer database */}
                            {/* Find Tiktok influencers for your marketing campaign */}
                            {/* Save hundreds of hours of research with our Tiktok influencer database */}
                            {/* Brand sponsorships are not just for Tiktok superstars */}
                        </h1>
                        <h2 className='md:text-3xl text-xl text-gray-400 my-8 w-full md:w-9/12 mx-auto'>
                        We’re creating TikTok videos about climate change to inform, educate, and inspire everyone in our community to take action. Our goal is to make helping tackle the issue of climate change both fun and easy!
                                                    </h2>




                        {/* <div className="md:w-10/12 text-center m-auto py-5 px-2"> */}

                    {/* </div> */}

                        {/* <div class="relative overflow-x-auto shadow-md rounded-lg my-10">
                        <table class="w-full text-sm text-left  text-gray-400">
                            <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium  text-white whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class=" border-b bg-gray-800 border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium  text-white whitespace-nowrap">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium  text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium  text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                        {/* monetize your Tiktok followers */}
                    </div>
                    <div className="flex-row items-center my-12">
                        <Link to={'/early-access'}>
                            <button
                                // onClick={() => { handleSubmit() }} 
                                className='heading text-white button text-xl backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-transparent font-bold rounded-full border-none cursor-pointer pt-2 pb-2 pr-5 pl-5 m-1'>Follow us on Tiktok</button>
                        </Link>
                        <Link to={'/early-access'}>
                            <button
                                // onClick={() => { handleSubmit() }} 
                                className='heading  text-white button text-xl backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-transparent font-bold rounded-full border-none cursor-pointer pt-2 pb-2 pr-5 pl-5 m-1'>Become a creator</button>
                        </Link>
                    </div>
                    {/* <div className="inline-flex w-9/12 backdrop-blur rounded-2xl py-10 transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-transparent shadow-2xl justify-center items-center gap-x-4 text-center my-10 text-white">
                        <div className="w-1/3">
                            <h1 className="text-6xl">100</h1>
                            Videos
                        </div>
                        <div className="w-1/3 text-center">
                        <h1 className="text-6xl">130</h1>
                            Views

                        </div>
                        <div className="w-1/3">
                        <h1 className="text-6xl">35</h1>
                            Creators

                        </div>
                    </div> */}
                </div>
            </div>


        </body>


    );
}


