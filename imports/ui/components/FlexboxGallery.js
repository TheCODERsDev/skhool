import React from 'react';
import { Link } from 'react-router';

const Container = ({ children }) => (
  <div className="flexbox-gallery">
    { children }
  </div>
);

const Item = ({ image, to, children }) => (
  <Link to={ to }>
    <figure>
      <img src={ image } alt=""/>
      <figcaption>
        { children }
      </figcaption>
    </figure>
  </Link>
);

export { Container, Item }
