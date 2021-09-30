import React, { useState } from 'react';
import { SubmenuNotice } from '../components/MenuItems';
import '../css/notice.css';

const Notice = () => {
    const [linkto, setLinkto] = useState({id: 'Notice', name:'Notice', title:'공지사항'});

    const onClick = (list) => {
        setLinkto(list);
    }

    return(
        <>
        <section className="area_sub_title">
            <div className="sub_title">고객센터</div>
            <div className="sub_location pc">
                <p className="home"><a href="/">HOME</a></p>
                <p className="dep1"><a href="/company">회사소개</a></p>
                <p className="dep2">{linkto.title}</p>
            </div>
        </section>
        <section className="tab_menu tab3 pc">
            <ul className="cf">
                {SubmenuNotice.map(list=>(
                    <li 
                        key={list.title} 
                        onClick={()=>onClick(list)}
                        className={list.title === linkto.title ? "on" : "" }
                    ><span>{list.title}</span></li>)
                )}
            </ul>
        </section>
        <div id="bo_btn_top"></div>
        <ul id="gall_ul">

        </ul>
        </>
    )
}

export default Notice;