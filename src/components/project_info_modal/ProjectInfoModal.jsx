import React from 'react'
import { Modal, Badge, ScrollArea } from '@mantine/core';

export default function ProjectInfoModal({opened, close, title, image, description, isLive, technologies, link, github}) {
  
    return (
      <>
        <Modal.Root opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize} className='sm-min::w-[50%] w-[95%]'>
          <Modal.Overlay />
          <Modal.Content className='rounded-xl font-mono'>
            <Modal.Header className='bg-bgColor'>
              <Modal.Title className='flex items-center justify-between gap-10 text-xl font-bold text-white'>
                <div>
                  {title}
                </div>
                <div className='mb-3'>
                {
                  isLive && <Badge variant="outline" color="red" className='text-primaryColor' >Live</Badge>
                }
                </div>

              </Modal.Title>
              <Modal.CloseButton color='#64FFDA' className='text-primaryColor hover:text-cyan-800' />
            </Modal.Header>
            <Modal.Body className='bg-bgColor'>
              <div className='border rounded'>
              <img className='w-full h-[250px] object-cover' src={image} alt="" />
              </div>
                <div className='my-4 flex justify-center gap-3 flex-wrap'>
                {
                    technologies.map((tech, index) => <Badge key={tech} variant="light" color="#64FFDA" size='sm'>{tech}</Badge>)
                } 
                </div>

                {/* descc */}
                <div className='text-gray-400'>
                    <p>{description}</p>
                </div>

                {/* button */}

                <div className='flex justify-between my-5 text-primaryColor font-bold'>
                  <button className=' border rounded px-3 border-primaryColor'>
                    {
                      github ? <a href={github} target='_blank'>View code</a> : <p onClick={()=> alert("Code is not available yet.")}>View code</p>
                    }
                  </button>
                  <button className=' border rounded px-3 border-primaryColor'>
                    {
                      link ? <a className='' href={link} target='_blank'>View live</a> : <p onClick={()=> alert("Not live yet.")}>View live</p>
                    }
                  </button>
                </div>

            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
  
      </>
    );
}
