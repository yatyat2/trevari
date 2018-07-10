// // import React from 'react';
// import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <InputGroup>
//         <Input placeholder="클럽명 검색"/>
//         <InputGroupAddon addonType="append">
//           <InputGroupText id="searchwindow">검색</InputGroupText>
//         </InputGroupAddon>
//       </InputGroup>     
//       <style jsx>
//       {`
//       #searchwindow {
//         background-color:orange;
//         color:white;
//       }
//       `}
//       </style>
//     </div>
//   );
// };

// export default Example;

export default () =>(
  <div>
    <from id="qweasd">
      <input id="searchwindow" type="text" name="clubname" placeholder="클럽명 검색"/>
      <input id="submit" type="submit" value="검색"/>
    </from>
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
    `}
    </style>
  </div>
)