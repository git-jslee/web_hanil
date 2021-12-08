import React, { useEffect } from 'react';
import '../css/company.css';
import CompanyOverviewForm from '../components/CompanyOverviewForm';
import CompanyHistoryForm from '../components/CompanyHistoryForm';
import CompanyOrganizaionForm from '../components/CompanyOrganizationForm';

const Company = ({ selected, onClick, match }) => {
  useEffect(() => {
    onClick({ name: 'overview', title: '회사개요' });
    console.log('==>', selected);
  }, []);

  return (
    <>
      {!selected.name || selected.name === 'overview' ? (
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
