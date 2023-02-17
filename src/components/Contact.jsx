import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Loading from './Loading.jsx';
import '../styles/contact.scss';
import SuccessSend from './SuccessSend.jsx';
import ErrorSend from './ErrorSend.jsx';

const Contact = ({ si, ti, pk }) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState({
    error: false,
    success: false,
  });

  const sendForm = (e) => {
    e && e.preventDefault();
    const { name, email, message } = data;
    const body = {
      from_name: name,
      user_email: email,
      message: message,
    };
    setLoading(true);
    emailjs.send(si, ti, body, pk).then(
      (result) => {
        setSend({ error: false, success: true });
        setLoading(false);
      },
      (error) => {
        console.error(error.text);
        setSend({ error: true, success: false });
        setLoading(false);
      }
    );
  };

  const restartForm = () => {
    setData(initialState);
    setSend({ error: false, success: false });
  };

  return (
    <section
      className='max-w-screen-sm mx-auto text-center contact flex flex-col justify-center gap-8 px-4'
      id='contact'
    >
      <h2>Let's talk</h2>
      <div className='w-full'>
        {!loading ? (
          <>
            {!send.success && !send.error ? (
              <div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
                <form onSubmit={(e) => sendForm(e)}>
                  <div className='mb-4'>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <input
                      type='email'
                      placeholder='Your Email'
                      className='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='mb-6'>
                    <textarea
                      rows='3'
                      placeholder='Your Message'
                      className='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary'
                      value={data.message}
                      onChange={(e) =>
                        setData({ ...data, message: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                  <button type='submit' className='contact__button'>
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <>
                {send.success && (
                  <SuccessSend
                    title={'¡Great!'}
                    description={
                      'Your message has been sent successfully. I will be contacting you soon'
                    }
                    restartForm={() => restartForm()}
                  />
                )}
                {send.error && (
                  <ErrorSend
                    title={'¡Oops!'}
                    description={
                      'Your message could not be sent. Please try again or wait a few minutes.'
                    }
                    tryAgainForm={() => sendForm()}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <div className='flex items-center justify-center min-h-[409px]'>
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
