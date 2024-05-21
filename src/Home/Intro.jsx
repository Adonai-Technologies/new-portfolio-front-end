import React from 'react';

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
         <h1 className='text-white'>Hi , I am</h1>
         <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Adonai</h1>
         <h1 className='text-7xl sm:text-3xl text-white font-semibold'>Technologies</h1>
         <h1 className='text-7xl sm:text-3xl text-white font-semibold'>
            We Build Things For The Web
         </h1>
         <p className="text-white w-2/3">
              A full-stack web/mobile development company.
              Based in Ghana . Currently based in Africa.
              We build web/mobile apps for clients.
            </p>
            <button className="border border-tertiary  text-tertiary px-10 py-5 rounded">Get Started</button>
    </div>
  );
}

export default Intro;
