import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMessage } from '../../store/messages/messages.action';
import { getUser } from '../../store/nameDialogs/dialogs.action';
import { Redirect } from 'react-router';
import { WithAuthRedirect } from '../../noc/AuthRedirectWrapper';
import { compose } from 'redux';


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

const AddMessageItem = styled.div`
`;

const Items = styled.div`
`;

class Dialogs extends React.Component {
  state = {
    value: ''
  };
  onChangeMessage = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  addMessages = (e) => {
    this.props.addMessage(this.state.value);
    this.setState({
      value: e.target.value
    });
  };

  navigateTo = (e, path) => {
    e.preventDefault();
    window.navigate.push(`/${path}`)
  };

  render() {
    const {message,nameUser} = this.props;
    return (
      <DialogsContainer>
        {nameUser.nameUser.map((name,index) => {
          return(
            <div key={index}>
              <a href="/#" onClick={(e) => this.navigateTo(e, `dialogs/${name.id}`)}>
                {name.name}
              </a>
            </div>
          )
        })}
        <AddMessageItem>
          <textarea onChange={ this.onChangeMessage } value={this.state.value}/>
          <button onClick={ this.addMessages }>add message</button>
        </AddMessageItem>
        <Items>
          {message.message.map((item,index) => {
            return(
              <ItemMessage key={index}>
                {item}
              </ItemMessage>
            )
          })}
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
