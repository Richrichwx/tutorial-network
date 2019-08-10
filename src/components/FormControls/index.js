import React from 'react';

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <>
      {hasError ? (
        <div className='error'>
          <input type="text" {...input}{...props}/>
        </div>
      ): (
        <div className='formControl'>
          <input type="text" {...input}{...props}/>
        </div>
      )}
      {hasError && <div className='errorText'>some error</div>}
      </>
  )
};