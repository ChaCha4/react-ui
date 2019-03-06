import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
class Button extends Component {
  render() {
    return (
      <div>
        <Rotate>
          <Btn>按钮</Btn>
        </Rotate>
      </div>
    );
  }
}

export default Button;
const rotate = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Btn = styled.button`
  color: red;
`;
