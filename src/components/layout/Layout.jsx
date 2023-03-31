import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
