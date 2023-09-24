import React from 'react';
import "./style.css";
import { Icon } from '@iconify/react';
import arrowRightBroken from '@iconify/icons-solar/arrow-right-broken';
import { sol } from '../../../data/solutions/sol';
import { Slide } from 'react-awesome-reveal';
import HeadingOne from "../../../components/heading_1";
import { useSelector } from 'react-redux';
function    Solutions() {
  const language = useSelector((state) => state.language.lang);
  return (
    <>
      <div className="s_background">
        <div className="technical_support">
          <div className="text_ts">
            <HeadingOne label={language=='ar'?"استكشاف الأخطاء وإصلاحها والمساعدة":"Troubleshooting and Assistance"} />
            <Slide direction="up">
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                  fontFamily:"300"
                }}
              >
                {
                  language=='ar'?"كفريق متخصص في حلول الأعمال، نحن نساعد بنشاط  يمكنك تحقيق النمو المستدام لعملك. نحن نقدم لك  لدينا خبرة ومعرفة عميقة في مجال الأعمال والتسويق  دعم رؤية عملك وأهدافك.  من خلال التحليل الدقيق  لسوق منافسيك، نحن نقدم لك منتجات مخصصة  الاستراتيجيات التي تساعد على تحسين تواجدك في السوق وزيادته  سمعتك. سواء كنت بحاجة إلى تطوير وتحسين الخاص بك  الواجهة الرقمية، أو توسيع قاعدة عملائك، أو تحسين موقعك  التفاعل مع الجمهور، ونحن هنا لإرشادك نحو  الحلول الأمثل. نحن نقدم استشارات مخصصة على أساس  على أهدافك وميزانيتك، وكذلك تطوير التسويق  استراتيجيات وأساليب تحسين الأداء لتحقيقها  نتائج ملموسة. نحن شركاؤك في رحلة  النجاح، ونحن نعمل جنبا إلى جنب معكم لتحقيق النمو و  زيادة العائد على الاستثمار الخاص بك.  دعونا نعمل معا ل  بناء مستقبل أفضل لعملك وتحقيق أهدافك  اهداف العمل.":"As a team specialized in business solutions, we actively help  you achieve sustainable growth for your business. We offer you  our deep business and marketing experience and knowledge to  support your business vision and goals.   Through careful analysis  of your competitors' market, we provide you with customized  strategies that help improve your market presence and increase  your reputation. Whether you need to develop and improve your  digital interface, expand your customer base, or improve your  interaction with the public, we are here to guide you towards  the optimal solutions. We provide customized consultations based  on your goals and budget, as well as developing marketing  strategies and performance improvement techniques to achieve  tangible results. We are your partners in the journey of  success, and we work side by side with you to achieve growth and  increase the return on your investment.   Let's work together to  build a better future for your business and achieve your  business goals."
                }
              </p>
            </Slide>
          </div>
          <video
            src={require("../../../assets/videos/Home-Video.mp4")}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <section id="solutions">
          <h1>{language=='ar'?"حلول نقدمها":"Solutions We Deliver"}</h1>
          <p>
            {language=='ar'?"نحن نقوم بتمكين جميع أنواع التفاعلات B2B وB2C والداخلي  عمليات.":"We IT-enable all kinds of B2B, B2C interactions and internal operations."}
          </p>
          <div className="solutions">
            <Slide direction={"up"}>
              {sol && sol.length
                ? sol.map((item, index) => {
                    return (
                      <div className="solution_bx" key={index}>
                        <h5>{language=='ar'?item?.label_ar:item?.label}</h5>
                        <span className="sol_icon">
                          <Icon icon={arrowRightBroken} />
                        </span>
                      </div>
                    );
                  })
                : null}
            </Slide>
          </div>
        </section>
      </div>
    </>
  );
}

export default Solutions;
