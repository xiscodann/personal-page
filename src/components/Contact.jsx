import { useState } from 'react';
import '../styles/contact.scss';

const Contact = () => {
  return (
    <section
      className='max-w-screen-sm mx-auto text-center contact flex flex-col justify-center gap-8 px-4'
      id='contact'
    >
      <h2>Let's talk</h2>
      <div class='w-full'>
        <div class='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
          <form>
            <div class='mb-4'>
              <input
                type='text'
                placeholder='Your Name'
                class='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
                required
              />
            </div>
            <div class='mb-4'>
              <input
                type='email'
                placeholder='Your Email'
                class='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
                required
              />
            </div>
            <div class='mb-6'>
              <textarea
                rows='3'
                placeholder='Your Message'
                class='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary'
                required
              ></textarea>
            </div>
            <button type='submit' className='contact__button'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
