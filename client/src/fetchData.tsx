import React from 'react'
import { useState, useEffect } from 'react'


export async function fetchData(options: {
    pageIndex: number
    pageSize: number
    }) { 

    const [ sites, setSites ] = useState(null)

    useEffect(() => {
        const fetchSites = async () =>  {
        const response = await fetch('http://localhost:5000/api/sites')
        const json = await response.json() 
        // totalRows = json.totalRows 

        if(response.ok){
            console.log(json)
            setSites(json)
        }
        }

        fetchSites()
    }, [])
  
    return {
      rows: sites.slice(
        options.pageIndex * options.pageSize,
        (options.pageIndex + 1) * options.pageSize
      ),
      pageCount: Math.ceil(sites.length / options.pageSize),
      rowCount: sites.length,
    }
}

export default fetchData