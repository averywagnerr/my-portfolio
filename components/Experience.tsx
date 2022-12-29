import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-24"
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-5'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory pt-10 md:pt-56 xl:pt-40'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default Experience;