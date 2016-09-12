import React, { PropTypes } from 'react';
import coverUrl from '../../utils/bookCoverUrl';

const Book = (props) => {
  const {title, author, industryIdentifiers, desc, tags, availability, link} = props;
  const available = availability.find((obj) => obj.status.toLowerCase() === "available");
  const tagList = tags.map((cat, index) => <li key={index}>{cat}</li>);

  return (
    <div className="book">
      <div className="book__meta">
        <span className="book__title">{title}</span>
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
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  industryIdentifiers: React.PropTypes.array.isRequired,
  tags: React.PropTypes.array.isRequired,
  desc: React.PropTypes.string.isRequired,
  availability: React.PropTypes.array.isRequired,
  link: React.PropTypes.string.isRequired
};

export default Book;
