import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import coverUrl from '../../utils/bookCoverUrl';

const Book = (props) => {
  const {id, title, author, industryIdentifiers, desc, tags, availability, link, showDetails} = props;
  const available = availability.find((obj) => obj.status.toLowerCase() === "available");
  const tagList = tags.map((cat, index) => <li key={index}>{cat}</li>);
  const formattedTitle = showDetails ? title : <Link to={'/book/' + id}>{title}</Link>;

  return (
    <div className="book">
      <div className="book__meta">
        <span className="book__title">{formattedTitle}</span>
        <span className="book__author">{author}</span>
        <p className="book__desc">{desc}</p>
        <ul className="book__categories">{tagList}</ul>
        <span className={"book__availability " + (available ? "available" : "not-available")}>{available ? "Available!" : "Not available"}</span>
      </div>
      <img className="book__cover" src={coverUrl({isbn: industryIdentifiers.find(o => o.type === "ISBN_13").identifier, size: 'M'})} alt={title + ' cover'}/>
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
  showDetails: React.PropTypes.bool
};

export default Book;
