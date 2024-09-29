import userInfo from '../../userInfo'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import ResumeViewer from '../resume_viewer/ResumeViewer'
import Particles from '../magic_ui/Particals'

export default function About() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className='flex items-center justify-around px-2 font-mono overflow-hidden h-[88vh] relative' id='About'>
                <Particles
                    className="absolute inset-0"
                    quantity={200}
                    ease={80}
                    color="#64FFDA"
                    refresh
                />

                <div className='xss-min:w-4/5 px-5 flex flex-col relative z-10 ml-2'>
                    <div className='text-primaryColor text-2xl'>Hi, I am</div>
                    <div className='text-white text-[2.5rem] font-bold'>{userInfo.name}</div>
                    <div className='text-white text-xl flex font-semibold xss-max:text-sm'>I'm a&nbsp;<span className='text-primaryColor'>
                        <Typewriter
                            options={{
                                strings: userInfo.stack,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span></div>
                    <div className='text-textColor my-8 w-[90%]'>{userInfo.bio}</div>
                    <Button onClick={open} variant="filled" color='#64FFDA' size='lg' className='text-bgColor !w-fit'>Check resume</Button>
                </div>

            </div>

            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
