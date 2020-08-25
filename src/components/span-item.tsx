import React from 'react';

export const SpanItem: React.FC<{ label: string; sub: string }> = ({ children, label, sub }) => (
  <div className='grid grid-cols-3 mb-2 gap-1'>
    <div className='col-span-1 flex flex-col'>
      <em className='text-xs font-medium'>
        <span className='text-pink-400 mb-1'>■</span> {sub}
      </em>
      <div className='ml-1 flex-grow border-pink-400' style={{ borderLeftWidth: 1 }}></div>
    </div>
    <div className='col-span-2 grid grid-cols-1 gap-1 text-xs'>
      <div className='h-5 text-pink-600 font-semibold'>{label}</div>
      {children}
    </div>
  </div>
);
