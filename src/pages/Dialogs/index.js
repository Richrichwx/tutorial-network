import React from 'react';
import styled from 'styled-components';
import DialogItem from '../../components/DialogItem/index';
import Message from '../../components/Message/index'

const DialogsContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Item = styled.div`
  margin-right: 20px;
`;

const Dialogs = (message,item) => {
  console.log(message)
    return (
      <DialogsContainer>
        <div>

        </div>
        <div>
          {message.map((text,id) => {
            return (
              <div key={id}>
                <Message message={text.text} />
              </div>
            )
          })}
        </div>
      </DialogsContainer>
    )

}

export default Dialogs;