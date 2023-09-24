import React from 'react';
import { Icon } from '@iconify/react';
import location24 from '@iconify/icons-octicon/location-24';
import phoneIcon from '@iconify/icons-mdi-light/phone';
import emailTwotone from '@iconify/icons-line-md/email-twotone';
import twitterAlt2 from '@iconify/icons-arcticons/twitter-alt-2';
import facebookLite from '@iconify/icons-arcticons/facebook-lite';
import instagramIcon from '@iconify/icons-gg/instagram';

import "./style.css";
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
function Footer() {
  const language = useSelector((state) => state.language.lang);
  return (
    <footer>
      <div className="footer_b">
        <Slide direction={"up"}>
          <a href="/" className="footer_logo">
            {/* <img src={require("../../assets/logo/logo192.png")} alt="" /> */}
            <span>Your Four</span>
          </a>
          <a
            href="https://www.google.com/maps/place/RRRB2677%D8%8C+2677+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C+6694%D8%8C+%D8%A7%D9%84%D8%B9%D8%A7%D8%B1%D8%B6%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+13342%D8%8C+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%E2%80%AD/@24.8903187,46.6084335,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2eef40c5f328df:0x58fa3c7391708050!8m2!3d24.8903187!4d46.6084335!16s%2Fg%2F11pz2qsq9x?entry=ttu"
            className="footer_p"
          >
            <Icon icon={location24} />
            <div className="info">
              <span>{language=='ar'?"2677 طريق الملك عبد العزيز، الرياض، المملكة العربية السعودية":"2677 King Abdulaziz Road, Riyadh, Saudi Arabia"}</span>
            </div>
          </a>
          <a href="tel:+00966503594299" className="footer_p">
            <Icon icon={phoneIcon} />
            <div className="info">
              <span>+00966503594299</span>
            </div>
          </a>
          <a href="mailto:info@yourfour.sa" className="footer_p">
            <Icon icon={emailTwotone} />
            <div className="info">
              <span>info@yourfour.sa</span>
            </div>
          </a>
          <div className="footer_p">
            <div className="footer_social">
              <a href="/" target="_blanck">
                <Icon icon={twitterAlt2} />
              </a>
              <a href="/" target="_blanck">
                <Icon icon={facebookLite} />
              </a>
              <a href="/" target="_blanck">
                <Icon icon={instagramIcon} />
              </a>
            </div>
          </div>
        </Slide>
      </div>
      <div className="footer_t">
        <ul>
          <Slide direction={"left"}>
            <li>
              <a href="#about">{language=='ar'?"عنا":"About"}</a>
            </li>
            <li>
              <a href="#">yourfour</a>
            </li>
            <li>
              <a href="#Agent">{language=='ar'?"كن وكيلنا":"Become Our Agent"}</a>
            </li>
            <li>
              <a href="#policy">{language=='ar'?"سياسة الخصوصية":"Privacy Policy"}</a>
            </li>
            <li>
              <a href="#terms">{language=='ar'?"شروط الاستخدام":"Terms of Use"}</a>
            </li>
          </Slide>
        </ul>
        <Slide direction={"right"}>
          <div className="email_footer">
            <span>{language=='ar'?"لإرسال الإستفسارات":"For press inquiries"}: </span>
            <a href="mailto:info@yourfour.sa">info@yourfour.sa</a>
          </div>
        </Slide>
      </div>
      <p className="copy_right">
          &copy;2023 yourfour. {language=='ar'?"كل الحقوق محفوظة.":"All rights reserved."}
      </p>
    </footer>
  );
}

export default Footer;
