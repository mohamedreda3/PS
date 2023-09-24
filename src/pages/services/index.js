import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/default_layout';
import Services from '../../layout/home_page/services';
import BannerService from '../../layout/services_page/banner';
import { servicesDAta } from '../../data/sections_data/about';
import { useLocation, useNavigate } from 'react-router-dom';
import AboutService from '../../layout/services_page/about';
import OrderService from '../../layout/services_page/order_service_popup';

function ServiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceId = location.state.service_id;
  const labelId = location.state.label_id;
  const btnId = location.state.btn_id;
  const [service, setService] = useState(false);
  const [btn, setBtn] = useState(false);
  const [label, setLabel] = useState(false);
  useEffect(() => {
    setBtn(servicesDAta?.btns?.filter((item) => item?.data_id == btnId)[0]);
  }, []);
  useEffect(() => {
    setService(
      servicesDAta?.data?.filter((item) => item?.data_id == serviceId)[0]
    );
  }, [btn]);
  useEffect(() => {
    setLabel(service?.services);
  }, [service]);

  if (!location?.state?.service_id) {
    navigate("/");
  }
  return (
    <DefaultLayout
      className={"services"}
      id={"headerPage"}
      children={
        <>
          <BannerService btn={btn} service={service} label={label} />
          <AboutService btn={btn} service={service} label={label} />
        </>
      }
    />
  );
}

export default ServiceDetails;
