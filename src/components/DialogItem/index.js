import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = props => {
  let path = '/dialogs/' + props.itemName.id;
  console.log(path)
  return (
    <div>
      {props.itemName.map((p,key) => {
        return  (
          <div id={key}>
            <NavLink to={path}> {p.name}</NavLink>
          </div>
        )
      })}
    </div>
  )
};

export default DialogItem;