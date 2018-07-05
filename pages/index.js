import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Search from '../components/Search'

const data = [
    {clubname:"프로파일러", subject:"범죄심리학&프로파일링", title:"위험한 사람들",place:"압구정 아지트",time:"2018년 7월 8일 일요일 오후 2:20",imgsrc:"../static/agit.jpg"},
    {clubname:"국경", subject:"국가와 경제", title:"노예의 길", place:"안국 아지트",time:"2018년 8월 10일 월요일 오후 5:20",imgsrc:"../static/국경.jpg"}
]

export default () =>(   

    <div>
        <Layout>
            <div id="search">
                <Search/>  
            </div>
            
            {data.map((step) =>{
                return (<div><Card title={step.title} subject={step.subject} clubname={step.clubname} place={step.place} time={step.time} imgsrc={step.imgsrc}/>
                </div>);
            })}
            
        </Layout>

        <style jax>
        {`
        div#search {
            
        }
        `}
        </style>
    </div> 
    
)