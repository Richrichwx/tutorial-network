import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  width: 800px;
`;

class News extends React.Component {
  render() {
    return (
      <NewsContainer>Новости</NewsContainer>
    )
  }
}

export default News;