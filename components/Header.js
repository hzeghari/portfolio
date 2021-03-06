import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeButton from './ThemeButton';
import { NAV as nav } from '../constants/nav';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const variants = {
    open: {
      x: 0,
      ease: 'easeOut',
      transition: {
        type: 'tween',
      },
    },
    closed: {
      x: '100%',
      ease: 'easeIn',
      transition: {
        type: 'tween',
      },
    },
  };

  const listItems = nav.map((page) => {
    return (
      <li key={page.name}>
        <Link href={page.slug}>
          <a>{page.name}</a>
        </Link>
      </li>
    );
  });


  const sentence = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const word = {
    hidden: {
      y: 32,
      opacity: 0,
    },
    show: {
      y: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.75,
      },
    },
  };

  return (
    <header className='px-8 pt-8 h-24 text-3xl leading-none tracking-wide uppercase'>
      <div className='grid gap-4 grid-cols-[1fr_auto] items-center'>
        <div>
          {/* <Link href='/'>
            <a className='flex place-items-center sm:text-2xl'>
              <span className='text-5xl sm:text-4xl'>
                {'{HZ}'}
              </span>
              <span>Hamza Zeghari</span>
            </a>
          </Link> */}
          {/* <Link href='/'>
            <a className='sm:text-2xl'>Hamza Zeghari</a>
          </Link> */}
          <Link href='/'>
            <a>
            <motion.div
              initial='hidden'
              animate='show'
              variants={sentence}
              className='sm:text-2xl'>
              <motion.span
                variants={word}>
                  Hamza
              </motion.span>{' '}
              <motion.span
                variants={word}>
                  Zeghari
              </motion.span>
            </motion.div>
            </a>
          </Link>
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>

      {/* <div className='flex items-center justify-end gap-16 md:gap-8'>
        <nav className='md:hidden'>
          <ul className='flex gap-16'>{listItems}</ul>
        </nav>
        <ThemeButton />
        <button
          onClick={handleClick}
          className='hidden md:flex flex-col justify-center gap-3 w-[40px] h-[40px]'
        >
          <span className='block w-full h-[1px] bg-black'></span>
          <span className='block w-full h-[1px] bg-black'></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 ${!isOpen ? 'pointer-events-none' : ''} z-10`}
      >
        <div onClick={handleClick} className={`absolute inset-0 h-full`}></div>
        <motion.div
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className={`relative flex flex-col justify-between gap-8 p-8 max-w-sm sm:max-w-[calc(100%-64px)] h-full ml-auto bg-primary-300`}
        >
          <nav>
            <ul className='flex flex-col gap-8'>{listItems}</ul>
          </nav>
          <ThemeButton />
        </motion.div>
      </div> */}
    </header>
  );
}

export default Header;
