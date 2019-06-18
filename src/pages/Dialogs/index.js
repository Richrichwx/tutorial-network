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

class Dialogs extends React.Component {
  render() {
    const dialogsData = [
      {
        id: 1,
        name: 'Дмитрий'
      },
      {
        id: 2,
        name: 'Мария'
      }, {
        id: 3,
        name: 'Анна'
      },
      {
        id: 4,
        name: 'Александр'
      }, {
        id: 5,
        name: 'Максим'
      },
    ];

    const messageData = [
      {
        id: 1,
        text: 'Привет'
      },
      {
        id: 2,
        text: 'Как ты?'
      }
    ];
    return (
      <DialogsContainer>
        <div>
          {dialogsData.map((name,key) => {
            return (
              <Item key={key}>
                <DialogItem name={name.name} id={name.id} />
              </Item>
            )
          })}
        </div>
        <div>
          {messageData.map((text,id) => {
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
}

export default Dialogs;