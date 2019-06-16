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
    const DialogsData = [
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
    return (
      <DialogsContainer>
        <Item>
          <DialogItem name='Дмитрий' id='1' />
          <DialogItem name='Мария' id='2' />
        </Item>
       <div>
         <Message message='Привет' />
         <Message message='Как ты?' />
       </div>
      </DialogsContainer>
    )
  }
}

export default Dialogs;