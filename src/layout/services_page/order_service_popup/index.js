import React from 'react';
import "./style.css";
import { Icon } from '@iconify/react';
import closeBig from '@iconify/icons-vaadin/close-big';
import { useSelector } from 'react-redux';
function OrderService({ service, label, btn, show, setShow }) {
  const language = useSelector((state) => state.language.lang);
  return (
    <div className="order_popup" style={{ left: show ? "0px" : "-100%" }}>
      <Icon
        icon={closeBig}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "2%",
          right: "1%",
          fontSize:"27px"
        }}
        onClick={() => setShow(false)}
      />
      <div class="popup-body">
        <div class="tour-title">
          <div class="img">
            <img src={btn?.logo} alt="" />
          </div>
          <div class="tour-name">{language == "ar" ? service?.title_ar :service?.title}</div>
        </div>
        <div class="tour-info"></div>
        <div class="form">
          <input type="text" class="input" placeholder={language == "ar" ?"اسمك":"Your Name"} />
          <input type="email" class="input" placeholder={language == "ar" ?"بريدك الالكتروني":"Your Email"} />
          <input type="tel" class="input" placeholder={language == "ar" ?"رقم الموبايل الخاص بك":"Your Number Phone"} />
          <textarea
            class="textarea"
            placeholder={language == "ar" ? "أدخل العنوان الخاص بك":"Where are your address?"}
          ></textarea>
          <textarea class="textarea" placeholder={language == "ar" ? "رسائل أو ملاحظات" :"Messages Or Notes:"}></textarea>
          <button class="submit button js-submit">{language == "ar" ? "اطلب الآن" :"Order Now"}</button>
        </div>
      </div>
    </div>
  );
}

export default OrderService;
