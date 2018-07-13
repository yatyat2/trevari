

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isopen:false,
        }
    }

    openanswer(){
        if(this.state.isopen == true){
           return <div id="qanswer">{this.props.answer}</div>
        }  
    }

    render(){
        return (
            <div id="question" onClick={()=>{this.setState({isopen:!this.state.isopen})}}>
                <div id="qtitle">
                    <span id="qtitleq">Q</span>
                    <span id="qtitlecategory">[{this.props.category}]</span>
                    <span id="qtitlespan" id={this.state.isopen == true ? "qtitlespanactive":"qtitlespan"}>{this.props.question}</span>
                </div>               
                {this.state.isopen}          
                {this.openanswer()}
                <style jsx global>
                {`
                #question {
                    margin:0px 30px 0px 30px;                    
                }

                #qtitlespan{
                    display:block;
                }

                #qtitlespanactive{
                    display:block;
                    color:orange;
                    font-weight:bold;
                }

                #qtitleq{
                    color:orange;
                    font-weight:bold;
                    margin:0px 15px 0px 0px;
                }
            
                #qtitlecategory{
                    font-weight:bold;
                }

                #qanswer {
                    padding:20px;
                    border-bottom:1px dotted gray;
                }

                #qtitle {
                    padding:15px 10px 15px 10px;
                    border-bottom:1px dotted gray;
                }

                @media (min-width:1024px){
                    
                }
                `}
                </style>
            </div>
        )
    }
}