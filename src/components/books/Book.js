import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import coverUrl from 'utils/bookCoverUrl';
import Loader from 'components/common/Loader';

const Book = (props) => {
  const {isFetching, id, title, author, industryIdentifiers, desc, tags, availability, link, showDetails} = props;
  let available, tagList, formattedTitle, availabilityElements, book;
  if(!isFetching) {
    available = availability.find((obj) => obj.status.toLowerCase() === "available");
    tagList = tags.map((cat, index) => <li key={index}>{cat}</li>);
    formattedTitle = showDetails ? title : <Link to={'/book/' + id}>{title}</Link>;
    availabilityElements = showDetails ? <ul className="book__availability">{availability.map((a, i) => <li key={i} className={"book__status " + (a.status === "available" ? "available" : "not-available")}><Link to={'/user/' + a.owner.id}>{a.owner.firstName}</Link> ({a.status})</li>)}</ul> : <span className={"book__status " + (available ? "available" : "not-available")}>{available ? "Available!" : "Not available"}</span>;
    book = (
      <div className="book">
        <div className="book__meta">
          <span className="book__title">{formattedTitle}</span>
          <span className="book__author">{author}</span>
          <p className="book__desc">{desc}</p>
          <ul className="book__categories">{tagList}</ul>
          {availabilityElements}
        </div>
        <img className="book__cover" src={coverUrl({isbn: industryIdentifiers.find(o => o.type === "ISBN_13").identifier, size: 'M'})} alt={title + ' cover'}/>
      </div>
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
