import React from 'react';

export interface ContentBlockProps {
  label: string;
  icon: React.ReactNode;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ children, label, icon }) => (
  <div className='flex flex-col my-2'>
    <div className='flex items-center'>
      <div className='flex items-center justify-center w-6 h-6 rounded-full bg-pink-500'>{icon}</div>
      <div className='ml-4 font-medium'>{label}</div>
      <div className='ml-4 flex-grow bg-pink-400 opacity-50' style={{ height: 1 }}></div>
    </div>
    <div className='pl-2 pr-1 mt-2'>{children}</div>
  </div>
);
