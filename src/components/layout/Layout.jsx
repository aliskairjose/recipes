import PropTypes from "prop-types";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-64 md:ml-52 sm:ml-64 min-h-screen p-3 mb-[90px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
