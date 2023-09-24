import React, { useState } from 'react';
import "./style.css";
import HeadingOne from '../../../components/heading_1';
import { Icon } from '@iconify/react';
import rocketLaunchOutline from '@iconify/icons-mdi/rocket-launch-outline';
import { Slide } from 'react-awesome-reveal';
import OrderService from '../order_service_popup';
import { useSelector } from 'react-redux';

function AboutService({ btn, service, label }) {
  const [show, setShow] = useState(false);
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  const language = useSelector((state) => state.language.lang);
  return (
    <div className="w_background">
      <section className="about" id="about_service">
        <HeadingOne
          label={language == "ar" ? "معلومات عن الخدمة" : "About Service"}
        />
        <Slide direction="up">
          <div className="about_us about_sevice">
            <h2 style={{ color: "var(--main-color-one)" }}>
              {language == "ar" ? service?.title_ar : service?.title}
            </h2>
            <p>{language == "ar" ? service?.text_ar : service?.text}</p>
          </div>
        </Slide>
        <div className="service_features">
          <HeadingOne
            label={language == "ar" ? "مميزات الخدمة" : "Services Features"}
          />
          <div className="list_features">
            {label && label.length
              ? label?.map((l_item, index) => {
                  return (
                    <Slide direction="up">
                      <div className="feature">
                        <h2>
                          {language == "ar" ? l_item?.label_ar : l_item?.label}
                        </h2>
                        <p>
                          {language == "ar" ? l_item?.text_ar : l_item?.text}
                        </p>
                      </div>
                    </Slide>
                  );
                })
              : null}
          </div>
          <OrderService
            btn={btn}
            service={service}
            label={label}
            show={show}
            setShow={setShow}
          />
          <Slide direction="up">
            <button
              className="btn btn-primary"
              style={{ padding: "10px 79px" }}
              onClick={() => setShow(true)}
            >
              {language == "ar" ? "اطلب الآن" :"Order Now"}
            </button>
          </Slide>
        </div>
      </section>
    </div>
  );
}

export default AboutService;
