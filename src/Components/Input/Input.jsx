import React from 'react';

const Input = ({ label, labelColor, type, inputId, placeholder }) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={inputId} className={labelColor ? labelColor : 'text-black'}>{label}</label>
      <input
        type={type}
        id={inputId}
        className='border-2 border-[#AEB4B9] outline-none rounded-md px-3 py-2 w-full'
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
