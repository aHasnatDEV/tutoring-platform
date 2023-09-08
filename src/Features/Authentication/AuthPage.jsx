import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '.././../assets/mingcute_pen-line.svg';

const AuthPage = () => {
  return <section className='px-48 py-10'>
    <div className='flex items-center'>
      <img src={logo} alt="" />
      <p>Tutoring Platform</p>
    </div>
    <div className='w-[62rem] mt-16 px-56 py-12 border-2 shadow-[0_1px_6px_0_rgba(0, 0, 0, 0.25)] rounded-[3.5rem] flex items-center'>
      <Outlet />
    </div>
  </section>

};

export default AuthPage;
