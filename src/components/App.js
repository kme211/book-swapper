import React, {PropTypes} from 'react';
import Header from './common/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        {this.props.children}
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
