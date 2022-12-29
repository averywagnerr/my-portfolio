import React from 'react';
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-5 md:mt-24 lg:mt-44 overflow-y-scroll'>
        {/* TODO - change to Image */}
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favery1.5dd5f584.jpeg&w=3840&q=75'
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>TITLE</h4>
            <p className='font-bold text-2xl mt-1'>COMPANY</p>
            <div className='flex space-x-2 my-2'>
                {/* TODO: change to next Image components. * these are the 'tech used' elements */}
                <img 
                className='h-10 w-10 rounded-full'
                src=''
                alt=''
                />
                <img 
                className='h-10 w-10 rounded-full'
                src=''
                alt=''
                />
                <img 
                className='h-10 w-10 rounded-full'
                src=''
                alt=''
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Start date - End date </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary points summary points summary points summary points summary points </li>
                <li>summary points summary points summary points summary points summary points </li>
                <li>summary points summary points summary points summary points summary points </li>
                <li>summary points summary points summary points summary points summary points </li>
                <li>summary points summary points summary points summary points summary points </li>
            </ul>
        </div>
    </article>
    );
}

export default ExperienceCard