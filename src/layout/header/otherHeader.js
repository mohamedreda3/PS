import React, { useEffect, useState } from 'react';
import "./style.css";
import { Icon } from '@iconify/react';
import arrowLeftBroken from '@iconify/icons-solar/arrow-left-broken';
import whatsappIcon from '@iconify/icons-icomoon-free/whatsapp';
import { Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function HeaderPage() {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  const language = useSelector((state) => state.language.lang);

  return (
    <header id="pages" className={sticky ? "sticky" : "false"}>
      <nav style={{ flexWrap: "wrap" }}>
        {" "}
        <div
          className="nav_logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Icon
            icon={arrowLeftBroken}
            color="var(--main-color-one)"
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <a className="logo" href="/">
            <img src={require("../../assets/logo/logo192.png")} alt="" />
            {/* <span>Your Four</span> */}
          </a>
        </div>
        <Slide direction="down">
          <div className="nav_pages_right">
            <a
              className="whatsContant"
              href="https://wa.me/+00966503594299"
              target="_blanck"
            >
              <span className="whats_icon">
                <div className="blob">
                  <Icon icon={whatsappIcon} color="green" />
                </div>
              </span>
              <div className="whats_details">
                <p className="lets_talk">{language=='ar'?"دعنا نتحدث":"Let's Talk"}</p>
                <p>+00966503594299</p>
              </div>
            </a>
          </div>
        </Slide>
      </nav>
    </header>
  );
}

export default HeaderPage;
