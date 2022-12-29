import React from 'react';
import { motion } from 'framer-motion';
import avery2 from '../images/avery2.jpeg';
import Image from 'next/image';

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-24 '> 

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <span className='pb-10'></span>
        
        <motion.div
        initial = {{
          x: -200,
          opacity: 0,
        }}
        transition = {{
          duration: 1.2,
        }}
        whileInView = {{
          opacity: 1,
          x: 0,
        }}
        viewport = {{ once: true }}
        className='-mb-10 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[500px] relative md:pt-20 xl:pt-32'
          >
            <Image 
            src={avery2}
            alt="Avery Wagner"
            className='rounded-full md:rounded-lg object-cover'
            fill
            />
        </motion.div>
        <span className='pt-6'></span>

        {/* -mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px] relative */}
        {/* md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px] relative */}

        {/* TODO */}

        {/* <motion.img
        src="../images/avery2.jpeg"
        initial = {{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px]'
          ></motion.img> */}

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold pt-5'>
            Here's a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background
          </h4>
          <p className='text-base'>
              Currently, I am a first-year student in CU's College of
              Engineering, majoring in Computer Science. When I'm not doing
              hefty loads of homework, I enjoy spending my spare time outside
              skiing, golfing, or playing soccer with friends and family. Art
              and music are also important passions of mine -- whether it be
              drawing, graphic design, playing the viola or picking up a guitar,
              I always try to keep some creative outlet close to me.
              Career wise, I'm keeping my options open and still exploring
              different paths to take. Lots of different fields within CS
              interest me; at the moment, some sort of career in Software
              Development or Engineering is what I'm leaning towards.
          </p>
        </div>
    </motion.div>
  )
}

export default About