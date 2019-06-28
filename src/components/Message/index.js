import React from 'react';
import { addMessageActionCreator, UpdateNewMessageActionCreator } from '../../redux/state';

const Message = props => {
  let textAddMessage  = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onChangeMessage = () => {
    let text = textAddMessage.current.value;
    props.dispatch(UpdateNewMessageActionCreator(text));
  };
  return (
    <div>
    <textarea onChange={onChangeMessage} ref={textAddMessage} value={props.newMessageText} />
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