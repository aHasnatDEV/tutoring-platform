import React from 'react';
import FileUpload from './Components/FileUpload/FileUpload';

const App = () => {
  return <>
    <div className='p-2 border-b'>
      <h1 className='text-4xl font-semibold'>Tutoring Platform</h1>
      <p className='my-2'>file upload - checkbox</p>
    </div>

    {/* FileUpload component */}
    <div className='my-8 w-full flex justify-center'>
      <FileUpload />
    </div>
  </>
};

export default App;
