import React from 'react';
import styled from 'styled-components';
import DialogItem from '../../components/DialogItem/index';
import Message from '../../components/Message/index'

const DialogsContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Dialogs = (props) => {
    return (
      <DialogsContainer>
        <div>
          <DialogItem dialogs={props.dialogs}/>
        </div>
        <div>
          <Message messages={props.messages}/>
        </div>
      </DialogsContainer>
    )
};

export default Dialogs;