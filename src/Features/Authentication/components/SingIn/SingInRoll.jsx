import React, { useState } from 'react';
import Button from '../../../../Components/Button/Button';
import book from '../../../../assets/book_1.svg';
import student from '../../../../assets/student_1.svg';
import { Link, useNavigate } from 'react-router-dom';

const SingInRoll = () => {
  const [profile, setProfile] = useState('');
  const navigate = useNavigate();

  const cartData = [
    {
      icon: book,
      text: "I'm a tutor, will teach student",
      value: 'tutor'
    },
    {
      icon: student,
      text: "I'm a student, looking for tutor",
      value: 'student'
    },
  ];

  const singInCart = (key, icon, text, value) => <button
    key={key}
    className='w-60 px-5 py-6 border-2 rounded-lg duration-200 shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] active:shadow-[0_2px_2px_0_rgba(0,0,0,0.25)]'
    onClick={() => setProfile(value)}
  >
    <div className='flex justify-between items-center'>
      <img src={icon} alt="icon" className='w-12 h-12' />
      <div className={`h-5 w-5 rounded-full border-2 p-[3px] ${profile === value ? 'border-[#2C6ECB]' : 'border-[#8C9196]'}`}>
        <div className={`w-full h-full rounded-full ${profile === value ? 'bg-[#2C6ECB]' : 'bg-white'}`}></div>
      </div>
    </div>
    <p className='mt-9'>{text}</p>
  </button>

  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-center text-3xl  font-semibold'>Join as a Teacher or Student</h1>
      <div className='mb-36 flex justify-between'>
        {
          cartData.map((data, i) => singInCart(i, data.icon, data.text, data.value))
        }
      </div>
      <Button
        btnName='Join as a Tutor'
        btnStyle='px-32 py-3 disabled:opacity-30'
        onClick={() => navigate('/authentication/sing-form')}
        disabled={profile === '' ? true : false}
      />
      <p className='text-center'>Already have an account? <Link to='/authentication' className='text-[#2672E7]'>Log In</Link></p>
    </div>
  );
};

export default SingInRoll;
