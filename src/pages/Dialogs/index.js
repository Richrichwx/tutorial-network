import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMessage, updateNewMessage } from '../../store/messages/messages.action';


const DialogsContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Dialogs = () => {
  const addMessage = () => {

  };

  const onChangeMessage = (e) => {

  };
  return (
    <DialogsContainer>
      <div>
      </div>
      <div>
        <textarea onChange={onChangeMessage} />
        <button onClick={addMessage}>add message</button>
      </div>

    </DialogsContainer>
  )
};

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = {
  addMessage,
  updateNewMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
