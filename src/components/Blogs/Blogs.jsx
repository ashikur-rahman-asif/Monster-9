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
              <h3 className="text-2xl">1.What is ContextApi ? </h3>
              <p className="mt-2">The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 text-justify">
            <div className="border-solid border-2 p-4 bg-slate-100">
              <h3 className="text-2xl">2.What is custom hook in react.js? </h3>
              <p className="mt-2">Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Blogs;