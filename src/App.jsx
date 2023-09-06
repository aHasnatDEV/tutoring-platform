import React from 'react';
import FileUpload from './Components/FileUpload/FileUpload';
import Checkbox from './Components/Checkbox/Checkbox';
import InputOtp from './Components/OTP/InputOtp';

const App = () => {
  return <>
    <div className='p-2 border-b'>
      <h1 className='text-4xl font-semibold'>Tutoring Platform</h1>
      <p className='my-2'>file upload - checkbox</p>
    </div>

    <div className='my-8 w-[50rem] mx-auto flex justify-center gap-4'>
      <Checkbox checkboxId={2} checkboxLabel={<p>I have the terms and conditions.<a href="#" className='text-blue-500'>Privacy policy</a></p>} />
      <Checkbox checkboxId={3} />
    </div>

    {/* FileUpload component */}
    <div className='my-8 w-full flex justify-center'>
      <FileUpload />
    </div>


    <div className='my-8 w-full flex justify-center'>
      <InputOtp />
    </div>




  </>
};

export default App;
