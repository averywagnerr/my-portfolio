import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='max-h-[450px] xl:max-h-[32rem] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[420px] md:w-[550px] xl:w-[580px] snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 mt-5 md:mt-10 lg:mt-20 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A] '>
        {/* TODO - change to Image */}
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-40 h-24 md:w-56 md:h-40 rounded-md  object-center object-cover'
        src={urlFor(experience?.companyImage).url()}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-semibold uppercase text-[1.4rem] tracking-[1px] mt-1 text-gray-300/90'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {/* TODO: change to next Image components. * these are the 'tech used' elements */}
                {
                experience.technologies.map((technology) => (<img 
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-contain"
                    src={urlFor(technology.image).url()}
                />))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere 
                ? "Present"
                : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='overflow-y-visible list-disc space-y-4 ml-4.8 text-[0.975rem]'>
                {experience.points.map((point, i) => (
                    <li key={i} >{point}</li>
                ))}
            </ul>
        </div>
    </article>
    );
}