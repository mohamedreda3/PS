import React from 'react';
import "./style.css";
import { Tilt } from 'react-tilt';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
function WhyUs() {
  const language = useSelector((state) => state.language.lang);
  return (
    <div className="w_h_background">
      <section id="why_us">
        <div className="why_us">
          <div className="left_why">
            <Slide direction={"left"}>
              <h3>
                {language == 'ar' ? " لماذا يتم " : "Here’s why people"}{" "}
                <span style={{ color: "var(--main-color-one)" }}>
                  {" "}
                  {language == 'ar' ? "إختيارنا" : "choose"}{" "}
                </span>{" "}
                {language == 'ar' ? "دائما" : "to work with"}{" "}
                <span style={{ color: "var(--main-color-one)" }}>
                  {" "}
                  {language == 'ar' ? "" : "Us"}{" "}
                </span>
              </h3>
              <p>
                {language == 'ar'
                  ? "نحن نعاملك كشريك ونبني على رؤيتك من خلال إظهار الإمكانيات الجديدة والبديل الذي يناسبك بشكل أفضل."
                  : "We treat you like a partner and build on your vision by showing you new possibilities and alternative that suit you better."}
              </p>
              <div className="why_bx">
                <Tilt>
                  {" "}
                  <img
                    src="https://www.cubix.co/lp/g-app/images/icons/computers.svg"
                    alt=""
                  />
                </Tilt>
                <div className="why_bx_df">
                  <h5>
                    {language == 'ar'
                      ? "العصف الذهني والتفكير"
                      : "Brainstorming and Ideation"}
                  </h5>
                  <p>
                    {language == 'ar'
                      ? "نحن نبني الحلول ونضع إستراتيجياتها بناءً على رؤيتك بحيث يكون لديك جميع الخيارات قبل المضي قدمًا في مشروعك."
                      : "We build and strategize solutions based on your vision so that you have all the options before moving forward with your project."}
                  </p>
                </div>
              </div>

              <div className="why_bx">
                <Tilt>
                  {" "}
                  <img
                    src="https://www.cubix.co/lp/g-app/images/icons/worker.svg"
                    alt=""
                  />
                </Tilt>
                <div className="why_bx_df">
                  <h5>
                    {language == 'ar'
                      ? "ضمان الرضا بنسبة 100%"
                      : "100% satisfaction guaranteedn"}
                  </h5>
                  <p>
                    {language == 'ar'
                      ? "نحن نبني الحلول ونضع إستراتيجياتها بناءً على رؤيتك بحيث يكون لديك جميع الخيارات قبل المضي قدمًا في مشروعك."
                      : "We build and strategize solutions based on your vision so that you have all the options before moving forward with your project."}
                  </p>
                </div>
              </div>

              <div className="why_bx">
                <Tilt>
                  {" "}
                  <img
                    src="https://www.cubix.co/lp/g-app/images/icons/deal.svg"
                    alt=""
                  />
                </Tilt>
                <div className="why_bx_df">
                  <h5>24/7 {language == 'ar' ? "تواصل" : "communication"}</h5>
                  <p>
                    {language == 'ar'
                      ? "نحن نبني الحلول ونضع إستراتيجياتها بناءً على رؤيتك بحيث يكون لديك جميع الخيارات قبل المضي قدمًا في مشروعك."
                      : "We build and strategize solutions based on your vision so that you have all the options before moving forward with your project."}
                  </p>
                </div>
              </div>
            </Slide>
          </div>
          <div className="right_why">
            <Slide direction={"right"}>
              <Tilt>
                {" "}
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/45/68/19/1000_F_245681996_b0KdmlzxlY8JmZObaNiOrk2gGTP2PQkq.jpg"
                  alt=""
                />
              </Tilt>
              <p>
                {language == 'ar'
                  ? "دعونا نبني الحل الذي يحقق حلمك. مع فريق من ذوي الخبرة والموهوب، يمكنك بناء ما تحتاجه بالضبط."
                  : "Let's build a solution that fulfills your dream. With an experienced and talented team, you can build precisely what you need."}
              </p>
              <h4>
                {language == 'ar' ? "إبدأ" : "Start your"}{" "}
                <span style={{ color: "var(--main-color-one)" }}>
                  {" "}
                  {language == 'ar' ? "مشروعك" : "project"}{" "}
                </span>
                {language == 'ar' ? "بطريقه صحيحه" : "right away!"}
              </h4>
              <p>
                {language == 'ar'
                  ? "الوقت هو جوهر المسألة. دعونا نتحدث اليوم ونرى ما يمكننا القيام به مع رؤيتك."
                  : "Time is of the essence. Let's talk today and see what we can do with your vision."}
              </p>
              <button className="btn btn-primary">
                {language == 'ar' ? "إتصل الأن" : "Call Now!"}
              </button>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
