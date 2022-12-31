import React from 'react';
import { motion } from 'framer-motion';
import avery2 from '../images/avery2.jpeg';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16'> 

        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl">
          About
        </h3>
        {/* <span className='xs:pb-10 sm:pb-2 md:pb-16'></span> */}
        
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
        className='-mb-10 md:mb-0 flex-shrink-0 w-48 h-48 md:w-64 md:h-56 xl:w-[520px] xl:h-[420px] relative xs:pt-16 md:pt-10 xl:pt-24'
          >
            <Image 
            loader={() => urlFor(pageInfo?.profilePic).url()}
            src={urlFor(pageInfo?.profilePic).url()}
            alt="Avery Wagner"
            className='rounded-full md:rounded-lg object-cover'
            fill
            />
        </motion.div>
        {/* <span className='xs:pt-16 sm:pb-10 md:pb-8'></span> */}

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

        <div className='space-y-6 md:space-y-10 px-0 md:px-10'>
          <h4 className='text-3xl md:text-4xl font-semibold'>
            A <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background
          </h4>
          <p className='text-sm md:text-base'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
    </motion.div>
  )
}
