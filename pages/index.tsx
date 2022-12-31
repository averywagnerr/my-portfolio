import Head from 'next/head'
import About from '../components/About'
import Header from "../components/Header"
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link';
import { GetStaticProps } from 'next'
import { PageInfo, Skill, Project, Social, Experience } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSocial } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchExperiences } from '../utils/fetchExperiences'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
      
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills skills={skills}/>
      </section>
      
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      
      {/* Contact Me */}
      <section id='contact' className='snap-end '>
        <ContactMe pageInfo={pageInfo}/>
      </section>

      {/* logo */}
      {/* <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src=''
          alt=''/>
        </div>
      </footer>
      </Link> */}

      </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    
    revalidate: 10,
  };
};