import React from 'react';
import GetListFromApi from '../components/GetListFromApi';
import '../css/notice.css';

const Notice = () => {
  return (
    <>
      <div id="bo_btn_top"></div>
      <ul>
        <GetListFromApi query="notices" />
      </ul>
    </>
  );
};

export default Notice;
