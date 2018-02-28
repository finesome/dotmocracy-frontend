import React, { Component } from 'react';
import styled from 'styled-components';

import bannerImage from '../banner.svg';

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export default class Banner extends Component {
  
  render() {
    return (
      <div>
        <Image src={bannerImage} alt="banner" />
      </div>
    );
  }
}

