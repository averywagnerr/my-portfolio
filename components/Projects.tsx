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

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
            {projects.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    src={urlFor(project?.image).url()}
                    alt=''
                    />
                    <div className='space-y-6  px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}
                            {project?.title}
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                        {project?.technologies.map(technology => (
                            <img 
                            className='h-8 w-8'
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=''
                            />
                        )
                        )}
                        </div>

                        <p className='text-md text-center md:text-left'>
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