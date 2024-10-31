import React from 'react'
import useState from 'react'
import TableComponentTs from './TableComponentTs'

const Table = () => {
  return (
    <>
      <section className="py-4 px-10 sm:ml-64">
        <div className="bg-white rounded-xl shadow-md relative m-auto container-xl md:container m-auto">
          <div className='px-5 py-5'>
            <TableComponentTs />
          </div>
        </div>
      </section>
    </>
  )
}

export default Table



