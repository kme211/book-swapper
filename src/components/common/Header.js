import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Heading from 'components/atoms/Heading';
import styled from 'styled-components';
import {colors, fonts} from 'components/globals';

const Wrapper = styled.header`
max-width: 1100px;
position: relative;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: baseline;
`;

const LinkWrapper = styled.li`
  list-style: none;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  font-family: ${fonts.primary};
  display: block;
  text-decoration: none;
  color: ${colors.primary[0]};
  padding: 1rem;
  border-bottom: 2px solid white;
  transition: all 0.4s ease;

  &:hover {
    background-color: #F8F8F8;
    border-bottom: 2px solid ${colors.secondary[0]};
  }

  &.active {
    font-weight: bolder;
    color: ${colors.secondary[0]};
  }
`;

const Header = () => {
  return (
    <Wrapper>
        <Heading level={1}>Book Swapper</Heading>
        <ul role="navigation">
          <LinkWrapper>
            <StyledLink to="/" activeClassName="active">Home</StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/messages" activeClassName="active">Messages</StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/account" activeClassName="active">Account</StyledLink>
          </LinkWrapper>
        </ul>
    </Wrapper>
  );
};

export default Header;
