import Searchfrom from './Searchform'


export default () =>(
    <div id="search">
        <div id="text">내 일정에 맞는 놀러가기 클럽을 찾으신다면?</div>
        <div id="calendar">독서모임 전체 일정 캘린더 바로가기</div>

        <style jsx>
        {`
        #text {
            color:gray;
            font-size:14px;
            margin-bottom:4px;
        }

        #search {
            padding:10px
        }

        #calendar {
            background-color:orange;
            text-align:center;
            color:white;
            fonrt-weight:blod;
            padding:6px 12px 6px 12px;
            border:1px solid orange;
            border-radius:5px 5px 5px 5px;
            margin-bottom:16px;
        }
        `}
        </style>
    </div>
)

