import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';



const Example = (props) => {
  return (
    <div>
      <Card body outline color="white">
        
        <div id="cardimg">
        <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
        </div>
          
            <CardImgOverlay>
            <div id ="overlaytext">
            <CardText><span id="textofclubname">{props.clubname}</span><br/>{props.subject}</CardText>
            </div>          
            </CardImgOverlay>
        
        <CardBody id="cardbody">
          {/* <div id ="cardtitle"> */}
          <CardTitle id="cardtitle">{props.title}</CardTitle>
          {/* </div> */}
          
          <CardText>{props.place}<br/>{props.time}</CardText>
          {/* <CardText>{props.time}</CardText> */}
        </CardBody>
        
      </Card>
      <style jsx>
      {`
      div#overlaytext {
        margin-top:128px;
        padding:12px 16px 12px 16px;
        background-color:black;
        opacity:0.6;
        color:white;
      }

      div#cardimg {
          height:200px;
          overflow:hidden;
          
      }

      #cardtitle {
        color:orange;
        font-weight:600;
      }

      div > div.card-body > p {
        color:gray;
      }

      #cardbody {
          padding:0px;
          margin:8px 0px 8px 0px;
      }

      #textofclubname {
        font-weight:bold;
      }

      
      `}
      </style>
    </div>
  );
};

export default Example;