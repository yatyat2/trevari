export default class faqheader extends React.Component {
    render() {
    return (
     
      <div id="qnacategory">
        <div id="qnatext">
            더 궁금하신 사항은 contact@trevari.co.kr로 문의주세요 :)
            <br/>- 회신가능요일: 수~일
        </div>
        
        <div id="buttongroup">
            <button id={this.props.selectedCategory=='북클럽' ? "qnabuttonactive" : "qnabutton"} onClick={this.props.handleChangeCategory("북클럽")}>북클럽</button>
            <button id={this.props.selectedCategory=='신청/환불' ? "qnabuttonactive" : "qnabutton"} onClick={this.props.handleChangeCategory("신청/환불")}>신청/환불</button>
        </div>
        
        <style jsx>
        {`
        #qnabuttonactive {
            background-color:orange;
            border:1px solid orange;
            color:white;
            border-radius:5px;
            padding:6px 12px 6px 12px;
            margin:6px;
            outline: none;
        }

        #qnabutton {
            background-color:white;
            border:1px solid orange;
            color:orange;
            border-radius:5px;
            padding:6px 12px 6px 12px;
            margin:6px;
            outline: none;
        }
        #qnabutton:visited {
            color:white;
            background-color:orange;
        }
        

        #qnatext {
            margin:0px 0px 20px 0px;
            text-align:center;
            font-size:1rem;
            padding:0px 30px 0px 30px;
        }

        #buttongroup {
            text-align:center;
        }
        `}
        </style>
      </div>
    );
  }
}
