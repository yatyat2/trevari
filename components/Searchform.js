import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="클럽명 검색"/>
        <InputGroupAddon addonType="append">
          <InputGroupText id="asd">검색</InputGroupText>
        </InputGroupAddon>
      </InputGroup>     
      <style jax>
      {`
      #asd {
        background-color:orange;
        color:white;
      }
      `}
      </style>
    </div>
  );
};

export default Example;