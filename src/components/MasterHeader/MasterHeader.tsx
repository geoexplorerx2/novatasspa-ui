import React from 'react';

const MasterHeader = () => {
  return (
    <div className='sticky h-[123px] top-0'>
        <div className="container py-5 relative flex justify-between items-center overflow-hidden">
            <div className="flex justify-start">
                Menu
            </div>

            <div className="flex justify-center">
                Logo
            </div>

            <div className="flex justify-end">
                Language
            </div>
        </div>
        <div className='h-[1px] bg-[#666B45] opacity-10'></div>
    </div>
  )
};

export default MasterHeader;