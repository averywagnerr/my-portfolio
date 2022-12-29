import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:avery.wagner@colorado.edu?subject=${formData.subject}&body=Hi Avery, %0D%0A%0D%0A ${formData.message} %0D%0A%0D%0A Sincerely, %0D%0A%0D%0A ${formData.name} %0D%0A Email: ${formData.email}`;
    };

    return (
    
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-scroll mb-16'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 pt-56 '>
            <h4 className='text-3xl font-semibold text-center'>
                Got a question? Comment? Concern?{" "}
                <span className='underline decoration-[#F7AB0A]/50'>Let's Talk.</span>
            </h4>

            <div className='space-y-6 '>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-1xl md:text-2xl'>+1 (720) 990 - 0375</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-1xl md:text-2xl '>avery.wagner@colorado.edu</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-1xl md:text-2xl'>234 wagshack lane</p>
                </div>
            </div>

            <form 
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col space-y-2 w-fit mx-auto pb-10'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button
                type='submit' 
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe;