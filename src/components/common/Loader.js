import React, {PropTypes} from 'react';

const Loader = (props) => {
  const message = props.message || 'Loading';

  return (
    <div className="loader">
      <h1 className="loader__message">{message}</h1>
      <svg className="loader__outer" x="0px" y="0px" viewBox="0 0 150 150">
        <circle className="loader__inner" cx="75" cy="75" r="60"/>
      </svg>
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;
