import React from 'react';
import plus_square from '../../assets/plus-square.svg';
import material from '../../assets/material-symbols_file-copy-outline-sharp.svg';
import mdi_cancel from '../../assets/mdi_cancel-circle-outline.svg'

const FileUpload = ({
  title = 'Upload Document',
  subTitle = 'ID proof, Educational certificate, Experience certificate',
  altText = 'Drag file or select file from local disk'
}) => {
  return (
    <div className='w-[40rem]'>
      <div className='border-2 border-dashed border-[#BABFC3] p-8 rounded-lg text-center flex flex-col gap-4'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-[#2672E7]'>{subTitle}</p>
        <img src={plus_square} alt='plus_square' className='mx-auto cursor-pointer' />
        <p className='text-xs'>{altText}</p>
      </div>
      <div>
        <div className='mt-4 rounded-lg py-4 px-6 bg-white shadow-[0_4px_16px_0px_rgba(0,0,0,0.25)]'>
          <div className='flex items-center gap-4'>
            <img src={material} alt='material' />
            <div className='w-full flex justify-between items-center'>
              <div>
                <p>ID</p>
                <p className='flex gap-5'><span>443 KB</span><span>2Sec.</span></p>
              </div>
              <div>
                <img src={mdi_cancel} alt='mdi_cancel' />
                <p>80%</p>
              </div>
            </div>
          </div>
          <div className='mt-2 w-full h-4 bg-[#DBDBDB] rounded-full'>
            <div className={`h-4 w-[75%] rounded-full bg-[#008060]`}></div>
          </div>
        </div>
        <div className='mt-4 rounded-lg py-4 px-6 bg-white shadow-[0_4px_16px_0px_rgba(0,0,0,0.25)]'>
          <div className='flex items-center gap-4'>
            <img src={material} alt='material' />
            <div className='w-full flex justify-between items-center'>
              <div>
                <p>ID</p>
                <p className='flex gap-5'><span>443 KB</span><span>2Sec.</span></p>
              </div>
              <div>
                <img src={mdi_cancel} alt='mdi_cancel' />
                <p>80%</p>
              </div>
            </div>
          </div>
          <div className='mt-2 w-full h-4 bg-[#DBDBDB] rounded-full'>
            <div className={`h-4 w-[75%] rounded-full bg-[#008060]`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
