import React, { Component } from 'react';
import bannerImage from './../../css/Sith-Lords.jpg';
import './../../css/components/banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h2>Heading two</h2>
        <img src={bannerImage} className="banner__image" alt="Sith Lords" />
      </div>
    );
  };
};

export default Banner;
