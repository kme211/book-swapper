import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import coverUrl from 'utils/bookCoverUrl';
import Loader from 'components/common/Loader';
import styled from 'styled-components';
import { colors, fonts } from 'components/globals';

export const BookWrapper = styled.div`
  color: ${colors.grayscale[0]};
  display: flex;
  flex-direction: row-reverse;
  align-content: flex-start;
  flex: 1 1 auto;
  margin-bottom: 1em;
  @media screen and (min-width: 1100px) {
    flex: 0 1 515px;
  }
`;

export const Meta = styled.div`
  padding: 1em;
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-family: 'Bitter', serif;
`;

export const Author = styled.span`
  color:  rgb(100, 100, 100);
  display: block;
`;

export const Tags = styled.ul`
  margin: 6px 0;
  font-size: .75em;
  list-style: none;
  padding: 0;

  & li {
    background-color: #E6E6E6;
    border-radius: 6px;
    margin: 2px;
    padding: 3px 8px;
    display: inline-block;
  }
`;

export const Cover = styled.img`
  display: none;
  @media screen and (min-width: 530px) {
    display: block;
    font-family: 'Bitter', serif;
    position: relative;
    font-weight: 300;
    text-align: center;
    width: 180px;
    height: 274px;
    flex-shrink: 0;

    &:after {
      content: attr(alt) " " "not found";
      font-size: 16px;
      color: rgb(100, 100, 100);
      background-color: rgb(230, 230, 230);
      border: 2px dotted rgb(200, 200, 200);
      display: flex;
      align-items: center;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Book = (props) => {
  const {isFetching, id, title, author, industryIdentifiers, desc, tags, availability, link, showDetails} = props;
  let available, tagList, formattedTitle, availabilityElements, book;
  if(!isFetching) {
    available = availability.find((obj) => obj.status.toLowerCase() === "available");
    tagList = tags.map((cat, index) => <li key={index}>{cat}</li>);
    formattedTitle = showDetails ? title : <Link to={'/book/' + id}>{title}</Link>;
    availabilityElements = showDetails ? <ul className="book__availability">{availability.map((a, i) => <li key={i} className={"book__status " + (a.status === "available" ? "available" : "not-available")}><Link to={'/user/' + a.owner.id}>{a.owner.firstName}</Link> ({a.status})</li>)}</ul> : <span className={"book__status " + (available ? "available" : "not-available")}>{available ? "Available!" : "Not available"}</span>;
    book = (
      <BookWrapper>
        <Meta>
          <Title>{formattedTitle}</Title>
          <Author>{author}</Author>
          <p>{desc}</p>
          <Tags>{tagList}</Tags>
          {availabilityElements}
        </Meta>
        <Cover src={coverUrl({isbn: industryIdentifiers.find(o => o.type === "ISBN_13").identifier, size: 'M'})} alt={title + ' cover'}/>
      </BookWrapper>
    );
  }

  const component = isFetching ? <Loader message="Loading book"/> : book;

  return (
    <div>
      {component}
    </div>

  );
};

Book.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  industryIdentifiers: React.PropTypes.array.isRequired,
  tags: React.PropTypes.array.isRequired,
  desc: React.PropTypes.string.isRequired,
  availability: React.PropTypes.array.isRequired,
  link: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool,
  showDetails: React.PropTypes.bool
};

export default Book;
