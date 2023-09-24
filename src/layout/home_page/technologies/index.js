/* eslint-disable eqeqeq */
import React, {useEffect, useState} from 'react';
import HeadingOne from '../../../components/heading_1';
import {technologyData} from '../../../data/technoligies/technologyData';
import "./style.css";
import {Tilt} from 'react-tilt';
import {Icon} from '@iconify/react';
import arrowRightBroken from '@iconify/icons-solar/arrow-right-broken';
import {Slide} from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function Technologies() {
  const [category_id, setCategoryId] = useState("1");
  const [sub_category_id, setSubCategoryId] = useState(false);
  const [subCategories, setSubCategories] = useState(false);
  const [technologies, setTechnologies] = useState(false);
  useEffect(() => {
    setSubCategories(
      technologyData.categories.filter((item) => item.id == category_id)[0]
        ?.sub_categories
    );
  }, [category_id]);

  useEffect(() => {
    setTechnologies(
      technologyData.technologies.filter(
        (item) =>
          (!category_id || item.category_id === category_id) &&
          (!sub_category_id || item.sub_category_id === sub_category_id)
      )
    );
  }, [category_id, sub_category_id]);

  useEffect(() => {
    console.log(technologies);
  }, [technologies]);
  const language = useSelector((state) => state.language.lang);
  return (
    <section id="technologies">
      <div className="technologies">
        <HeadingOne
          label={
            language=='ar'?"مجموعتنا التكنولوجية المتطورة: تمكين الابتكار والأداء            ":"Our Cutting-Edge Technology Stack: Empowering Innovation and Performance"
          }
        />
        <div className="filtered_buttons">
          <div className="cates">
            {technologyData.categories && technologyData.categories?.length
              ? technologyData.categories.map((item, index) => {
                  return (
                    <Slide direction="up" key={index}>
                      <button
                        className={
                          category_id === item.id
                            ? "btn btn-primary active"
                            : "btn btn-primary"
                        }
                        key={index}
                        onClick={() => {
                          setCategoryId(item.id);
                          setSubCategoryId(false);
                        }}
                      >
                        {language=='ar'?item?.title_ar:item?.title}
                      </button>
                    </Slide>
                  );
                })
              : null}
          </div>
          <div className="sub_c">
            {subCategories && subCategories.length
              ? subCategories.map((item, index) => {
                  return (
                    <Slide direction="up" key={index}>
                      <button
                        className={
                          sub_category_id === item.id
                            ? "btn btn-primary active"
                            : "btn btn-primary"
                        }
                        key={index}
                        onClick={() => setSubCategoryId(item.id)}
                      >
                        {language=='ar'?item?.title_ar:item?.title}
                      </button>
                    </Slide>
                  );
                })
              : null}
          </div>
        </div>
        <div className="techs">
          {technologies && technologies.length
            ? technologies.map((item, index) => {
                return (
                  <Tilt key={index}>
                    <Slide direction="up" key={index}>
                      <div className="main-cont_tech" key={index} onClick={()=> window.open(item?.official_website, "_blanck")}>
                        <div className="card_tech">
                          <span
                            className="tech_logo"
                            style={{background: `${item?.alpha_color}`}}
                          >
                            {' '}
                            <img src={item?.logo} alt="" />{' '}
                          </span>
                          <h2>{language=='ar'?item?.title_ar:item?.title}</h2>
                          <div className="categoritex_tech">
                            <h5 style={{color: "var(--main-color-one)"}}>
                              {
                                language=='ar'?technologyData.categories.filter(
                                  (sub_item) => sub_item.id == item.category_id
                                )[0]?.title_ar:technologyData.categories.filter(
                                  (sub_item) => sub_item.id == item.category_id
                                )[0]?.title
                              }{' '}
                            </h5>
                          </div>
                          <div className="descp">
                            <span>{language=='ar'?item?.description_ar:item?.description}</span>
                            <span className="sol_icon">
                              <Icon icon={arrowRightBroken} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </Tilt>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
