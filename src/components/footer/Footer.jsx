import React, { useState } from "react";
import userInfo from "../../userInfo"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export default function Footer({ passkey, visitCount }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [key, setKey]= useState(""); 

  console.log(key);


  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        
        <input className="border-2 px-2 rounded border-textColor" type="text" placeholder="Enter your passkey" value={key} onChange={(e) => setKey(e.target.value)} />

        {
          key === passkey ? <p className="mt-2">{visitCount}</p> : <></>
        }
      </Modal>

      <div className="px-20 py-3 font-mono mt-5 flex flex-col items-center">
            <div className="text-primaryColor">{userInfo.name}</div>
            <div className="text-textColor cursor-pointer" onClick={open}>See visits</div>
            <div className="text-textColor text-md">Copyright &copy; {new Date().getFullYear()} {userInfo.name} | All Rights Reserved.</div>
      </div>    
    </>
  );
}
