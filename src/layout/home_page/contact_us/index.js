import React from 'react'
import "./style.css"
import phoneIcon from '@iconify/icons-mdi-light/phone';
import HeadingOne from '../../../components/heading_1'
import { Icon } from '@iconify/react';
import arrowRightBroken from '@iconify/icons-solar/arrow-right-broken';
import emailTwotone from '@iconify/icons-line-md/email-twotone';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function ContactUs() {
  const language = useSelector((state) => state.language.lang);
    return (
        <section id='contact_form'>
            <HeadingOne label={language=='ar'?"هل تحتاج إلى استشارة؟":"Need a Consultation?"} />
            <p>{language=='ar'?"ترك لنا خطا! نحن هنا للإجابة على أسئلتك 24/7.":"Drop us a line! We are here to answer your questions 24/7."}</p>
            <div className="contact_us">
                <form action="#">
                    <Slide direction='up'>

                        <div className="form_t">
                            <input type="text" placeholder={language=='ar'?"الاسم بالكامل":'Full Name'} />
                            <input type="text" placeholder={language=='ar'?"الشركه":"Company"} />
                            <input type="text" placeholder={language=='ar'?"البريد الإلكترونى":"Email"} />
                            <input type="text" placeholder={language=='ar'?"رقم الهاتف":"Phone"} />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder={language=='ar'?"كيف يمكننا مساعدتك":"How Can We Help You?"}></textarea>
                        <button className='btn btn-primary'>{language=='ar'?"إرسال رساله":"Send Message"}</button>
                    </Slide>
                </form>
                <div className="contact_data">
                    <Slide direction='up'>
                        <div className="details_c">
                            <div className="contact_d">
                                <h5>{language=='ar'?"تفاصيل التواصل معنا":"Our contact details"}</h5>
                                <div className="footer_p">
                                    <Icon icon={phoneIcon} />
                                    <div className="info">
                                        <a href="tel:+00966503594299">+00966503594299</a>
                                    </div>
                                </div>
                                <div className="footer_p">
                                    <Icon icon={emailTwotone} />
                                    <div className="info">
                                        <a href="mailto:info@yourfour.sa">info@yourfour.sa</a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact_d">
                                <h5>{language=='ar'?"إرسال إستفسار":"Press inquires"}</h5>
                                <div className="footer_p">
                                    <Icon icon={emailTwotone} />
                                    <div className="info">
                                        <a href="/" target="_blanck">
                                            <span>  {language=='ar'?"إبقى على تواصل معنا":"GET IN TOUCH WITH US"} </span>
                                            <Icon icon={arrowRightBroken} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
