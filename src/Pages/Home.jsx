import React from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../Components/Checkbox/Checkbox';
import FileUpload from '../Components/FileUpload/FileUpload';
import SetProfileNav from '../Components/SetProfileNav/SetProfileNav';
import InputOtp from '../Components/OTP/InputOtp';
import Button from '../Components/Button/Button';
import ProfileCart from '../Components/ProfileCart.jsx/ProfileCart';

const Home = () => {
  const navigation = useNavigate();

  return <>
    <div className='p-2 border-b'>
      <h1 className='text-4xl font-semibold'>Tutoring Platform</h1>
      <p className='my-2'>file upload - checkbox</p>
    </div>

    <div className='my-8 w-full flex justify-center gap-4'>
      <Button btnName='Sing In' btnType='primary-outline' onClick={() => navigation('/authentication/sing-in')} />
      <Button btnName='Log In' onClick={() => navigation('/authentication')} />
    </div>

    {/* Checkbox component */}
    <div className='my-8 w-[50rem] mx-auto flex justify-center gap-4'>
      <Checkbox checkboxId={2} checkboxLabel={<p>I have the terms and conditions.<a href="#" className='text-blue-500'>Privacy policy</a></p>} />
      <Checkbox checkboxId={3} />
    </div>

    {/* FileUpload component */}
    <div className='my-8 w-full flex justify-center'>
      <FileUpload />
    </div>

    <div className='my-8 flex justify-center'>
      <SetProfileNav />
    </div>

    <div className='my-8 w-full flex justify-center'>
      <InputOtp />
    </div>

    <div className='my-8 mx-auto w-[60rem] flex justify-center'>
      <ProfileCart />
    </div>






  </>
};

export default Home;