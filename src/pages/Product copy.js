import React, { useState } from 'react';
import { SubmenuProduct } from '../components/MenuItems';
import ProductList2 from '../components/ProductList2';
import '../css/product.css';
import SubMenu from '../components/SubMenu';

const Product = () => {
  const [linkto, setLinkto] = useState({
    id: 'EngineParts',
    name: 'Engine Parts',
    title: 'Engine Parts',
  });

  const onClick = (list) => {
    setLinkto(list);
  };

  return (
    <>
      <SubMenu subMenu={SubmenuProduct} />
      <section class="area_sub_title">
        <div class="sub_title">제품소개</div>
        <div class="sub_location pc">
          <p class="home">
            <a href="/ko/index.php">HOME</a>
          </p>
          <p class="dep1">제품소개</p>
          <p class="dep2">{linkto.title}</p>
        </div>
      </section>
      <section className="tab_menu tab5 pc">
        <ul className="cf">
          {SubmenuProduct.map((list) => (
            <li
              key={list.title}
              onClick={() => onClick(list)}
              className={list.title === linkto.title ? 'on' : ''}
            >
              <span>{list.title}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="sub_content">
        <article>
          <div className="inner">
            <h3 className="tit_content">{linkto.title}</h3>
            <div className="pd_wrap">
              <ul>
                <ProductList2 click={linkto.id} />
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Product;
