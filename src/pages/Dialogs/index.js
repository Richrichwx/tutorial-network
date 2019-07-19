import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMessage, getUser, } from '../../store/messages/messages.action';


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
    return (
      <DialogsContainer>
        { this.props.nameUser.nameUser.map((name,index) => {
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
          { this.props.message.message.map((item,index) => {
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
  nameUser: state.messages
});

const mapDispatchToProps = {
  addMessage,
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
