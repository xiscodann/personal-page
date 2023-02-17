import '../styles/error.scss';

const ErrorSend = ({ title, description, tryAgainForm }) => {
  return (
    <div className='error flex flex-col items-center justify-center min-h-[409px]'>
      <div>
        <div className='circle-border'></div>
        <div className='circle'>
          <div className='error'></div>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type='button' onClick={tryAgainForm}>
        Try again
      </button>
    </div>
  );
};

export default ErrorSend;
