import React from 'react'
import Filter from '../Filter'
import { Outlet } from "react-router-dom";
import { Sidebar} from '../Sidebar'

export default function Layout() {
  return (
    <div className="h-full">
      <div className="flex">
        <Sidebar />
      <main className="flex-grow bg-red-600">
        <Outlet />
      </main>
      </div>
    </div>
  )
}
