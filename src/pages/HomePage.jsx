import React from 'react'
import Hero from '../components/Hero'
import Table from '../components/Table'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings' 
import ViewAllJobs from '../components/ViewAllJobs'
import Sidebar from '../components/Sidebar'


const HomePage = () => {
  return (
    <>
        <Hero /> 
        {/* <Sidebar /> */}
        <Table />
    </>
  )
}

export default HomePage