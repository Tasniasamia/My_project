import ApexChart from '@/app/components/mhome/piechart';
// import Chart from '@/app/components/mhome/piechart';
import React from 'react';

const page = () => {
  
    return (
        <div className='grid md:grid-cols-3  grid-cols-1 md:gap-x-[15px] gap-y-[15px] container '>
            
          <div className='bg-green-200'><ApexChart/></div>  
            <div className='bg-red-200'>some text</div>
            <div className='bg-blue-300'>some text</div>
        </div>
    );
};

export default page;