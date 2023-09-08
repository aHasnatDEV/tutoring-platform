import React from 'react';
import Input from '../../../../Components/Input/Input';
import Checkbox from '../../../../Components/Checkbox/Checkbox';
import Button from '../../../../Components/Button/Button';
import { Link } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn';

const SingInForm = () => {
  return <>
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-center text-3xl font-semibold'>Sign up for tutoring job</h1>
      <Input
        inputId='name'
        label='Name'
        labelColor='text-[#2672E7]'
        type='text'
        placeholder='Full Name'
      />
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
      <p className='text-gray-400'>A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters</p>
      <Checkbox checkboxId={2} checkboxLabel={<p>I have the terms and conditions.<Link to='/' className='text-blue-500'>Privacy policy</Link></p>} />
      <Button btnName='Join as a Tutor' btnStyle='w-full py-3' />
      <div className='flex items-center gap-4'>
        <span className='w-full h-[1px] bg-[#838383]' />
        <p className='text-[#838383] font-bold'>Or</p>
        <span className='w-full h-[1px] bg-[#838383]' />
      </div>
      <SocialLogIn />
    </div>
  </>
};

export default SingInForm;
