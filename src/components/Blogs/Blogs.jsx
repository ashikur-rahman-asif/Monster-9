import React from 'react';
const Blogs = () => {
  return (
    <div className=''> 
<h1 className='flex text-center text-3xl mt-3 font-bold justify-center'>Blogs</h1>
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
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 text-justify">
            <div className="border-solid border-2 p-4 bg-slate-100">
              <h3 className="text-2xl">3.What is useRef in react.js?</h3>
              <p className="mt-2">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.  </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 text-justify">
            <div className="border-solid border-2 p-4 bg-slate-100">
              <h3 className="text-2xl">4.What is useMemo in react.js?</h3>
              <p className="mt-2">React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render.</p>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Blogs;