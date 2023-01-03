import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
    projects: Project[]
};

function Projects({ projects }: Props) {
  return (
 <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin top-12'>
            {projects.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{ 
                        opacity: 0, 
                        scale: 0.5 }}
                    // animate={{ 
                    //     opacity: 1, 
                    //     scale: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                      ease: [0, 0.41, 0.2, 1.21]
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    src={urlFor(project?.image).url()}
                    alt=''
                    className='w-[calc(10rem+9vw)] h-[calc(8rem+8vw)] object-cover rounded-lg'
                    
                    />
                    <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}
                            {project?.title}
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                        {project?.technologies.map(technology => (
                            <img 
                            className='h-[calc(2rem+0.02vw)] w-[calc(2rem+0.02vw)]'
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=''
                            />
                        )
                        )}
                        </div>

                        <p className='text-[0.95rem] text-center md:text-left'>
                            {/* Laborum magna exercitation cillum pariatur quis enim amet eiusmod quis sit voluptate. Enim ut officia nulla eiusmod sit non. Reprehenderit id nulla consequat aliqua est reprehenderit veniam velit consequat. */}
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[24%] bg-[#F7AB0A]/10 left-0 h-[380px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects;