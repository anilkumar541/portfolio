import React from 'react'
import { Modal, Badge, ScrollArea } from '@mantine/core';

export default function ProjectInfoModal({opened, close, title, image, description, isLive, technologies, link, github}) {
  
    return (
      <>
        <Modal.Root opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize} size="50%">
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
                <div className='text-gray-400 text-justify'>
                    <p>{description}</p>
                </div>

                {/* button */}

                <div className='flex justify-between my-5 text-primaryColor font-bold'>
                  <button className=' border rounded px-3 border-primaryColor'><a href="">View code</a></button>
                  <button className=' border rounded px-3 border-primaryColor'><a className='' href="">View live</a></button>
                </div>

            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
  
      </>
    );
}
