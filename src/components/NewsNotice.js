import React from 'react'
import '../css/newsnotice.css'

function NewsNotice() {
    return (
        <article className="news_notice">
            <div className="inner">
            <h3 className="tit_nn tit">News <span> Notice</span></h3>
            <div className="news">
                <div className="latest_wr">
                {/* 사진최신글 */}
                </div>
            </div>
            <p className="btn_news_more"><a href="/board/bbs/board.php?bo_table=news_ko" >회사 소식 더보기</a></p>
            <div className="wrap_notice">
                <div className="notice bundle">
                    <a href="/board/bbs/board.php?bo_table=notice_ko" >
                        <div className="icon">공지사항</div>
                        <div className="des">
                            <p className="dt">공지사항</p>
                            <p className="dd">정보들을 공지사항을 <br />통해 확인하세요.</p>
                        </div>
                    </a>
                </div>
                <div className="questions bundle">
                    <a href="/ko/cs/inquiry.php">
                        <div className="icon">온라인 문의</div>
                        <div className="des">
                            <p className="dt">온라인 문의</p>
                            <p className="dd">문의사항을 남겨주시면 <br />친절히 답변 드리겠습니다.</p>
                        </div>
                    </a></div>
                <div className="directions bundle">
                    <a href="/ko/cs/directions.php" >
                        <div className="icon">오시는 길</div>
                        <div className="des">
                            <p className="dt">오시는 길</p>
                            <p className="dd">찾아오시는 쉽고 <br />빠른 길을 알려 드립니다.</p>
                        </div>
                    </a></div>
                </div>
            </div>
        </article>
    )
}

export default NewsNotice
