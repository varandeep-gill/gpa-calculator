import React from 'react';

const Title = (props) => (
  <div className="title">
    <div className="container">
      <h1 className="title__text">{props.title}</h1>
      <h2 className="title__name">by Varandeep Gill</h2>
    </div>
  </div>
);

Title.defaultProps = {
  title: 'GPA Calculator'
};

export default Title;
