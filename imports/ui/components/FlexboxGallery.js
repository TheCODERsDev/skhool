import React from 'react';

const Container = ({ children }) => (
  <div className="flexbox-gallery">
    { children }
  </div>
);

const Item = ({ image, to, children }) => (
  <a href={ to }>
    <figure>
      <img src={ image } alt=""/>
      <figcaption>
        { children }
      </figcaption>
    </figure>
  </a>
);

export { Container, Item }
