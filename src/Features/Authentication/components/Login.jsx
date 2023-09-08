import React from 'react';
import Input from '../../../Components/Input/Input';
import Checkbox from '../../../Components/Checkbox/Checkbox';
import Button from '../../../Components/Button/Button';
import google from '../../../assets/google-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import apple from '../../../assets/apple-icon.svg';
import SocialLogIn from './SocialLogIn';

const Login = () => {
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
  ]

  const social = (icon, title, key) => <div key={key} className='w-full py-4 flex items-center justify-center gap-7 border-2 border-[#000] rounded-lg hover:bg-[#2673e71f] hover:border-[#2673e7]'>
    <img src={icon} alt="icon" />
    <p className='font-semibold'>{title}</p>
  </div>

  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-center text-3xl font-semibold'>Login to Tutoring Platform</h1>
      <Input
        inputId='email'
        label='Email'
        labelColor='text-[#2672E7]'
        type='email'
        placeholder='Email'
      />
      <Input
        inputId='password'
        label='Password'
        labelColor='text-[#2672E7]'
        type='password'
        placeholder='Password'
      />
      <Checkbox checkboxId={2} checkboxLabel={<p>I have the terms and conditions.<a href="/" className='text-blue-500'>Privacy policy</a></p>} />
      <Button btnName='Join as a Student' btnStyle='w-full py-3' />
      <div className='flex items-center gap-4'>
        <span className='w-full h-[1px] bg-[#838383]' />
        <p className='text-[#838383] font-bold'>Or</p>
        <span className='w-full h-[1px] bg-[#838383]' />
      </div>
      <SocialLogIn />
    </div>
  );
};

export default Login;
