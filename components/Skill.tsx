import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { Skill } from '../typings';
// import { FadeInChar } from './FadeInChar';
// import { usePopper } from "react-popper";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
    return (
    <div className='group relative flex cursor-pointer'>
            {/* TODO: Change to Next Image */}
            <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-lg border border-gray-500 object-scale-down h-16 w-16 md:w-[5rem] md:h-[5rem]  filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <motion.div 
            initial={{
                opacity:1
            }}
            transition={{ 
                delay: 1,
                duration: 0.5,
                ease: 'easeIn'
            }}
            whileInView={{ opacity: 0.8 }}
            className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-[5rem] md:h-[5rem] rounded-lg z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-1xl font-bold  text-black opacity-0 group-hover:opacity-100'>{skill?.progress}%</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{
                opacity:0
            }}
            transition={{ 
                delay: 1,
                duration: 0.5,
                ease: 'easeIn'
            }}
            whileInView={{ opacity: 1 }}
            className='absolute justify-center items-center text-center w-16 md:w-[5rem] p-1 -top-5 '>
               <p className='text-[calc(0.5rem+0.05vw)] text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:text-white transition duration-300 ease-in-out'>
                <span className='group-hover:flex group-hover:justify-center'>
                    {skill?.title}
                    </span>
                </p> 
            </motion.div>
    </div>
  )
}

export default Skill;