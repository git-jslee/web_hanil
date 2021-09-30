import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/mainSlider.css';


function MainSlider() {
    const slickSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:2000,
        arrows: false,
        dots: true,
        pauseOnHover: false
    } 

    return (
        <>
        <section id="mainSlider">
            <div className="swiper-container">
                <Slider {...slickSettings} >
                    <div className="swiper-slide mainSlider">
                        <img src='../images/visual_ms01.png' alt="ms01" />
                        {/* <div className="area_text">
                            <p className="tit_sub">기본을 지키며 변화하고 발전하다</p>
                            <p className="tit_main">hanil power tech</p>
                            <p className="btn_ms_company"><a href="/ko/company/company.php">COMPANY</a></p>
                        </div> */}
                    </div>
                    <div className="swiper-slide">
                        <img src='../images/visual_ms02.png' alt="ms02" />
                        {/* <div class="area_text">
                            <p class="tit_sub">기본을 지키며 변화하고 발전하다2</p>
                            <p class="tit_main">hanil power tech</p>
                            <p class="btn_ms_company"><a href="/ko/company/company.php">COMPANY</a></p>
                        </div> */}
                    </div>
                    <div className="swiper-slide">
                        <img src='../images/visual_ms03.png' alt="ms03" />
                        {/* <div class="area_text">
                            <p class="tit_sub">기본을 지키며 변화하고 발전하다3</p>
                            <p class="tit_main">hanil power tech</p>
                            <p class="btn_ms_company"><a href="/ko/company/company.php">COMPANY</a></p>
                        </div> */}
                    </div>
                </Slider>
            </div>
        </section>
        </>
    )
}

export default MainSlider
