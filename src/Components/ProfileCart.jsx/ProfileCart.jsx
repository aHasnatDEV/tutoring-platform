import React from 'react';

/**
 * Profile Cart Component
 * @param {*} args 
 * @param {String} args.title Cart title
 * @param {Object} args.body Cart body
 * @returns ProfileCart
 */
const ProfileCart = ({
  title = 'Profile info Cart',
  body = <p className=''>No Data</p> 
}) => {
  return (
    <div className='w-full rounded-2xl shadow-[0_4px_16px_0px_rgba(0,0,0,0.25)]'>
      <div className='py-5 px-8 border-b-2 border-[#DBDBDB]'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
      </div>
      <div className='py-10 px-8'>
        {body}
      </div>
    </div>
  );
};

export default ProfileCart;
