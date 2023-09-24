import React, {useEffect, useState} from 'react';
import "./style.css";
import {Icon} from '@iconify/react';
import menuFoldLeft from '@iconify/icons-line-md/menu-fold-left';
import {headerData} from '../../data/headerData';
import whatsappIcon from '@iconify/icons-icomoon-free/whatsapp';
import {Slide} from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
function Header() {
  const [active, setActive] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
  // const section = document.querySelectorAll("section");
  // const [intersection, setIntersection] = useState("#");
  // useEffect(() => {
  //   if (section && section.length) {
  //     const observer = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         setIntersection(entries[0].target.id);
  //         document.location.replace("#" + entries[0].target.id);
  //       } else {
  //         document.location.replace("#");
  //       }
  //     });

  //     section.forEach((item) => {
  //       observer.observe(item);
  //     });

  //     // Cleanup function to disconnect the observer when the component unmounts
  //     return () => {
  //       section.forEach((item) => {
  //         observer.unobserve(item);
  //       });
  //     };
  //   }
  // }, []);

  const language = useSelector((state) => state.language.lang);
  return (
    <header className={sticky ? "sticky" : "false"}>
      <nav>
        <a className="logo" href="/">
          <img src={require("../../assets/logo/logo192.png")} alt="" />
          {/* <span>Your Four</span> */}
        </a>
        <div className={openNav ? "nav_right active" : "nav_right"}>
          <Slide direction={"down"}>
            <ul className="menu_toggle">
              {headerData.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(index);
                      setOpenNav(false);
                    }}
                    className={active == index ? "active" : ""}
                  >
                    <a href={item.path}>{language=='ar'?item.label_ar:item.label}</a>
                  </li>
                );
              })}
            </ul>
          </Slide>
          <a
            className="whatsContant"
            href="https://wa.me/+00966503594299"
            target="_blanck"
          >
            <Slide direction="down">
              <span className="whats_icon">
                <div className="blob">
                  <Icon icon={whatsappIcon} color="green" />
                </div>
              </span>
              <div className="whats_details">
                <p className="lets_talk">{language=='ar'?"هيا نتحدث":"Let's Talk"}</p>
                <p>+00966503594299</p>
              </div>
            </Slide>
          </a>
        </div>
        <span className="menu_header" onClick={() => setOpenNav(!openNav)}>
          <Icon icon={menuFoldLeft} color="royalblue" />
        </span>
      </nav>
    </header>
  );
}

export default Header;
