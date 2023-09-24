import React, { useState } from 'react'
import "./style.css"
import { faqsData } from '../../../data/faqsData/faqs'
import { Icon } from '@iconify/react';
import angleUpCircle from '@iconify/icons-pepicons-pencil/angle-up-circle';
import angleDownCircle from '@iconify/icons-pepicons-pencil/angle-down-circle';
import HeadingOne from '../../../components/heading_1';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function Faqs() {
    const [itemId, setItem] = useState("1");
    const language = useSelector((state) => state.language.lang);
    return (
        <section id="faqs">
            <HeadingOne label={language=='ar'?"إستفسارات حول قسم السوفتوير":"FAQ on Software Development"} />
            <div className="faqs">
                {
                    faqsData && faqsData.length ? faqsData.map((item, index) => {
                        return <div className={item.id === itemId ? "faq open" : "faq"} key={item.id} >
                            <Slide direction={"up"}>

                                <div className="question" onClick={() => setItem(item.id)}>
                                    <span>{language=='ar'?item.question_ar:item.question}</span>
                                    {item?.id === itemId ? <Icon icon={angleUpCircle} /> : <Icon icon={angleDownCircle} />}
                                </div>
                                <div className={item.id === itemId ? 'faq_answer open' : "faq_answer"}>
                                    <p> {language=='ar'?item.answer_ar:item.answer} </p>
                                </div>
                            </Slide>
                        </div>
                    }) : null
                }
            </div>
        </section>
    )
}

export default Faqs
