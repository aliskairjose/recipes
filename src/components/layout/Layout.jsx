import PropTypes from "prop-types";
import Footer from '../Footer';
import Sidebar from '../Sidebar';

export default function Layout({children}) {
  return (
    <div className="grid grid-flow-row h-screen">
      <div className="flex divide-x pt-8">
        <Sidebar />
        <main className="w-[calc(100%-280px)] px-3">
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

