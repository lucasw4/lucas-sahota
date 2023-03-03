import HeaderText from "@/components/HeaderText";
import React from "react";

const Contact = () => {
  return (
    <section className='mt-72' id='contact--section'>
      <HeaderText message='Contact Me' />
      <div className='px-5 flex justify-center'>
        <p className='text-xl flex py-2'>
          <div className='ml-4 transition-all hover:scale-110 hover:text-purple-500'>
            <a href='#' className='underline hover:no-underline'>
              lucaswade4@gmail.com
            </a>
          </div>
        </p>
      </div>
      <div className='text-xl px-5 pt-2 pb-20 flex justify-center'>
        <p>
          <strong className='text-purple-500 ml-4'>(778)-836-9908</strong>
        </p>
      </div>
    </section>
  );
};

export default Contact;
