import React from 'react';
import Banner from '../Banner/Banner';
const Blogs = () => {

  return (
    <div className=''> 
      <Banner>Blogs</Banner>
      <div className='px-3 md:px-20 lg:px-52'>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 text-justify">
            <div className="border-solid border-2 p-4 bg-slate-100">
              <h3 className="text-2xl">1.Difference between map,filter,foreach and find </h3>
              <p className="mt-2">In JavaScript, map, filter, forEach, and find are all methods that can be called on
                        arrays to manipulate or iterate over them.</p>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Blogs;