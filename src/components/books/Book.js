import React, { PropTypes } from 'react';
import coverUrl from '../../utils/bookCoverUrl';

const Book = (props) => {
  const {title, author, isbn, desc, availability, link} = props;
  return (
    <div className="book">
      <div className="book__meta">
        <span className="book__title">{title}</span>
        <span className="book__author">{author}</span>
        <p className="book__desc">{desc}</p>
        <span className={"book__availability " + availability.replace(' ', "-")}>{availability}</span>
      </div>
      <img className="book__cover" src={coverUrl({isbn: isbn, size: 'M'})} alt={title + ' cover'}/>
    </div>
  );
};

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  isbn: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  availability: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};

export default Book;
