import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { IconHexagonLetterA } from "@tabler/icons-react";
import { NavLinks } from '../header/Header';
import React from 'react';

export default function Sidebar() {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close} size="xs">

      <Drawer.Overlay  style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content>
          <Drawer.Header style={{backgroundColor: "#656b66"}}>
            <Drawer.Title><IconHexagonLetterA color="#64FFDA" size={40} stroke={1.5} /></Drawer.Title>
            <Drawer.CloseButton className='bg-textColor' />
          </Drawer.Header>
          <Drawer.Body className='flex flex-col gap-6 items-center text-2xl text-stone-950' style={{color: "black"}} color="red">
            <NavLinks />
          </Drawer.Body>
        </Drawer.Content>

      </Drawer.Root>

      <Burger lineSize={2} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" color="#64FFDA" />;
    </>
  );
}