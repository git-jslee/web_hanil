import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
    <footer>
        <div className="inner">
            <div className="logo_footer">주식회사 한일파워텍</div>
            <address>경남 김해시 주촌면 골든루트로 80 - 80</address>
            <div className="number">
                <p><span>Tel.</span> 055-312-7013~4</p>
                <p><span>Fax.</span> 055-312-7015</p>
            </div>
            <div className="copyright">
            COPYRIGHT ⓒ <strong>HANIL POWER TECH</strong> All rights reserved.
            </div>
        </div>
    </footer>
    )
}

export default Footer
