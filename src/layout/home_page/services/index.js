import React, { useEffect, useState } from 'react';
import HeadingOne from '../../../components/heading_1';
import "./style.css";
import { servicesDAta } from '../../../data/sections_data/about';
import { Slide } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Services() {
  const [btn_id, setBtnId] = useState("1");
  const [service_data, setServiceData] = useState(false);
  useEffect(() => {
    setServiceData(
      servicesDAta?.data?.filter((item) => item?.data_id === btn_id)
    );
  }, [btn_id]);
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.lang);

  return (
    <section id="services" className="services">
      <HeadingOne
        label={
          language == 'ar'
            ? "التحسين والابتكار باستخدام اتجاهات التكنولوجيا"
            : "Improve and Innovate with the Tech Trends"
        }
      />
      <Slide direction={"up"}>
        <p style={{ margin: "20px 0", fontWeight: "300" }}>
          {language == 'ar'
            ? "نسعى في Your4 إلى تقديم أفضل وأحدث الحلول التقنية  التي تلبي تحديات الزمن وتتجاوز توقعات العملاء. ملكنا  تمتد الرؤية إلى تحقيق التميز من خلال الجودة والابتكار،  حيث أننا نجمع بين الخبرة العميقة والتخصصات المتنوعة لنقدمها  حلول مخصصة وشاملة. من بين أهمها  الخدمات البرمجية التي نقدمها هي:"
            : "At Your4, we seek to provide the best and latest technical solutions  that meet the challenges of time and exceed customer expectations. Our  vision extends to achieving excellence through quality and innovation,  as we combine deep expertise and diverse specializations to provide  customized and comprehensive solutions. Among the most important  software services we provide are:"}
        </p>
      </Slide>
      <div className="services_s">
        <div className="data_changer_c">
          <Slide direction={"up"}>
            <div className="data_changer_btns">
              {servicesDAta
                ? servicesDAta?.btns && servicesDAta?.btns?.length
                  ? servicesDAta?.btns?.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={
                            item.data_id !== btn_id
                              ? 'btn_change'
                              : "btn_change active"
                          }
                          onClick={() => setBtnId(item?.data_id)}
                        >
                          <img src={item?.logo} alt="" />
                          <h4 style={{ fontWeight: "700px", fontSize: "16px" }}>
                            {" "}
                            {language == 'ar' ? item.label_ar : item.label}{" "}
                          </h4>
                        </button>
                      );
                    })
                  : null
                : null}
            </div>
          </Slide>
        </div>
        <div className="service_box">
          {service_data
            ? service_data?.map((item, index) => {
                return (
                  <div className="service_bx" key={index}>
                    {servicesDAta?.btns
                      ?.filter((f_item, index) => {
                        return f_item.data_id === btn_id;
                      })
                      .map((r_item, index) => {
                        return (
                          <div key={index} className={'changeItem'}>
                            <img src={r_item.logo} alt="" />
                            <h4
                              style={{ fontWeight: "700px", fontSize: "16px" }}
                            >
                              {" "}
                              {language == 'ar'
                                ? r_item.label_ar
                                : r_item.label}{" "}
                            </h4>
                          </div>
                        );
                      })}
                    <Slide direction={"up"}>
                      <p>
                        {language == 'ar'
                          ? item?.text_ar || item?.text
                          : item?.text}
                      </p>{" "}
                    </Slide>

                    <HeadingOne
                      label={ language == "ar" ?servicesDAta?.btns?.filter((item, index) => {
                        return item.data_id === btn_id;
                      })[0]?.label_ar :
                        servicesDAta?.btns?.filter((item, index) => {
                          return item.data_id === btn_id;
                        })[0]?.label
                      }
                    />
                    <ul>
                      {item?.services?.map((l_item, index) => {
                        return (
                          <Slide direction={"up"} key={index}>
                            <li>
                              {!l_item?.isLink ? (
                                language == 'ar' ? (
                                  l_item?.label_ar || l_item?.label
                                ) : (
                                  l_item?.label
                                )
                              ) : (
                                <button
                                  style={{
                                    textDecoration: "underline",
                                    background: "none",
                                    border: "none",
                                    outline: "none"
                                  }}
                                  onClick={() => {
                                    navigate("/services", {
                                      state: {
                                        service_id: item?.data_id,
                                        label_id: l_item?.id,
                                        btn_id: btn_id
                                      }
                                    });
                                  }}
                                >
                                  {" "}
                                  {language == 'ar'
                                    ? l_item?.label_ar || l_item?.label
                                    : l_item?.label}{" "}
                                </button>
                              )}
                            </li>
                          </Slide>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default Services;
