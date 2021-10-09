import React, { useState } from 'react';
import GetListFromApi from '../components/GetListFromApi';
import { SubmenuNotice } from '../components/MenuItems';
import '../css/notice.css';
import SubMenu from '../components/SubMenu';

const Notice = () => {
  const [selected, setSelected] = useState({
    id: SubmenuNotice[0].id,
    name: SubmenuNotice[0].name,
    title: SubmenuNotice[0].title,
  });

  const onClick = (clicked) => {
    setSelected(clicked);
  };

  return (
    <>
      <SubMenu
        subMenu={SubmenuNotice}
        onClick={onClick}
        selected={selected}
        subTitle="고객센터"
      />
      <div id="bo_btn_top"></div>
      <ul>
        <GetListFromApi query="notices" />
      </ul>
    </>
  );
};

export default Notice;
