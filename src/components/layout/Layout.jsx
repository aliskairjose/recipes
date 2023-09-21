import React from 'react'
import Filter from '../Filter'
import PropTypes from "prop-types";
import Footer from '../Footer';

export default function Layout({children}) {
  return (
    <div className="grid grid-flow-row h-screen">
      <div className="flex divide-x pt-8">
        <nav className="flex-shrink w-[280px] px-4 ">
          {/* <Filter onSearchAction={onSearch} /> */}
        </nav>
        <main className="flex flex-wrap w-[calc(100%-280px)] gap-2 px-3">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

