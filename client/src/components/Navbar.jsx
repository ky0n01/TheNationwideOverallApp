import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../assets/logo.png'


const NavBar = () => {
  const linkClass = ({isActive}) => isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                                             : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  return (
    <>    
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        {/* Hamburger */}
                        <button 
                            data-drawer-target="default-sidebar" 
                            data-drawer-toggle="default-sidebar" 
                            aria-controls="default-sidebar" 
                            type="button" 
                            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>

                        {/*   Logo   */}
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img
                                className="h-10 w-auto"
                                src={Logo}
                                alt="React Logo"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                NAL 
                            </span>
                        </a> 
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <NavLink
                                to="/"
                                className={ linkClass }
                            >
                                Home
                            </NavLink>
                            {/* <NavLink
                                to="/jobs"
                                className={ linkClass }
                            >
                                Jobs
                            </NavLink>
                            <NavLink
                                to="/add-job"
                                className={ linkClass }
                            >
                                Add Jobs
                            </NavLink> */}

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar