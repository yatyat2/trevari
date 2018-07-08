import Link from 'next/link'

export default () =>(
    <div id="footer">
        <div id="QNA"><Link href="./cs"><a>자주 묻는 질문 & 공지사항</a></Link></div>
        <div id="vision">세상을 더 지적으로 사람들을 더 친하게</div>
        <div id="linktext">
            <a>이용약관</a><br/>      
        </div>
        <div id="linktext">
            <a>개인정보 취급방침</a>
        </div>

        <div id="text">트레바리 | 대표: 윤수영 | 사업자 등록번호: 195-40-00129 | 주소: 서울특별시 강남구 압구정로28길 22-11, 404호
</div>
        <div id="text">전화: 070-7799-9708 | E-mail: contact@trevari.co.kr
</div>
        <div id="text">Copyright © 2018 Trevari. All rights reserved.</div>

        <style jsx>
        {`
        div#QNA {
            background-color:orange;
            z-index:100;            
            padding:6px 12px 6px 12px;
            border:1px solid orange;
            border-radius:5px 5px 5px 5px;
            margin-bottom:32px;
            text-align:center;
            text-decoration:none;

        }

        #QNA > a {
            color:white;
        }

        #footer {
            background-color:rgba(220,220,220,0.3);
            padding-top:10px;
            padding:8px 16px 8px 16px;
        }

        #linktext {
            font-size:14px;
            // padding:8px 16px 8px 16px;
            margin-bottom:8px;
        }

        #vision {
            font-weight:bold;
            margin-bottom:32px;
        }
        `}
        </style>
    </div>

)