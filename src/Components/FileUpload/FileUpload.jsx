import React, { useState } from 'react';
import plus_square from '../../assets/plus-square.svg';
import material from '../../assets/material-symbols_file-copy-outline-sharp.svg';
import mdi_cancel from '../../assets/mdi_cancel-circle-outline.svg'

/**
* File Upload Component
* @param {*} args
* @param {String} args.title Title for File Upload Component  
* @param {String} args.subTitle subTitle for File Upload Component  
* @param {String} args.altText altText for File Upload Component  
* @returns FileUpload
*/
function FileUpload({
  title = 'Upload Document',
  subTitle = 'ID proof, Educational certificate, Experience certificate',
  altText = 'Drag file or select file from local disk'
}) {
  const id = 'document'

  const [fileInfo, setFileInfo] = useState([]);
  const [progress, setProgress] = useState(0)

  function bytesToSize(bytes) {
    const kilobytes = bytes / 1024;
    if (kilobytes < 1024) {
      return kilobytes.toFixed(2) + ' KB';
    } else {
      const megabytes = kilobytes / 1024;
      return megabytes.toFixed(2) + ' MB';
    }
  }

  function handleFileUpload(e) {
    if (e.target.files.length === 0) return alert('Please Upload Files');
    const fileData = e.target.files[0];
    console.log(fileData);
    const id = Date.now().toString();
    setFileInfo([...fileInfo, { id, name: fileData.name, type: fileData.type, size: fileData.size, time: fileData.lastModified, percent: 0 }]);
    const reader = new FileReader();

    reader.onprogress = function (e) {
      if (e.lengthComputable) {
        const percentLoaded = parseInt((e.loaded / e.total) * 100);
        setProgress(percentLoaded);
      }
    };

    reader.onerror = function (e) {
      alert('Error occurred while loading the file.')
    };
    reader.readAsArrayBuffer(fileData);
  }

  const handelDelete = id => {
    console.log(id);
    setFileInfo(fileInfo.filter(info => info.id !== id));
  }

  return (
    <div className='w-[50rem]'>
      <div className='border-2 border-dashed border-[#BABFC3] p-8 rounded-lg text-center flex flex-col gap-4'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-[#2672E7]'>{subTitle}</p>
        <div>
          <label htmlFor={id}>
            <img src={plus_square} alt='plus_square' className='mx-auto cursor-pointer' />
          </label>
          <input type='file' id={id} onChange={handleFileUpload} className='hidden' />
        </div>
        <p className='text-xs'>{altText}</p>
      </div>
      <div>
        {fileInfo.length > 0 && fileInfo.map(data => (
          <div key={data.id} className='mt-4 rounded-lg py-4 px-6 bg-white shadow-[0_4px_16px_0px_rgba(0,0,0,0.25)]' >
            <div className='flex items-center gap-4'>
              <img src={material} alt='material' />
              <div className='w-full flex justify-between items-center'>
                <div>
                  <p>{data.name}</p>
                  <p className='flex gap-5'><span>{bytesToSize(data.size)}</span><span>{data.time}</span></p>
                </div>
                <div>
                  <img
                    src={mdi_cancel}
                    alt='mdi_cancel'
                    className='cursor-pointer'
                    onClick={()=>handelDelete(data.id)}
                  />
                  <p>{progress}%</p>
                </div>
              </div>
            </div>
            <div className='mt-2 w-full h-4 bg-[#DBDBDB] rounded-full'>
              <div className='h-4 rounded-full bg-[#008060]' style={{ width: `${progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
