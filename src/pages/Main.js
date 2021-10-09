import React from 'react';
import MainSlider from '../components/MainSlider';
import MainProduct from '../components/MainProduct';
import MainCompany from '../components/MainCompany';
import Equipment from '../components/Equipment';
import Client from '../components/Client';
import NewsNotice from '../components/NewsNotice';

const Main = () => {
  return (
    <>
      <MainSlider />
      <section id="container">
        <MainProduct />
        <MainCompany />
        <Equipment />
        <Client />
        <NewsNotice />
      </section>
    </>
  );
};

export default Main;
