import { useState } from 'react';
import personalLogo from '../assets/logo.svg';
import '../styles/header.css';

const Header = () => {
  const [menuButton, setMenuButton] = useState(false);

  return (
    <header className='container flex items-center justify-between mx-auto header'>
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
        <a href='#'>Who am I</a>
        <a href='#'>Soft skills</a>
        <a href='#'>Stack</a>
        <a href='#'>Let's talk</a>
      </div>
    </header>
  );
};

export default Header;
