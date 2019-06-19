import React from 'react';

const Message = props => {
  return (
    <div>
      {props.messages.map((p,id) => {
        return  (
          <div key={id}>
           {p.text} {p.like}
          </div>
        )
      })}
    </div>
  )
};

export default Message;