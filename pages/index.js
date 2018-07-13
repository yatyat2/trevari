import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import Card from '../components/Card'
import Search from '../components/Search'

export default class extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            search:false,
            searchclubname:"아직",
            data:[
                {clubname:"프로파일러", subject:"범죄심리학&프로파일링", title:"위험한 사람들",place:"압구정 아지트",time:"2018년 7월 8일 일요일 오후 2:20",imgsrc:"../static/agit.jpg"},
                {clubname:"국경", subject:"국가와 경제", title:"노예의 길", place:"안국 아지트",time:"2018년 8월 10일 월요일 오후 5:20",imgsrc:"../static/국경.jpg"},
                {clubname:"프로파일러", subject:"범죄심리학&프로파일링", title:"위험한 사람들",place:"압구정 아지트",time:"2018년 7월 8일 일요일 오후 2:20",imgsrc:"../static/agit.jpg"},
                {clubname:"국경", subject:"국가와 경제", title:"노예의 길", place:"안국 아지트",time:"2018년 8월 10일 월요일 오후 5:20",imgsrc:"../static/국경.jpg"},
                {clubname:"프로파일러", subject:"범죄심리학&프로파일링", title:"위험한 사람들",place:"압구정 아지트",time:"2018년 7월 8일 일요일 오후 2:20",imgsrc:"../static/agit.jpg"},
                {clubname:"국경", subject:"국가와 경제", title:"노예의 길", place:"안국 아지트",time:"2018년 8월 10일 월요일 오후 5:20",imgsrc:"../static/국경.jpg"}
            ]
        };
    }
    

    render(){
        return (
            <div>       
                <Layout>
                
                <div id ="content">
                    <div>
                        <Search/>
                    
                        <form id="searchform" onSubmit={(event)=>{
                            event.preventDefault();
                            if(this.refs.search.value == ""){
                                this.setState({search:false})
                            }else{
                               this.setState({search:true,searchclubname:this.refs.search.value})
                            }
                            }}>                                                
                            <input ref="search"id="searchwindow" type="text" placeholder="클럽명 검색"/>
                            
                            <button id="submit" type="submit">검색</button>
                        </form>
                    </div>
                            
                <div id="cardgroup">
                    {this.state.data.map((step) =>{
                        var tempvar = new RegExp(this.state.searchclubname)
                         if(this.state.search == false){
                            return (<Card id="cardform" title={step.title} subject={step.subject} clubname={step.clubname} place={step.place} time={step.time} imgsrc={step.imgsrc}/>);
                        }else{
                            if(step.clubname.match(tempvar) != null){
                                return (<Card id="cardform" title={step.title} subject={step.subject} clubname={step.clubname} place={step.place} time={step.time} imgsrc={step.imgsrc}/>);
                            }
                        }
    
                    })}

                </div>
                
                </div>
                </Layout>
                <style jsx>
                {`
            
                #searchwindow{
                     padding:6px 12px 6px 12px;
                }

                #submit {
                    background-color:orange;
                    color:white;
                    border:2px solid orange;
                    padding:6px 12px 6px 12px;
                }
                
                #content{}            
                #searchform {}
                #cardgroup {}

                @media (min-width:1024px){
                    #content {
                        width:80%;
                        margin:0px auto;
                    }
                   
                    #searchform {
                        display:inline-block;
                        float:right;
                        margin-top:35px;
       
                    }

                    #cardgroup{
                        padding:10px;
                    }

                    
                }
                

                
                
                `}
                </style>    
            </div> 
        )
    }
    
    
 }