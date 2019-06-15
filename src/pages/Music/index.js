import React from 'react';
import styled from 'styled-components';

const MusicContainer = styled.div`
  width: 800px;
`;

class Music extends React.Component {
  render() {
    return (
      <MusicContainer>Музыка</MusicContainer>
    )
  }
}

export default Music;