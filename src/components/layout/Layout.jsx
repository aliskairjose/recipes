import PropTypes from "prop-types";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    // <div className="grid grid-flow-row h-screen">
    //   <div className="flex divide-x pt-8">
    //     <Sidebar  />
    //     <main className="w-[calc(100%-280px)] px-3">
    //       {children}
    //     </main>
    //   </div>
    //   <Footer />
    // </div>

    <>
      <Sidebar />
      <main className="lg:ml-64 md:ml-52 sm:ml-64 min-h-screen p-3">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
