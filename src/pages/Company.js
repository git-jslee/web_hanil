import React, { useState } from 'react';
import '../css/company.css';
import CompanyOverviewForm from '../components/CompanyOverviewForm';
import CompanyHistoryForm from '../components/CompanyHistoryForm';
import CompanyOrganizaionForm from '../components/CompanyOrganizationForm';
import { GnbMenuList, SubmenuCompany } from '../components/MenuItems';

import SubMenu from '../components/SubMenu';

const Company = () => {
  const [selected, setSelected] = useState({
    name: 'overview',
    title: '회사개요',
    // name: SubmenuCompany[0].name,
    // title: SubmenuCompany[0].title,
  });

  const onClick = (clicked) => {
    setSelected(clicked);
  };

  return (
    <>
      <SubMenu
        subMenu={GnbMenuList[0].menuLists}
        onClick={onClick}
        selected={selected}
        subTitle="회사소개"
      />
      {selected.name === 'overview' ? (
        <CompanyOverviewForm />
      ) : selected.name === 'history' ? (
        <CompanyHistoryForm />
      ) : (
        <CompanyOrganizaionForm />
      )}
    </>
  );
};

export default Company;
