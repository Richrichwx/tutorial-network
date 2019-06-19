import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = props => {
  let path = '/dialogs/';
  return (
    <div>
      {props.dialogs.map((p,index) => {
        return  (
          <div key={index}>
            <NavLink to={path + p.id}> {p.name}</NavLink>
          </div>
        )
      })}
    </div>
  )
};

export default DialogItem;