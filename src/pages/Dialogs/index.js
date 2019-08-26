import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMessage } from '../../store/messages/messages.action';
import { getUser } from '../../store/nameDialogs/dialogs.action';
import { WithAuthRedirect } from '../../hoc/AuthRedirectWrapper';
import { compose } from 'redux';
import { DialogsReduxForm } from '../../components/forms/DialogsForm';


const DialogsContainer = styled.div`
  width: 800px;
  height: 460px;
  background: #c2a7a1;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-direction: column;
`;

const ItemMessage = styled.div`
`;

const Items = styled.div`
`;

class Dialogs extends React.Component {
  state = {
    value: ''
  };

  newMesssage = (formData) => {
    this.props.addMessage(formData.message)
  };

  render() {
    const { message, nameUser } = this.props;
    return (
      <DialogsContainer>
        { nameUser.nameUser.map((name, index) => {
          return (
            <div key={ index }>
              <a href="/#">
                { name.name }
              </a>
            </div>
          )
        }) }
        <>
          <DialogsReduxForm onSubmit={ this.newMesssage }/>
        </>
        <Items>
          { message.message.map((item, index) => {
            return (
              <ItemMessage key={ index }>
                { item }
              </ItemMessage>
            )
          }) }
        </Items>
      </DialogsContainer>
    )
  }
}

const mapStateToProps = state => ({
  message: state.messages,
  nameUser: state.nameDialogs,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  addMessage,
  getUser
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
