import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMessage, } from '../../store/messages/messages.action';


const DialogsContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const A = styled.div`
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
  render() {
    return (
      <DialogsContainer>
        <div>
          <textarea onChange={ this.onChangeMessage } value={this.state.value}/>
          <button onClick={ this.addMessages }>add message</button>
        </div>
        <div>
          { this.props.message.message.map((item,index) => {
            return(
              <A key={index}>
                {item}
              </A>
            )
          })}
        </div>
      </DialogsContainer>
    )
  }
}

const mapStateToProps = state => ({
  message: state.messages
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
