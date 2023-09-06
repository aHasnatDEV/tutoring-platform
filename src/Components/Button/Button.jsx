import React from 'react';

/**
 * Button Component
 * @param {*} args
 * @param {String} args.btnName Button title
 * @param {String} args.btnType Button type (primary || primary-outline || cancel || green)
 * @param {String} args.btnStyle Button style
 * @param {String} args.restProps Button Props (onClick, onFocus, onBlur, etc.)
 * @returns Button
 */
const Button = ({
  btnName = 'Button',
  btnType = 'primary',
  btnStyle = 'px-4 py-2',
  ...restProps
}) => {
  return (
    btnType === 'primary' && <button
      className={`bg-primary rounded border-b border-primary-hover text-white font-semibold shadow-[0_1px_0_0_rgba(0,0,0,0.08)] hover:bg-primary-hover ${btnStyle}`}
      {...restProps}
    >
      {btnName}
    </button> ||
    btnType === 'primary-outline' && <button
      className={`rounded border-2 border-primary text-primary font-semibold shadow-[0_1px_0_0_rgba(0,0,0,0.08)] hover:bg-primary hover:text-white ${btnStyle}`}
      {...restProps}
    >
      {btnName}
    </button> ||
    btnType === 'cancel' && <button
      className={`rounded border-2 border-[#BABFC3] font-semibold shadow-[0_1px_0_0_rgba(0,0,0,0.08)] ${btnStyle}`}
      {...restProps}
    >
      {btnName}
    </button> ||
    btnType === 'green' && <button
      className={`bg-custom-green rounded font-semibold text-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)] ${btnStyle}`}
      {...restProps}
    >
      {btnName}
    </button>
  );
};

export default Button;
