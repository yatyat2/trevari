import Question from '../components/Question'

export default class faqheader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category:null,
            qnadata:[
                {category:'북클럽',question:'트레바리 전체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리  더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리 전체 일정을하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리 전체 일정을 더 편하게 고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리 전체 일정을 더게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리 전체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리  일정을 더 편하게고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레리 전체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'트레바리 전체 일정을 더 편하보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'바리 전체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
              ]
        };
    }

    renderQuestion(){
        if(this.state.category == '북클럽')
        {   
            this.state.qnadata.map((step)=>{
                return <div>ads</div>
            }
            
        )
           
            // (<Question ={step.category} question={step.question} answer={step.answer}/>);

        }else if(this.state.category =='신청/환불'){
            return <Question></Question>
        }else if(this.state.category =='독후감'){
            return <Question></Question>
        }else if(this.state.category =='놀러가기'){
            return <Question></Question>
        }else if(this.state.category =='이벤트'){
            return <Question></Question>
        }else if(this.state.category =='아지트'){
            return <Question></Question>
        }
                    
    }

    render() {
    return (
        
     
      <div id="qnacategory">
        <div id="qnatext">
        더 궁금하신 사항은 contact@trevari.co.kr로 문의주세요 :)
        <br/>- 회신가능요일: 수~일
        </div>
        
        <div id="buttongroup">
            <button id="qnabutton" onClick={()=>this.setState({category:'북클럽'})}>북클럽</button>
            <button id="qnabutton" onClick={()=>this.setState({category:'신청/환불'})}>신청/환불</button>
            <button id="qnabutton" onClick={()=>this.setState({category:'독후감'})}>독후감</button><br/>
            <button id="qnabutton" onClick={()=>this.setState({category:'놀러가기'})}>놀러가기</button>
            <button id="qnabutton" onClick={()=>this.setState({category:'이벤트'})}>이벤트</button>
            <button id="qnabutton" onClick={()=>this.setState({category:'아지트'})}>아지트</button>
        </div>
        
        {this.renderQuestion()}
        <style jsx>
        {`
        #qnabutton {
            background-color:white;
            border:1px solid orange;
            color:orange;
            border-radius:5px;
            padding:6px 12px 6px 12px;
            margin:6px;
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

// export default class Square extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             value:null,
//         };
//     }
//     render(){
//         return (
//             
//         );
//     }
// }

