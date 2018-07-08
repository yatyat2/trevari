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
    <input name="keyword" placeholder="클럽명 검색"/>
    <button/>
  </div>
)