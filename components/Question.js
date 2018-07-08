import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false ,
      };
  }

  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {  
          return (
            <div>
            <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>Q [{this.props.category}] {this.props.question}</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                {this.props.answer}
             </CardBody>
            </Card>
          </Collapse>
          </div>); 
  }
}

export default Example;