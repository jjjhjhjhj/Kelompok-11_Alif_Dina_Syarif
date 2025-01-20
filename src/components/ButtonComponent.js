import React from 'react';

const ButtonComponent = ({ type, onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {type === 'edit' ? 'Edit' : 'Delete'}
    </button>
  );
};

export default ButtonComponent;
