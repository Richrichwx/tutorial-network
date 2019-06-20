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

  let textAdMessage  = React.createRef();

  const addMessage = () => {
    let textMessage = textAdMessage.current.value;
    alert(textMessage)
  };

  return (
    <DialogsContainer>
      <div>
        <DialogItem dialogs={ props.state.dialogs }/>
      </div>
      <div>
        <Message messages={ props.state.messages }/>
        <textarea ref={textAdMessage}></textarea>
        <button onClick={addMessage}>add message</button>
      </div>

    </DialogsContainer>
  )
};

export default Dialogs;