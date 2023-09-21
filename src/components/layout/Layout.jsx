import React from 'react'
import Filter from '../Filter'

export default function Layout() {
  return (
    <div className="h-full">
      <div className="flex">
      <nav className="flex-shrink w-[280px] bg-black ">
        <Filter />
      </nav>
      <main className="flex-grow bg-red-600">
        f
      </main>
      </div>
    </div>
  )
}
