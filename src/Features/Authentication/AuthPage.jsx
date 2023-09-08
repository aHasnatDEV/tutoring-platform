import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '.././../assets/mingcute_pen-line.svg';

const AuthPage = () => {
  return <section className='w-fit mx-auto py-4'>
    <Link
      to='/'
      className='flex items-center my-10'
    >
      <img src={logo} alt="" />
      <p>Tutoring Platform</p>
    </Link>
    <div className='w-[62rem] mt-16 px-56 py-12 border-2 shadow-[0_1px_6px_0_rgba(0, 0, 0, 0.25)] rounded-[3.5rem] flex items-center'>
      <Outlet />
    </div>
  </section>

};

export default AuthPage;
