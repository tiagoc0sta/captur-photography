import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-[600px] '>
      <h1 className='text-2xl font-bold text-center p-4'>
        Let's work together
      </h1>
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input
            className='border shadow-lg p-3 outline-none'
            type='text'
            placeholder='Name'
          />
          <input
            className='border shadow-lg p-3 outline-none'
            type='email'
            placeholder='Email'
          />
        </div>
        <input
          className='w-full border shadow-lg p-3 my-2 outline-none'
          type='text'
          placeholder='subject'
        />
        <textarea
          className='border shadow-lg p-3 w-full outline-none'
          cols='30'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
