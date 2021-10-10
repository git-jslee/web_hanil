import React, { useEffect } from 'react';
import ProductList2 from '../components/ProductList2';
import '../css/product.css';

const Product = ({ selected, onClick }) => {
  // const [selected, setSelected] = useState({
  //   id: SubmenuProduct[0].id,
  //   name: SubmenuProduct[0].name,
  //   title: SubmenuProduct[0].title,
  // });

  // const onClick = (clicked) => {
  //   setSelected(clicked);
  // };

  useEffect(() => {
    onClick({ id: 'EngineParts', name: 'Engine Parts', title: 'Engine Parts' });
    console.log('==>', selected);
  }, []);

  return (
    <>
      {/* <SubMenu
        subMenu={SubmenuProduct}
        onClick={onClick}
        selected={selected}
        subTitle="제품소개"
      /> */}
      <section className="sub_content">
        <article>
          <div className="inner">
            <h3 className="tit_content">{selected.title}</h3>
            <div className="pd_wrap">
              <ul>
                <ProductList2 click={selected.id} />
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Product;
