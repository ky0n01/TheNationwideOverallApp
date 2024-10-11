import React from 'react'

const HomeDashboard = () => {
  return (
    <>
        {/*  Main Container */}
        <div className="p-4  mt-16  mb-4 sm:ml-64">
            {/* Flex-container   */}
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
                {/* Flex-Row-container (4 Columns) */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {/*Columns*/}
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    {/*Columns*/}
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    {/*Columns*/}
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    {/*Columns*/}
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeDashboard