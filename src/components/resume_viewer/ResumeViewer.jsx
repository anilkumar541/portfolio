import React, { useState } from 'react'
import { Modal, Badge, ScrollArea, ActionIcon, Tooltip } from '@mantine/core';
import { Document, Page } from 'react-pdf';
import { IconDownload } from '@tabler/icons-react';
import userInfo from '../../userInfo';

export default function ResumeViewer({opened, close}) {
    const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
}

  return (
    <Modal.Root opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize} size="auto">
          <Modal.Overlay />
          <Modal.Content className='rounded-xl font-mono'>
            <Modal.Header className='bg-bgColor'>
              <Modal.Title className='flex items-center justify-between gap-10 text-xl font-bold text-white'>Resume
                <Tooltip label="Download" position="right" offset={5} color='#64FFDA' className='text-bgColor'>
                    <ActionIcon variant="outline" color='#64FFDA' component='a' href='/resume/anil_kumar_full_stack_dev.pdf' download={userInfo.name} className='text-primaryColor'>
                        <IconDownload className="" />
                    </ActionIcon>
                </Tooltip>
              </Modal.Title>
              <Modal.CloseButton color='#64FFDA' className='text-primaryColor hover:text-cyan-800' />
            </Modal.Header>
            <Modal.Body className='bg-bgColor'>
            <Document file="/resume/anil_kumar_full_stack_dev.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
  )
}
