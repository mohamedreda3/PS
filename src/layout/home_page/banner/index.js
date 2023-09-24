import React from 'react';
import BannerTicker from "./bannerTicker";
import "./style.css";
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function Banner() {
  const language = useSelector((state) => state.language.lang);
  return (
    <div className="banner">
      <div className="content_banner">
        <div className="banner_text">
          <Slide direction={"up"}>
            <h2>
              {" "}
              <span style={{ color: "var(--main-color-one)" }}>
                {/* استشارات البرمجياتي */}
                {language=='ar'?"استشارات البرمجيات":"Software Consulting"}{" "}
              </span>{" "}
              {language=='ar'?"وتطويرها " : "and Development for Your Digital"}{" "}
              <span style={{ color: "var(--main-color-one)" }}>{language=='ar'?"لنجاحك الرقمي":"Success"}</span>
            </h2>
          </Slide>
          <Slide direction={"up"}>
            <p>
              {language=='ar'?"تأسست Your4 في ​​عام 2023 على يد مجموعة من الخبراء الشباب في هذا المجال  لتطوير البرمجيات. وهي تتمتع اليوم بمكانة مرموقة  واحدة من أبرز الشركات التي تقدم خدمة شاملة  الحل في مجال الحلول البرمجية والتسويق  الاستراتيجيات، حيث أنها تفعل ذلك من خلال وحدات متكاملة تدير كل شيء  جوانب أعمالها من خلال الوسائط الرقمية.":"Your4 was founded in 2023 by a group of young experts in the field  of software development. Today, it enjoys a prominent position as  one of the most prominent companies that provides a comprehensive  solution in the field of software solutions and marketing  strategies, as it does so through integrated units that manage all aspects of its business through digital media."}
            </p>
          </Slide>
        </div>
        <Slide direction={"up"}>
          <BannerTicker />
        </Slide>
      </div>
    </div>
  );
}

export default Banner;
