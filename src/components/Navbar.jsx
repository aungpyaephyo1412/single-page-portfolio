import {Link} from "react-router-dom";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {useState} from "react";
import {BsFacebook,BsYoutube} from 'react-icons/bs'
import Logo from '../img/tp-high-resolution-color-logo.png'
const Navbar = () => {

    const homeGoHandler = ()=>{
        window.scroll(0,0)
    }
    const [open,setOpen] = useState(false)
    return (
        <nav
            className={`bg-primary px-2 sm:px-4   fixed w-full z-20 top-0 left-0 ${open ?"pb-5":"pb-0"}`}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to='/' className="flex items-center" onClick={homeGoHandler}>
                    <img src={Logo} className="h-6 mr-3 sm:h-9 rounded-full object-contain"
                         alt="Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Typle</span>
                </Link>
                <div className="flex md:order-2">
                    <div className='flex items-center gap-x-3'>
                        <a href='https://www.facebook.com/aung.pyae.phyo.1412' target='_blank'
                           className="p-2 bg-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-center">
                            <BsFacebook/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCyOuFpk3FQe1E1fNI3ad4tg' target='_blank'
                           className="p-2 bg-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center mr-3 lg:mr-0">
                            <BsYoutube/>
                        </a>
                    </div>
                    <button  type="button" onClick={()=>setOpen(!open)}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
                            >
                        <span className="sr-only">Open main menu</span>
                        {open? <AiOutlineClose  className={`text-3xl text-black`}/> : <AiOutlineMenu className={`text-3xl text-black`}/>}
                    </button>
                </div>
                <div className={`items-center justify-between ${open?"block":"hidden"} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 mt-4 border border-black rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0 uppercase">
                        <li>
                            <a href="#home" onClick={()=>setOpen(false)}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                               >Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={()=>setOpen(false)}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">About</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={()=>setOpen(false)}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Projects</a>
                        </li>
                        <li>
                            <a href="#services" onClick={()=>setOpen(false)}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Services</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={()=>setOpen(false)}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

)
}
export default Navbar


// < nav
// className = "bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" >
//     < div
// className = "container flex flex-wrap items-center justify-between mx-auto" >
//     < a
// href = "https://flowbite.com/"
// className = "flex items-center" >
//     < img
// src = "https://flowbite.com/docs/images/logo.svg"
// className = "h-6 mr-3 sm:h-9"
// alt = "Flowbite Logo" >
//     < span
// className = "self-center text-xl font-semibold whitespace-nowrap dark:text-white" > Flowbite < /span>
// </a>
// <div className="flex md:order-2">
//     <button type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
//         started
//     </button>
//     <button data-collapse-toggle="navbar-sticky" type="button"
//             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
//              xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clip-rule="evenodd"></path>
//         </svg>
//     </button>
// </div>
// <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className=" dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//             <a href="#"
//                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//                aria-current="page">Home</a>
//         </li>

//         <li>
//             <a href="#"
//                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
//         </li>
//         <li>
//             <a href="#"
//                className="  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//         </li>
//     </ul>
// </div>
// </div>
// </nav>
