import React from 'react';
import '../css/mainCompany.css';


function MainCompany() {
    return (
        <article className="company">
        <div className="inner">
          <div className="tit_company">
            <h4>HANIL <br />POWER TECH</h4>
            <h5>기본을 지키며 변화하고 발전하다 <br />(주)한일파워텍</h5>
          </div>
          <div className="btn_company_more"><a href="/company">
            자세히 보기
          </a></div>
          <div className="list_wrap">
            <div className="list1 list_company">
              <div className="svg_wrap">
                <img src="../asset/images/company_01_2.svg" alt="자동화 시스템" className="move" />
                <img src="../asset/images/company_01.svg" alt="자동화 시스템" className="bg" />
              </div>
              <dl className="list_dl">
                <dt className="list_dt">자동화 시스템</dt>
                <dd className="list_dd">생산성 개선과 불량률 감소<br />똑똑해진 제조 과정</dd>
              </dl>
            </div>
            <div className="list2 list_company">
              <div className="svg_wrap">
                <img src="../asset/images/company_02_2.svg" alt="품질관리" className="move" />
                <img src="../asset/images/company_02.svg" alt="품질관리" className="bg" />
              </div>
              <dl className="list_dl">
                <dt className="list_dt">품질관리</dt>
                <dd className="list_dd">품질 관리 시스템<br />고객에게 완벽한 제품 서비스</dd>
              </dl>
            </div>
            <div className="list3 list_company">
              <div className="svg_wrap">
                <div className="wrap_move">
                  <img src="../asset/images/company_03_2.svg" alt="소재 가공" className="move" />
                </div>
                <img src="../asset/images/company_03_3.svg" alt="소재 가공" className="move2" />
                <img src="../asset/images/company_03.svg" alt="소재 가공" className="bg" />
              </div>
              <dl className="list_dl">
                <dt className="list_dt">소재 가공</dt>
                <dd className="list_dd">경쟁력 있는 원가 구조<br />고부가 가치품 시장 점유</dd>
              </dl>
            </div>
          </div>
        </div>
      </article>
    )
}

export default MainCompany
