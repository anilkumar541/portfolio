import React from "react";
import { Anchor } from "@mantine/core";
import { IconHexagonLetterA } from "@tabler/icons-react";
import Sidebar from "../drawer/Sidebar";




const menu= ["About", "Work", "Skills", "Experience", "Contact"]
const NavLinks= ({closeSidebar})=> {

  const handleClick= (menuItem)=> {
    const section= document.getElementById(menuItem);
    if (section){
      section.scrollIntoView({behavior : "smooth"})
    }

    if (closeSidebar) {
      closeSidebar();
    }
    
  }
  return menu.map((menuItem, index) => {
    return <a className="text-textColor hover:text-primaryColor cursor-pointer" onClick={() => handleClick(menuItem)} key={index}>0{index+1}.{menuItem}</a>
  })
}

export default function Header() {
  return (
    <div className="flex justify-between bg-bgColor h-[12vh] items-center px-8 courier-prime-regular">
      <IconHexagonLetterA color="#64FFDA" size={48} stroke={1.5} />
      <div className="md-min:flex gap-8 hidden">
        <NavLinks />
      </div>

      {/* sidebar */}
      <div className="md-max:block hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export {NavLinks};

