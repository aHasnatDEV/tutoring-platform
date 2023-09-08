import React from 'react';
import Button from '../../../Components/Button/Button';
import book from '../../../assets/book_1.svg';
import student from '../../../assets/student_1.svg';

const SingIn = () => {
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

  const singInCart = (key, icon, text, value) => <div key={key} className='w-60 px-5 py-6 border-2 rounded-lg'>
    <div className='flex justify-between items-center'>
      <img src={icon} alt="icon" className='w-12 h-12' />
      <input type="radio" name="" id="" className='w-5 h-5' />
    </div>
    <p className='mt-9'>{text}</p>
  </div>

  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-center text-3xl  font-semibold'>Join as a Teacher or Student</h1>
      <div className='mb-36 flex justify-between'>
        {
          cartData.map((data, i) => singInCart(i, data.icon, data.text, data.value))
        }
      </div>
      <Button btnName='Join as a Tutor' btnStyle='px-32 py-3' />
    </div>
  );
};

export default SingIn;
