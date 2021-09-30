import React from "react";

const CompanyOverviewForm = () => {
    return (
        <section className="sub_content">
        <article className="overview">
            <div className="inner">
                <h3 className="tit_content" data-aos="fade-up" data-aos-duration="1500"><span>COMPANY</span> OVERVIEW</h3>
                <div className="intro_company" data-aos="fade-up" data-aos-duration="2000">
                    <h4>기본을 지키며 변화하고 발전해 가는 기업</h4>
                    <p>(주)한일파워텍은 ‘변화하는 기업’, ‘발전하는 기업’이라는 경영이념 아래<br />
                    미래에 함께 보다 나은 삶을 실현하기 위해 노력하고 있습니다.</p>
                </div>
                <table data-aos="fade-up" data-aos-duration="2500">
                    <caption>About <strong>주식회사 한일파워텍</strong></caption>
                    <tr>
                        <th>
                            <p>대표이사</p>
                            <ul data-aos="fade-right">
                                <li>대</li>
                                <li>표</li>
                                <li>이</li>
                                <li>사</li>
                            </ul>
                        </th>
                        <td data-aos="fade-left">신 서 근</td>
                    </tr>
                    <tr>
                        <th>
                            <p>설립일자</p>
                            <ul data-aos="fade-right">
                                <li>설</li>
                                <li>립</li>
                                <li>일</li>
                                <li>자</li>
                            </ul>
                        </th>
                        <td data-aos="fade-left">2007년 07월 06일 <br />[1998년 대림메탈 창업]</td>
                    </tr>
                    <tr>
                        <th>
                            <p>소재지</p>
                            <ul data-aos="fade-right">
                                <li>소</li>
                                <li>재</li>
                                <li>지</li>
                            </ul>
                        </th>
                        <td data-aos="fade-left">경남 김해시 주촌면 <br />골든루트로 80 - 80</td>
                    </tr>
                    <tr>
                        <th>
                            <p>업종</p>
                            <ul data-aos="fade-right">
                                <li>업</li>
                                <li>종</li>
                            </ul>
                        </th>
                        <td data-aos="fade-left">자동차 부품, 무역</td>
                    </tr>
                    <tr>
                        <th>
                            <p>주요제품</p>
                            <ul data-aos="fade-right">
                                <li>주</li>
                                <li>요</li>
                                <li>제</li>
                                <li>품</li>
                            </ul>
                        </th>
                        <td data-aos="fade-left">
                        자동차 부품 가공 <br />[6속 RR COVER] 외 4종
                        </td>
                    </tr>
                </table>
                <div className="visual_company_bottom pc" data-aos="fade-up" data-aos-duration="500">
                    <div className="left">
                        <div className="img_company"></div>
                        <div className="company_logo"><img src="../../asset/images/logo_c.svg" alt="로고" /></div>
                    </div>
                    <div className="right">
                        <div className="slide_rotation">
                            <ul>
                                <li className="lt"><img src="/images/visual_company01.png" alt="한일파워텍" /></li>
                                <li className="rt"><img src="/images/visual_company04.png" alt="한일파워텍" /></li>
                                <li className="lb"><img src="/images/visual_company02.png" alt="한일파워텍" /></li>
                                <li className="c"><img src="/images/visual_company03.png" alt="한일파워텍" /></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
    );
}

export default CompanyOverviewForm;