import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import rtImage from "../public/images/me.jpg";
import rtImage1 from "../public/images/01.png";


export default function About() {

    const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'PHP', 'Laravel', 'WordPress'];

  return (
    <div className='min-h-screen max-w-4xl my-0 mx-auto px-0 py-24'>
      <div className='flex items-center relative mt-3 mx-0 mb-10 max-w-full text-3xl whitespace-nowrap'>
        <span className='relative mr-[10px] text-xl font-mono font-normal'>
          01.
        </span>
        <h2 className='font-serif'>About Me</h2>
        <span className='block relative w-72 h-[1px] ml-5 bg-black dark:bg-[#5F5F4F]'></span>
      </div>

      <div className='grid grid-cols-[3fr_2fr] gap-12'>
        <div>
          <div className='font-mono'>
            <p className='mx-0 mt-0 mb-4 text-justify'>
              Hey! i&apos;m Hamza, a software engineer based in Casablaca,
              MOROCCO who enjoys building stuff that live on the net. I develop
              remarkable websites and web apps that offer intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
            </p>
            <p className='mx-0 mt-0 mb-4 text-justify'>
              Shortly after graduating from SETTAT Faculty of Science and
              Technology, I joined the company Applite in which I work on a huge
              style of interesting and significant projects on a daily basis.
            </p>
            <p className='mx-0 mt-0 mb-4 text-justify'>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>

          <ul className='grid grid-cols-2 p-0 mt-5 mx-0 overflow-hidden list-none'>
            {skills &&
              skills.map((skill, i) => (
                <div key={i}>
                  <span className='absolute text-xs leading-3'>▹</span>
                  <li className='relative mb-2 pl-5 text-xs font-sans'>
                    {skill}
                  </li>
                </div>
              ))}
          </ul>
        </div>

        <div className='max-w-xs h-96'>
          {/* <Image
                src={rtImage}
                placeholder="blur"
                layout="responsive"
                alt="Picture of the author" />
                border-2 rounded-md border-black dark:border-[#5F5F4F] */}
          
            <div className='w-full sm:w-full m-auto'>
              <Image
                src={rtImage1}
                placeholder='blur'
                layout='responsive'
                alt='Picture of the author'
                className='shadow-lg rounded-full max-w-full h-auto align-middle border-none'
              />
            </div>
          

        </div>
      </div>
      {/* <NumberedHeading>
            About Me
        </NumberedHeading> */}
    </div>
  );
}

const NumberedHeading = styled.h2`
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: 32px;
    white-space: nowrap;

    &:before {
        position: relative;
        bottom: 4px;
        counter-increment: section;
        content: '01' '.';
        margin-right: 10px;
        // color: var(--green);
        // font-family: var(--font-mono);
        font-size: 20px;
        font-weight: 400;
        @media (max-width: 480px) {
          margin-bottom: -3px;
          margin-right: 5px;
        }
    }

    &:after {
        content: '';
        display: block;
        position: relative;
        top: -5px;
        width: 300px;
        height: 1px;
        margin-left: 20px;
        background-color: black;
        @media (max-width: 1080px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          margin-left: 10px;
        }
    }
  
`;