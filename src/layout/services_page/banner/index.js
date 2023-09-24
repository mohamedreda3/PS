import React, { useEffect, useState } from 'react';
import "./style.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { servicesDAta } from '../../../data/sections_data/about';
import { useSelector } from 'react-redux';

function BannerService({ btn, service, label }) {
  const language = useSelector((state) => state.language.lang);

  return (
    <section id="homeService" style={{ background: `url(${btn?.img})` }}>
      <div className="service_identify">
        <div className="identify">
          <img src={btn?.logo} alt="" style={{ borderRadius: "5px" }} />
          <div className="service_id">
            <h2>{language !== "ar" ? service?.title : service?.title_ar}</h2>
            <p>{language !== "ar" ? service?.big_text : service?.big_text_ar}</p>
          </div>
        </div>
        <button className="btn btn-primary">
          <span>  {language !== "ar" ? "Subscribe" : "تابعنا"}</span>
        </button>
      </div>
    </section>
  );
}

export default BannerService;
