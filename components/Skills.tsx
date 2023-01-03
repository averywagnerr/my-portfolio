import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen overflow-visible pt-20 md:pt-24 xl:pt-16 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center mb-10'>
      {/* h-screen, min-h-screen */}
        
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl pb-5'>
            Skills
        </h3>
        <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5 justify-center pt-10 md:pt-20 xl:pt-32 -ml-[16px]'>
            {skills.slice(0, skills.length / 2)?.map(skill => (
                <Skill key={skill._id} skill={skill} />
            ))}
            {skills.slice(skills.length / 2, skills.length)?.map(skill => (
                <Skill key={skill._id} skill={skill} directionLeft/>
            ))}
        </div>
    </motion.div>
  )
}