import React from 'react';
import styled from 'styled-components';
import DialogItem from '../../components/DialogItem/index';
import Message from '../../components/Message/index';
import { connect } from 'react-redux';

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
        <DialogItem dialogs={ props.state.dialogs }/>
      </div>
      <div>
        <Message  messages={ props.state.messages }
                  dispatch={props.dispatch}
                  newMessageText={ props.state.newMessageText}/>
      </div>
    </DialogsContainer>
  )
};

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
