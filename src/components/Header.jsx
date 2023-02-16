import { useState } from 'react';
import personalLogo from '../assets/logo.svg';
import '../styles/header.scss';

const Header = () => {
  const [menuButton, setMenuButton] = useState(false);

  return (
    <header className='container flex items-center justify-between mx-auto header px-4'>
      <div>
        <a href='/'>
          <img src={personalLogo} width={60} height={60} alt='Personal logo' />
        </a>
      </div>
      <div
        className={`nav-icon md:hidden ${menuButton ? 'open' : ''}`}
        onClick={() => setMenuButton(!menuButton)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`hidden md:flex gap-14 header__menu ${
          menuButton ? 'header__full-screen' : 'md:flex'
        }`}
      >
        <a href='#' onClick={() => setMenuButton(false)}>
          Who am I
        </a>
        <a href='#' onClick={() => setMenuButton(false)}>
          Soft skills
        </a>
        <a href='#' onClick={() => setMenuButton(false)}>
          Stack
        </a>
        <a href='#' onClick={() => setMenuButton(false)}>
          Let's talk
        </a>
      </div>
    </header>
  );
};

export default Header;
