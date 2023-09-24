import React from 'react';
import Header from '../header';
import "./style.css";
import Footer from '../footer';
import HeaderPage from '../header/otherHeader';
function DefaultLayout({ children, className, id }) {
  return (
    <>
      {id == "headerPage" ? <HeaderPage /> : <Header />}
      <div className="latyout_im">{children ? children : null}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
