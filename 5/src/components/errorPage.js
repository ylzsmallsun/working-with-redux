import React from 'react';

const Whoops = ({location}) => {
  return (
    <div className="row">
      <img className="responsive-img" src="/404.png" alt="page 2"/>
      <h1>Whoops! Resource not found at '{location.pathname}'.</h1>
    </div>
  );
}

export default Whoops;
