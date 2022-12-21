import { children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

{
  /* -------- Setting up Layout ------ */
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
