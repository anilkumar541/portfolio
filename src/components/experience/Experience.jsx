import React from "react";
import { Timeline } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { experiencInfo } from "../../userInfo";

export default function Experience() {

  const timeLineItem= (items)=> {
    return items.map((item, index)=> (
            <Timeline.Item bullet={<IconBriefcase size={20} className="text-bgColor" />} key={crypto.randomUUID()}>
                <div className="flex flex-col gap-2 border border-primaryColor p-4 rounded-xl shadow-[0_0_10px_0px_#64FFDA80]">
                  <div className="flex gap-2 items-center">
                    <img src={`company_logos/${item.company}.png`} alt="company" className="rounded-lg w-12" />

                    <div className="flex flex-col">
                        <div className="text-white text-sm sm-min:text-2xl font-semibold" >{item.role}{item.remote && "(Remote)"}</div>
                        <div className="sm-min:text-lg font-semibold text-textColor text-sm">{item.company}({item.location}) &#x2022; {item.date}</div>
                    </div>
                  </div>

                  <div className="text-textColor leading-6 text-justify text-sm">{item.description}</div>

                  <div><span className="font-semibold text-lg text-white">Skills: </span>
                    {
                      item.tech_stack.map((skill, index)=> <span key={crypto.randomUUID()} className="text-textColor">{skill}{index < item.tech_stack.length -1 && ", "}</span> )
                    }
                  </div>

                </div>
            </Timeline.Item>
    ))
  }
  return (
    <>
      <div className="xss-min:px-20 px-5 py-5 font-mono mt-16" id="Experience">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          <span className="text-primaryColor">04&nbsp;</span>Experience
        </h1>
      
        <div>
        <Timeline active={4} bulletSize={30} lineWidth={2} color="#64FFDA">
            {timeLineItem(experiencInfo)}
        </Timeline>
        </div>
      </div>
    </>
  );
}


// style={{wordWrap: "break-word", wordBreak: 'break-word', whiteSpace: "normal"}}