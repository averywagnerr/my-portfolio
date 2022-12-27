import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import avery1 from '../images/avery1.jpeg';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count]= useTypewriter({
        words: [
            "Hi, I'm Avery Wagner",
            "abcabcabc",
            "12345",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    // TODO : replace img with NextJS Image component. Convert to webp format.
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
        src={avery1}
        alt="Avery Wagner"
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        /> 
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Computer Science Student</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                <button className='heroButton'>About</button></Link>
                <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                <Link href='#projects'><button className='heroButton'>Projects</button></Link>
                <Link href='#skills'><button className='heroButton'>Skills</button></Link>
            </div>
        </div>
    </div>
  )
}