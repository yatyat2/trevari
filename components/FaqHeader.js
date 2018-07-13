import Question from '../components/Question'
import Test from '../components/Question'

export default class faqheader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category:null,
            qnadata:[
                {category:'북클럽',question:'트레바리 전체 일정을 더 편하게 보고 싶어요!', answer:'트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'},
                {category:'북클럽',question:'공휴일에도 독서모임 하나요?', answer:'설 연휴와 추석 연휴를 제외한 법정공휴일에도 \'독서모임\' 합니다! :)아래 <트레바리 이용약관> 제 12조, 5항 참고(5) “회사"는 “독서모임 서비스" 를 제공함에 있어 설, 추석을 제외한 법정공휴일에도 “독서모임 서비스”를 제공합니다. 다만 법정공휴일 등 일정 변경에 상당한 사유가 발생할 경우 “회사”는 해당 서비스 제공 일정을 변경할 수 있으며, 이 경우에 “회사" 는 “회원" 에게 이 내용을 사전 통보 후 “독서모임 서비스”를 제공합니다.'},
                {category:'북클럽',question:'독서모임은 몇 시부터 몇 시까지 하나요?', answer:'평일에 열리는 독서모임은 19:40~23:20까지,주말에 열리는 독서모임은 14:20~18:00까지 진행됩니다.'},
                {category:'북클럽',question:'한 클럽당 정원은 몇 명 정도인가요?', answer:'각 클럽마다 조금씩 차이가 있지만, 평균 15~20명 정도예요. 그래도 한 클럽이 오픈되기 위한 최소 인원이 6명이기 때문에, 적어도 6명은 넘는답니다.'},
                {category:'북클럽',question:'멤버 구성은 어떻게 되나요?', answer:'정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! 나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있답니다♡'},
                {category:'북클럽',question:'한 달에 한 번만 모이나요?', answer:'아지트에서 열리는 정규 독서모임은 월 1회입니다.하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요. :)이외에도 멤버들만을 위한 ‘커뮤니티 이벤트’, 편하게 놀러 올 수 있는 ‘트레바리 바’ 등 다양한 혜택이 준비되어 있습니다!'},
                {category:'북클럽',question:'파트너는 어떤 역할을 하나요?', answer:'트레바리의 모든 북클럽에는 \'파트너\'가 한 분씩 계십니다. 트레바리의 \'크루\'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! 한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.\n1. 원활한 토론 관리 최대한 많은 멤버분들이 고루고루 자신의 생각을 나눌 수 있도록, 토론 중 발언권을 분배하고 타임라인을 관리합니다. 발언권이 지나치게 편중될 경우, 파트너 님이 stop을 외칠 수도 있어요. 원활한 토론을 하기 위함이니 우리 모두 상처받지 말아요!\n2. 모임 전후 각종 행정업무 모임이 원활하게 진행될 수 있도록 클럽 단톡방 내에서 각종 투표를 실시하고, 중요한 공지, 변동 사항, 가이드 자료 등을 전달합니다. 궁금한 점은 파트너 님께 문의하시면 답변해주실 거예요. (이메일(contact@trevari.co.kr)로 문의주시면 크루가 직접 답변해드립니다.) \n3. 멤버로서의 파트너 파트너가 모임 관리자로서의 역할만을 하는 것은 아니에요. 멤버와 동일하게 토론에 적극적으로 참여하고, 번개에도 함께할 수 있습니다. 파트너도 결국 한 명의 멤버라는 사실! 한 시즌 동안 우리 예쁜 추억을 같이 쌓아 보아요.'},
                {category:'북클럽',question:'클럽장은 어떤 역할을 하나요?', answer:'전문적으로 이끌어주시는 분이 계시면 더 좋을 클럽에는 \'클럽장\'을 모시고 있어요. 주로 과학관장님, 교수님, 작가님, 특정 기업 대표님 등 해당 분야 전문가분들을 모십니다.이렇게 모신 ‘클럽장’님들은 해당 클럽의 커리큘럼을 직접 짜주십니다. 같이 읽으면 좋을 책, 아티클, 영상/이미지 자료를 추천해주실 뿐만 아니라, 클럽 어떤 식으로 운영되면 좋을지까지 같이 고민해주신답니다. 나아가 모임 당일 양질의 대화가 이뤄질 수 있도록 토론 주제를 준비하고, 대화를 이끌어가주시고 계세요. :)'},
                {category:'북클럽',question:'함께 만드는 클럽의 경우, 책은 어떻게 선정되나요?', answer:'첫 책은 트레바리에서 정해드립니다!첫 모임 이후로는 매달 대화와 투표를 통해 읽고 싶은 책과 주제를 정합니다. 그리고 책을 추천한 사람이 발제자가 되어 토론을 이끌어 나갑니다.'},
                {category:'북클럽',question:'독서모임일이 언제인지 헷갈려요.', answer:'[모임일 세는 법!] 첫 번째 목요일 = ♥월에 있는 목요일들 중 첫 번째! 두 번째 목요일 = ♥월에 있는 목요일들 중 두 번째! 세 번째 목요일 = ♥월에 있는 목요일들 중 세 번째! 네 번째 목요일 = ♥월에 있는 목요일들 중 네 번째!*직접 세는 게 귀찮으시다면? 트레바리 구글 캘린더(click!)를 등록해두시고 일정을 편하게 확인하세요!'},
                {category:'신청/환불',question:'클럽을 여러 개 등록해도 되나요?',answer:'네, 클럽 등록에는 개수 제한이 없습니다. 다만, 세 개 이상의 클럽을 하실 땐 이런 점을 염두에 두어주세용! 세 개 이상의 클럽에서 활동하시면,책을 깊이 소화하고, 독후감에 생각을 잘 담아내고, 멤버들과 끈끈한 관계를 맺는 것이 버거울 수 있어요 :( 저희는 트레바리에서의 시간이 더 깊고 끈끈하길 바란답니다♥'},
                {category:'신청/환불',question:'페이스북의 문제로 로그인이 안 될 때는 어떡하나요?(해킹, 비활성화 등)',answer:'안타깝게도 페이스북 자체 로그인 문제는 트레바리가 직접 도움을 드릴 수 없습니다.트레바리는 멤버십 서비스이므로 원칙적으로는 멤버십 권한을 이전해드리고 있지 않습니다.그러나 이번 시즌 멤버이신 경우에 한해 원활한 트레바리 서비스 이용을 위하여 예외적으로 이전 처리를 해드리고 있습니다.새로운 페이스북 계정으로 멤버십 권한 이전을 희망하시는 경우 다음과 같은 절차를 따라주세요. 1. 이용하실 페이스북 계정을 통해 트레바리 홈페이지에 로그인 해주세요. 새로운 페이스북 계정으로 로그인 하신 경우 회원가입 페이지로 이동됩니다.2. 기존과 같은 휴대폰 번호를 이용하신다면 회원가입 페이지의 휴대폰 번호 입력칸을 00000000000 으로 입력해주세요.중복된 휴대폰 번호로 가입이 안되기 때문에 00000000000 으로 가입해주시면 기존 휴대전화번호를 그대로 이전해드리도록 하겠습니다. 3. 새로 가입하신 페이스북 계정(이메일 형태)을 성함/휴대전화번호/클럽명과 함께 contact@trevari.co.kr 로 보내주세요.알려주신 계정으로 멤버십 권한 이전 후 회신 드리도록 하겠습니다.4. 회신을 받으신 후에 정상적으로 로그인이 되는지 확인해주세요.'},
                {category:'신청/환불',question:'환불 신청이 제대로 완료되지 않은 것 같아요!',answer:'환불 신청 시 \'당일 환불가능 금액 초과\' 또는 \'은행 업무 중단 시간\'을 알리는 메세지가 뜨는 경우가 있습니다. 이런 경우 대부분 환불 신청 자체는 홈페이지 서버에 정상적으로 접수되기 때문에 최대 3영업일 내로 담당자가 확인 후 처리해드려요! 환불 신청 버튼이 보이지 않는다면 환불 신청이 이미 접수된 것이랍니다!'},
                {category:'신청/환불',question:'트레바리 멤버가 된다는 건?',answer:'책을 재료로 펼치는 지적 대화, 트레바리 북클럽트레바리 북클럽은 책을 재료로 지적인 대화를 나누는 토론의 장입니다. 책을 읽고, 독후감을 쓰며 그 감상을 나눕니다. 그리고는 한 달에 한 번 만나서 서로의 의견을 발전시키고 때로는 서로의 의견에 반대하면서 친해지기도 하고요. 금융위기에 대해, 인공지능에 대해, 연애와 사랑의 기술에 대해, 성평등의식에 대해, 또 지구 환경 성장의 한계에 대해! 여러 시간 이야기를 나누고도 모자라, 밤새도록 남아 술잔을 기울이기도 합니다. 어디 요즘 세상에, 최소 한 달에 한 번은 꼬박꼬박 모여 이런 이야기를 나누는 친구들이 흔한가요?각종 강연과 공연을 즐기다, 커뮤니티 이벤트 커뮤니티 이벤트는 소소하게 모여 강연이나 공연을 관람하고, 강연자 혹은 연주자와 함께 술과 함께 대화를 나누는 시간입니다. 음악과 함께 하는 트레바리 음악 살롱, 작가 혹은 연사를 직접 만나는 트레바리 부킹살롱에 참여해보세요. 오직 트레바리 멤버에게만 허락된 특별한 기회랍니다.대화와 술이 함께하는 공간, 트레바리 아지트 트레바리 아지트는 트레바리 멤버들끼리 모여, 음악을 틀고 담소를 나누고 술을 마시고 때로는 재미난 작당을 꿈꾸기도 하는 그런 공간이에요. 가끔은, 일이나 공부와 같은 무거운 주제로부터 도피할 수 있는 그런 도피처 하나 쯤은 있어도 좋지 않을까요?'},
                {category:'신청/환불',question:'트레바리 멤버시 기간이 어떻게 되나요?',answer:'트레바리 멤버십은 4개월(한 시즌) 단위로 운영되며 1-4월, 5-8월, 9-12월 이렇게 1년에 세 시즌이 진행됩니다. 멤버십은 소속 클럽의 첫 모임일과 관계없이 첫 달 1일에 일괄적으로 발효되며, 별도로 연장하지 않으면 넷째 달 말일에 자동 해지됩니다.'},
                {category:'신청/환불',question:'신청은 개수 상관없이 할 수 있나요?',answer:'신청(입금 전)은 동시에 2개 클럽까지 하실 수 있습니다.이미 2개의 클럽에 신청을 걸어놨는데, 다른 클럽에 또 신청하고 싶으시다면 이미 신청한 클럽에 입.금.하시거나 신청을 취소하셔야 해요! :)'},
                {category:'신청/환불',question:'마감된 클럽은 신청할 수 없나요?',answer:'마감된 클럽의 경우 대기 신청만 가능합니다!(대기는 10명까징!) 1. 로그인 혹은 회원가입 2. (마감된) 해당 클럽 페이지 접속 3. [대기 신청 하기] 버튼 클릭! 대기 신청을 해주시면, 해당 클럽에 빈자리가 생길 때마다 알림 문자를 보내드립니다. 회원 가입 시 입력하신 연락처를 한 번 더 확인해주세요:) ※대기 신청이 안 되신다면, 대기자가 10명이 넘는 것이랍니다ㅠㅠ'},
                {category:'신청/환불',question:'모집 기간 마감 후 신청 가능한가요?',answer:'모집 기간이 끝나고 시즌이 시작되고 나면 신청이 불가능합니다. 일 년에 세 번뿐인 신청 기간을 놓치지 마세요!'},
                {category:'신청/환불',question:'독후감을 안 내면 정말로 독서모임에 참가할 수 없나요?',answer:'네, 안타깝지만 그렇습니다. 트레바리는 양질의 대화를 위해서는 구성원들이 어느 정도 각자의 생각을 정리해 와야 한다고 믿습니다. 그리고 생각을 정리하는 데에는 글쓰기만한 것이 없죠. 저희는 많은 독서모임이 서로 친해지면서 \'좋은 게 좋은 거지!\'식으로 운영을 하다가 콘텐츠를 잃어가는 모습을 지켜봐 왔습니다. 그래서 독서모임들의 평균 수명은 채 2년이 넘지 못하죠. 저희를 믿고 등록을 해주신 멤버 여러분들에게 \'지속 가능한 독서모임 서비스\'를 제공하기 위해서라도, 저희는 최선을 다해 원칙을 지켜나가려고 합니다. 예쁘게 봐주세요!'},
                {category:'신청/환불',question:'클럽 이동 가능한가요?',answer:'신청 마감 전까지만 클럽 이동이 가능합니다. 가격이 같은 클럽으로 이동을 원하신다면 홈페이지 로그인 후 \'마이페이지-내 클럽\'에서 이동 버튼을 눌러 직접 진행하실 수 있습니다! 이동시에는 마감되지 않은 클럽만 선택하실 수 있도록 되어 있으니 참고 부탁드립니다 :) 가격이 다른 클럽으로 이동을 원하신다면 성함과 휴대전화번호, 신청한 클럽명, 이동을 원하는 클럽명을 이메일(contact@trevari.co.kr)로 보내주시면, 업무시간 내에 확인하여 이동 처리 해드려요 :) 신청 마감 후에는 클럽 이동이 불가능합니다.  트레바리의 각 클럽은 시즌 첫날부터 마지막 날까지 4개월 간 함께하는 커뮤니티입니다. 커뮤니티 안정을 위해 시즌 중에는 이동 신청을 받고 있지 않아요. 양해 부탁드려요:D 신청하시기 전, 북클럽 설명과 일정을 꼭꼭 확인해주세요. 그리고 다른 클럽이 궁금하시다면 시즌 시작 후 ‘놀러가기’ 서비스를 이용 해보시는 것도 좋아요!'},
                {category:'신청/환불',question:'다음 멤버십 신청은 언제인가요?',answer:'트레바리의 시즌은 4개월 단위로 진행되고 있어요. 1-4월 / 5-8월 / 9-12월로 나뉘어 시즌이 운영되며, 각 시즌의 신규 멤버십 신청은 시즌 시작 약 한 달 전에 오픈됩니다.  2018.5-8시즌 모집은 3월 말에 예정되어 있어요!자세한 내용은 트레바리 페이스북 페이지(click!)를 참고해주세요 :)'},
                {category:'신청/환불',question:'어떤 결제수단이 있나요?',answer:'나도몰라'},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},
                // {category:'신청/환불',question:'',answer:''},

            ]
        };
    }

    renderQuestion(){
        if(this.state.category == '북클럽')
        {   
            return this.state.qnadata.map((step)=>{
                if(step.category == '북클럽'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
            
        )
        }else if(this.state.category =='신청/환불'){
            return this.state.qnadata.map((step)=>{
                if(step.category == '신청/환불'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
        )
        }else if(this.state.category =='독후감'){
            return this.state.qnadata.map((step)=>{
                if(step.category == '독후감'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
        )
        }else if(this.state.category =='놀러가기'){
            return this.state.qnadata.map((step)=>{
                if(step.category == '놀러가기'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
        )
        }else if(this.state.category =='이벤트'){
            return this.state.qnadata.map((step)=>{
                if(step.category == '이벤트'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
        )
        }else if(this.state.category =='아지트'){
            return this.state.qnadata.map((step)=>{
                if(step.category == '아지트'){
                    return (<Question category={step.category} question={step.question} answer={step.answer}/>);
                }
            }
        )
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
            <button id={this.state.category=='북클럽' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'북클럽'})}>북클럽</button>
            <button id={this.state.category=='신청/환불' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'신청/환불'})}>신청/환불</button>
            <button id={this.state.category=='독후감' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'독후감'})}>독후감</button>
            <button id={this.state.category=='놀러가기' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'놀러가기'})}>놀러가기</button>
            <button id={this.state.category=='이벤트' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'이벤트'})}>이벤트</button>
            <button id={this.state.category=='아지트' ? "qnabuttonactive" : "qnabutton"} onClick={()=>this.setState({category:'아지트'})}>아지트</button>
        </div>
        
        {this.renderQuestion()}
        <style jsx>
        {`
    
        #test {
            background-color:orange;
        }

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

        @media (min-width:1024px){
                    
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

