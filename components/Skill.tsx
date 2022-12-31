import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Skill } from '../typings';

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
        className='rounded-full border border-gray-500 object-cover h-16 w-16 md:w-[5.75rem] md:h-[5.75rem]  filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <motion.div 
        initial={{  }}
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-[5.75rem] md:h-[5.75rem] rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-1xl font-bold  text-black opacity-100'>{skill?.progress}</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Skill;