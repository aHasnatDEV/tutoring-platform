import React from 'react';
import google from '../../../assets/google-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import apple from '../../../assets/apple-icon.svg';

const SocialLogIn = () => {
  const socialData = [
    {
      icon: google,
      title: 'Continue with Google'
    },
    {
      icon: facebook,
      title: 'Continue with Facebook'
    },
    {
      icon: apple,
      title: 'Continue with Apple'
    },
  ];

  const social = (icon, title, key) => <div key={key} className='w-full py-4 flex items-center justify-center gap-7 border-2 border-[#000] rounded-lg hover:bg-[#2673e71f] hover:border-[#2673e7]'>
    <img src={icon} alt="icon" />
    <p className='font-semibold'>{title}</p>
  </div>

  return <div className='flex flex-col gap-6'>
    {
      socialData.map((data, i) => social(data.icon, data.title, i))
    }
  </div>
};

export default SocialLogIn;
