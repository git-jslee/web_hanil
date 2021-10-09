import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/siteHeader.css';
// import { ReactComponent as LogoSVG } from '../images/logo.svg';
import { GnbMenuList } from './MenuItems';
import DropdownForm from './DropdownForm';

const SiteHeader = ({ isSub }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header
      className={
        navbar ? 'site-header scOn' : isSub ? 'site-header sub' : 'site-header'
      }
    >
      <div className="inner">
        <div className="logo_header">
          <Link to="/">{/* <LogoSVG width="170px" height="58px" /> */}</Link>
        </div>
        <nav className="gnb pc">
          <h2>메인메뉴</h2>
          <ul>
            {GnbMenuList.map((list) => (
              <DropdownForm
                key={list.name}
                name={list.name}
                linkto={list.linkto}
                menuLists={list.menuLists}
              />
            ))}
          </ul>
        </nav>
        <div className="utill pc">
          <div className="lang">
            <h2>언어선택</h2>
            <ul>
              <li class="on">
                <a href="/ko/index.php">KOR</a>
              </li>
              <li>
                <a href="/en/index.php">ENG</a>
              </li>
              <li>
                <a href="/jp/index.php">JPN</a>
              </li>
            </ul>
          </div>
          <div className="btn_siteMap">
            <div>
              <span>사이트맵 버튼</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
