import React from 'react';
import "./style.css";
import HeadingOne from '../../../components/heading_1';
import { Icon } from '@iconify/react';
import rocketLaunchOutline from '@iconify/icons-mdi/rocket-launch-outline';
import { Slide } from 'react-awesome-reveal';
import projectOutlined from '@iconify/icons-eos-icons/project-outlined';
import darkSquad from '@iconify/icons-game-icons/dark-squad';
import appsBackupRestore from '@iconify/icons-arcticons/apps-backup-restore';
import happyOutline from '@iconify/icons-healthicons/happy-outline';
import earthLineDuotone from '@iconify/icons-solar/earth-line-duotone';
import { useSelector } from 'react-redux';

function About() {
  const language = useSelector((state) => state.language.lang);
  return (
    <div className="w_background">
      <section className="about" id="about">
        <HeadingOne label={language=='ar'?"عنا":"About Us"} />
        <p>
          {language=='ar'?"تأسست Your4 في ​​عام 2023 على يد مجموعة من الخبراء الشباب في هذا المجال  لتطوير البرمجيات. وهي تتمتع اليوم بمكانة مرموقة  واحدة من أبرز الشركات التي تقدم خدمة شاملة  الحل في مجال الحلول البرمجية والتسويق  الاستراتيجيات، حيث أنها تفعل ذلك من خلال وحدات متكاملة تدير كل شيء  جوانب أعمالها من خلال الوسائط الرقمية.":"Your4 was founded in 2023 by a group of young experts in the field  of software development. Today, it enjoys a prominent position as  one of the most prominent companies that provides a comprehensive  solution in the field of software solutions and marketing  strategies, as it does so through integrated units that manage all aspects of its business through digital media."}
        </p>
        <div className="about_us">
          <div className="text_left">
            <Slide direction={"left"}>
              <h1 style={{ fontSize: "40px" }}>
                <span style={{ color: "var(--main-color-one)" }}>
                  {" "}
                  {language=='ar'?"خبره":"Experience"}{" "}
                </span>{" "}
                {language=='ar'?"تطوير المنتجات رشيقة على مستوى عالمي":"World-class Agile Product Development"}
              </h1>
              <p style={{ fontWeight: "300" }}>
                {language=='ar'?"من خلال التزامنا المستمر بأداء المهام الرئيسية مع  التميز، وقد قام فريقنا المتميز بتنفيذه بنجاح  المشاريع التقنية المعقدة وحققتها ضمن بدقة  جداول زمنية محددة. لقد كرسنا دائما لتقديم  خدمة عملاء استثنائية تتجاوز التوقعات، في  بالإضافة إلى تقديم الدعم الشامل لعملائنا.  وهذا بدوره ساهم في بناء أعمال تجارية طويلة الأمد  علاقات مبنية على الثقة والاحترام مع شركائنا الكرام  عملاء.":"Through our constant commitment to performing key tasks with  excellence, our distinguished team has successfully implemented  complex technical projects and achieved them within the strictly  defined timelines. We have always been dedicated to providing  exceptional customer service that exceeds expectations, in  addition to providing comprehensive support to our customers.  This, in turn, contributed to building long-term business  relationships based on trust and respect with our valued  customers."}
              </p>
              <p style={{ fontWeight: "300" }}>
                {language=='ar'?"نعتزم دائمًا تقديم الدعم المتكامل للشركات و  أصحاب الأعمال، وذلك لمساعدتهم على تحقيق النجاح  أهدافها. ونحن نشارك رحلتهم خطوة بخطوة معهم، و  نسعى جاهدين لإنشاء حلول إبداعية تعزز تفوقهم  منافسيهم في أسواقهم.":"We always intend to provide integrated support to companies and  business owners, in order to help them successfully achieve  their goals. We share their journey step by step with them, and  strive to create creative solutions that enhance their edge over their competitors in their market."}
              </p>
              <h2>{language=='ar'?"لنبدأ مشروعًا جديدًا معًا":"Let's Start a New Project Together"}</h2>
              <button
                className="btn btn-primary"
                style={{
                  width: "fit-content",
                  padding: "15px",
                  background: "transparent",
                  color: "black"
                }}
              >
                {language=='ar'?"طلب عرض أسعار":"Request A Qoute"}
              </button>
            </Slide>
          </div>
          <div className="right_about">
            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={rocketLaunchOutline} />
                </div>
                <h3>+12</h3>
                <p className="text_about_right">{language=='ar'?"سنوات خبرة":"Years Experience"}</p>
              </div>
            </Slide>
            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={darkSquad} />
                </div>
                <h3>+250</h3>
                <p className="text_about_right">{language=='ar'?"فرقة الموهوب":"Talented Squad"}</p>
              </div>
            </Slide>
            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={projectOutlined} />
                </div>
                <h3>100%</h3>
                <p className="text_about_right">{language=='ar'?"المشاريع التي تم تسليمها":"Projects Delivered"}</p>
              </div>
            </Slide>

            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={earthLineDuotone} />
                </div>
                <h3>50+</h3>
                <p className="text_about_right">{language=='ar'?"الدول المخدومة":"Countries Served"}</p>
              </div>
            </Slide>

            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={happyOutline} />
                </div>
                <h3>100%</h3>
                <p className="text_about_right">{language=='ar'?"رضا العملاء":"Client Satisfaction"}</p>
              </div>
            </Slide>
            <Slide direction={"right"}>
              <div className="about_shape">
                <div className="icon">
                  <Icon icon={appsBackupRestore} />
                </div>
                <h3>+1200</h3>
                <p className="text_about_right">{language=='ar'?"التطبيقات المطورة":"Apps Developed"}</p>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
