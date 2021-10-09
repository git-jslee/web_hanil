import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ subMenu, onClick, selected, subTitle }) => {
  return (
    <div className="sub-menu">
      <section className="area_sub_title">
        <div className="sub_title">{subTitle}</div>
        <div className="sub_location pc">
          <p className="home">
            <Link to="/">HOME</Link>
          </p>
          <p className="dep1">{subTitle}</p>
          <p className="dep2">{selected.title}</p>
        </div>
      </section>
      <section className="tab_menu tab5 pc">
        <ul className="cf">
          {subMenu.map((list) => (
            <li
              key={list.title}
              onClick={() => onClick(list)}
              className={list.title === selected.title ? 'on' : ''}
            >
              <span>{list.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SubMenu;
