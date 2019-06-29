import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

const Message = props => {

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onChangeMessage = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageActionCreator(text));
  };
  return (
    <div>
    <textarea onChange={onChangeMessage} value={props.newMessageText} />
    <button onClick={addMessage}>add message</button>
    <div>
      {props.messages.map((p,id) => {
        return  (
          <div key={id}>
           {p.text} {p.like}
          </div>
        )
      })}
    </div>
    </div>
  )
};

export default Message;