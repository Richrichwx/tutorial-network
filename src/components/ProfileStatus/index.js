import React, { useState } from 'react';

const ProfileStatus =(props) =>  {
  const [editMode,setEditMode] = useState(false);
  const [status,setStatus] = useState(props.status);
  const activationEdit = () => {
    setEditMode(true);
  };
  const deactivationEdit = () => {
    setEditMode(false)
  };
  const  onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    props.updateStatusThunk(status)
  };
    return (
      <div>
        {editMode ? (
          <input type="text" value={status }
                 onBlur={ deactivationEdit }
                 autoFocus={ true }
                 onChange={onStatusChange}/>
        ) : (
          <div onClick={activationEdit  }>{ props.status|| "Изменить статус" }</div>
        ) }
      </div>
    )
  }

export default ProfileStatus;