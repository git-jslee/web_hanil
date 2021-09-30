import React from 'react';
import '../css/client.css';

function Client() {
    return (
    <article className="client">
        <div className="inner">
            <p className="txt_client">우리의 소중한 고객입니다.</p>
            <ul className="list_client">
                <li><img src="/images/visual_client01.png" alt="daelim" /></li>
                <li><img src="/images/visual_client02.png" alt="korens" /></li>
                <li><img src="/images/visual_client03.png" alt="gmb" /></li>
                <li><img src="/images/visual_client04.png" alt="sekwang" /></li>
            </ul>
        </div>
    </article>
    )
}

export default Client
