import React from 'react';

/**
 * Checkbox Component
 * @param {*} args
 * @param {Object} args.checkboxLabel checkbox label
 * @param {Object} args.checkboxId checkbox unique id
 * @returns 
 */
const Checkbox = ({
  checkboxLabel = 'Checkbox Label',
  checkboxId = 'def',
  ...restProps
}) => {
  const handelCheckbox = e => {
    return e;
  }

  return (
    <div className='flex items-center gap-1 cursor-pointer'>
      <input
        type="checkbox"
        id={checkboxId}
        className='cursor-pointer'
        onChange={handelCheckbox}
        {...restProps}
      />
      <label
        htmlFor={checkboxId}
        className='cursor-pointer'
      >
        {checkboxLabel}
      </label>
    </div>
  );
};

export default Checkbox;
