import React, {PropTypes} from 'react';
import styled, {keyframes} from 'styled-components';
import {colors} from 'components/globals';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const stroke = keyframes`
  0% {
    stroke-dashoffset: 0
  }
  100% {
    stroke-dashoffset: -600;
  }
`;

const Wrapper = styled.div`
  margin: 50px auto;
  width: 150px;
`;

const Outer = styled.svg`
  width: 150px;
  animation: ${rotate} 3s linear infinite;
`;

const Inner = styled.circle`
  stroke-dashoffset: 0;
  stroke-dasharray: 300;
  stroke-width: 10;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  animation: ${stroke} 2s linear infinite;
  stroke: ${colors.primary[0]};
  fill: transparent;
`;

const Message = styled.h1`
  text-align: center;
  font-size: 1em;
  margin-bottom: 1em;
  font-weight: 300;
`;

const Loader = (props) => {
  const message = props.message || 'Loading';

  return (
    <Wrapper>
      <Message>{message}</Message>
      <Outer x="0px" y="0px" viewBox="0 0 150 150">
        <Inner cx="75" cy="75" r="60"/>
      </Outer>
    </Wrapper>
  );
};

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;
