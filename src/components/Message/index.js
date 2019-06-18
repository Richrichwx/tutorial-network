import React from 'react';

const Message = props => {
  console.log('aa', props.message)
  return (
    <div>
      {props.message.map((p,key) => {
        return  (
          <div id={key}>
           {p.text} {p.like}
          </div>
        )
      })}
    </div>
  )
};

export default Message;