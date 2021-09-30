import React, { useState } from 'react';
import '../css/company.css';
// import CompanyOverviewForm from '../components/CompanyOverviewForm';
import CompanyHistoryForm from '../components/CompanyHistoryForm';
import { SubmenuCompany } from '../components/MenuItems';

const Company = () => {
    const [linkto, setLinkto] = useState('overview');
    const lists = [
        {

    }]

    const onClick = (e) => {
        console.log(e.target);
        // setLinkto(e.target.value);
    }

    return (
    <>
        <section className="area_sub_title">
            <div className="sub_title">회사소개</div>
            <div className="sub_location pc">
                <p className="home"><a href="/">HOME</a></p>
                <p className="dep1"><a href="/company">회사소개</a></p>
                <p className="dep2">회사개요</p>
            </div>
        </section>
        <section className="tab_menu tab4 pc">
            <ul className="cf">
                <li className="" onClick={onClick}><span>회사개요</span></li>
                <li><a href="/company">연혁</a></li>
                <li><a href="/company">조직도</a></li>
                <li><a href="/company">인증현황</a></li>
            </ul>
        </section>
        <CompanyHistoryForm />
    </>
    );
}

export default Company;