import React from 'react';
import DefaultLayout from '../../layout/default_layout';
import Banner from '../../layout/home_page/banner';
import About from '../../layout/home_page/about';
import Services from '../../layout/home_page/services';
import WhyUs from '../../layout/home_page/whyUs';
import Solutions from '../../layout/home_page/solutions';
import Blog from '../../layout/home_page/blog';
import Faqs from '../../layout/home_page/faqs';
import ContactUs from '../../layout/home_page/contact_us';
import Technologies from '../../layout/home_page/technologies';

function Home() {

  return (
    <DefaultLayout
      className={"home"}
      children={
        <>
          <Banner />
          <About />
          <Services />
          <WhyUs />
          <Solutions />
          <Technologies />
          <Blog />
          <Faqs />
          <ContactUs />
        </>
      }
    />
  );
}

export default Home;
