import React from 'react';
import "./style.css";
import HeadingOne from "../../../components/heading_1";
import { Icon } from '@iconify/react';
import arrowRightBroken from '@iconify/icons-solar/arrow-right-broken';
import { blog } from '../../../data/blog/blog';
import { Tilt } from 'react-tilt';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function Blog() {
  const language = useSelector((state) => state.language.lang);
  return (
    <section id="blog">
      <HeadingOne label={language=='ar'?"إستكشف مدوناتنا":"Explore Our Blog"} />
      {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xF04-IA2OV4igqhQo5MuRPLjlqvZdsU&ehbc=2E312F" width="640" height="480"></iframe> */}
      <div className="blog_posts">
        {blog && blog.length
          ? blog.map((item, index) => {
              if (index < 3) {
                return (
                  <Tilt key={index}>
                    <Slide direction={"up"}>
                      <div className="blog_post">
                        <img src={item.img} alt="" />
                        <span style={{ color: "#C0A975" }}>
                          {item.department}
                        </span>
                        <h3 className="b_title">{language=='ar'?item.label_ar:item.label}</h3>
                        <div
                          className="b_description"
                          style={{ display: "flex" }}
                        >
                          <p> {language=='ar'?item.description_ar:item.description} </p>
                          <span style={{ cursor: 'pointer' }}>
                            {" "}
                            <Icon
                              icon={arrowRightBroken}
                              color="var(--main-color-one)"
                            />{" "}
                          </span>
                        </div>

                        <div className="b_bot">
                          <div className="sliding_b">
                            <span>{language=='ar'?"تابع القراءة":"Keep Reading"}</span>
                          </div>

                          <span className="sol_icon">
                            <Icon icon={arrowRightBroken} />
                          </span>
                        </div>
                      </div>
                    </Slide>
                  </Tilt>
                );
              }
            })
          : null}
      </div>
      <button className="btn btn-primary">
        <span>{language=='ar'?"جميع مقالات المدونات":"All Blogs Articles"}</span>
      </button>
    </section>
  );
}

export default Blog;
