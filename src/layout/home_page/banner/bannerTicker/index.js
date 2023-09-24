import React, { useEffect } from 'react'
import "./style.css"
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

function BannerTicker() {
  const language = useSelector((state) => state.language.lang);
    useEffect(() => {
        var ticker = document.querySelector('.ticker'),
            list = document.querySelector('.ticker__list'),
            clone = list.cloneNode(true)
        ticker.append(clone)
    }, []);

    return (
        <div className="smallTicker">
            <h2>{language=='ar'?"بعض من":"Some Of Our"} <span style={{ color: "var(--main-color-one)" }}>{language=='ar'?"عملائنا":"Clients"} </span></h2>
            <div className="ticker">

                <div className="ticker__list">

                    <div className="ticker__item">

                        <img src="https://www.scnsoft.com/testimonials-logos/anydesk-logo.svg" alt="" />

                    </div>

                    <div className="ticker__item">

                        <img src="https://www.scnsoft.com/---home-page-illustrations/clients/nasa_1.svg" alt="" />


                    </div>

                    <div className="ticker__item">

                        <img src="https://www.scnsoft.com/---home-page-illustrations/clients/nestle.svg" alt="" />

                    </div>

                    <div className="ticker__item">

                        <img src="https://www.scnsoft.com/---home-page-illustrations/clients/ibm.svg" alt="" />

                    </div>


                    <div className="ticker__item">

                        <img src="https://www.scnsoft.com/---home-page-illustrations/clients/tietoevry-logo.svg" alt="" />

                    </div>

                </div>

            </div>
        </div>

    )
}

export default BannerTicker
