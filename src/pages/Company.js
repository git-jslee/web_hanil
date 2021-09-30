import React, { useState } from 'react';
import '../css/company.css';
import CompanyOverviewForm from '../components/CompanyOverviewForm';
import CompanyHistoryForm from '../components/CompanyHistoryForm';
import CompanyOrganizaionForm from '../components/CompanyOrganizationForm'
import { SubmenuCompany } from '../components/MenuItems';

const Company = () => {
    const [linkto, setLinkto] = useState({name:'overview', title:'회사개요'});

    const onClick = (list) => {
        setLinkto(list);
    }

    return (
    <>
        <section className="area_sub_title">
            <div className="sub_title">회사소개</div>
            <div className="sub_location pc">
                <p className="home"><a href="/">HOME</a></p>
                <p className="dep1"><a href="/company">회사소개</a></p>
                <p className="dep2">{linkto.title}</p>
            </div>
        </section>
        <section className="tab_menu tab4 pc">
            <ul className="cf">
                {SubmenuCompany.map(list=>(
                    <li 
                        key={list.title} 
                        onClick={()=>onClick(list)}
                        className={list.title === linkto.title ? "on" : "" }
                    ><span>{list.title}</span></li>)
                )}
            </ul>
        </section>
        {linkto.name === 'overview' ? 
            <CompanyOverviewForm /> : 
            (linkto.name === 'history' ? <CompanyHistoryForm /> : <CompanyOrganizaionForm /> )}
        
    </>
    );
}

export default Company;
