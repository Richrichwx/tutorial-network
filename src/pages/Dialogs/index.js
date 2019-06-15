import React from 'react';
import styled from 'styled-components';

const DialogsContainer = styled.div`
  width: 800px;
`;

class Dialogs extends React.Component {
  render() {
    return (
      <DialogsContainer>Сообщения</DialogsContainer>
    )
  }
}

export default Dialogs;