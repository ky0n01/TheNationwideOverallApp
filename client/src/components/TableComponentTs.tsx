import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
//import nodes from '/src/nodes.json'; // json in local storage. no problems encountered. 

// Tanstack dependencies
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Sites = {
  _id: string, 
  nationwide_id: number,
  location: string,
  barangay: string,
  locality: string,
  province: string,
  region: string,
}

const siteData: Sites[] = [
  {
      '_id': '6710b2879c79db9a1a437e5a',
      'nationwide_id': 142123,
      'location': 'Fairview FCM',
      'barangay': 'Fairview',
      'locality': 'Pasong Putik',
      'province': 'Metro Manila',
      'region': 'NCR', 
  },
  {
      '_id': '67063a5df8207c5f3d3e3c85',
      'nationwide_id': 130368,
      'location': 'Marihatag Legislative Building',
      'barangay': 'Poblacion',
      'locality': 'Marihatag',
      'province': 'Surigao Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c84',
      'nationwide_id': 130367,
      'location': 'Cantilan Municipal Gym',
      'barangay': 'Magosilom (Pob.)',
      'locality': 'Cantilan',
      'province': 'Surigao Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c83',
      'nationwide_id': 130366,
      'location': 'Bislig TESDA Training Center',
      'barangay': 'Poblacion',
      'locality': 'City of Bislig',
      'province': 'Surigao Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c82',
      'nationwide_id': 130365,
      'location': 'Bislig City Gym and Cultural Center',
      'barangay': 'Poblacion',
      'locality': 'City of Bislig',
      'province': 'Surigao Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c81',
      'nationwide_id': 130364,
      'location': 'Bislig Baywalk',
      'barangay': 'Poblacion',
      'locality': 'City of Bislig',
      'province': 'Surigao Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c80',
      'nationwide_id': 130363,
      'location': 'Surigao City Gym',
      'barangay': 'Washington (Pob.)',
      'locality': 'Surigao City',
      'province': 'Surigao Del Norte',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c7f',
      'nationwide_id': 130362,
      'location': 'Luneta Park',
      'barangay': 'Washington (Pob.)',
      'locality': 'Surigao City',
      'province': 'Surigao Del Norte',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c7e',
      'nationwide_id': 130361,
      'location': 'Sinobong Barangay Gymnasium',
      'barangay': 'Sinobong',
      'locality': 'Veruela',
      'province': 'Agusan Del Sur',
      'region': 'XIII'
  },
  {
      '_id': '67063a5df8207c5f3d3e3c7d',
      'nationwide_id': 130360,
      'location': 'Santa Maria Barangay Gymnasium',
      'barangay': 'Santa Maria',
      'locality': 'Trento',
      'province': 'Agusan Del Sur',
      'region': 'XIII'
  }
]

const columnHelper = createColumnHelper<Sites>()

const columns = [
  columnHelper.accessor('_id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.nationwide_id, {
    id: 'nationwide_id',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Nationwide ID</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('location', {
    header: () => 'Location',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('barangay', {
    header: () => <span>Barangay</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('locality', {
    header: 'Locality',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('province', {
    header: 'Province',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('region', {
    header: 'Region',
    footer: info => info.column.id,
  }),
]



const TableComponentTs = () => {
  const [ sites, setSites ] = useState(null)
  const [data, _setData] = React.useState(() => [...siteData])
  const rerender = React.useReducer(() => ({}), {})[1]
  


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  useEffect(() => {
    const fetchSites = async () =>  {
      const response = await fetch('http://localhost:5000/api/sites')
      const json = await response.json() 

      if(response.ok){
        console.log(json)
        setSites(json)
      }
    }

    fetchSites()
  }, [])

  return (
    <>
      <table className='w-full table-collapse  ...'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='text-left uppercase font-semibold py-2  bg-slate-100 ...'>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='py-2'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='py-2   border-t border-grey-light'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id} className='text-left uppercase font-semibold py-2  bg-slate-100 ...'>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div className='h-4' />
      <button onClick={() => rerender()} className='border p-2'>
        Rerender
      </button>
    </>
  ) 
}


export default TableComponentTs


