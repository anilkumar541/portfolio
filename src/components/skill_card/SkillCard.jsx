import React from "react";
import { Badge, Avatar } from '@mantine/core';


export default function SkillCard({ title, skills }) {
  return (
    <div className="md-min:w-[45%] border border-primaryColor rounded-2xl p-5 shadow-[0_0_10px_0px_#64FFDA]">
      <div className="text-2xl font-bold text-white text-center mb-4">{title}</div>
      <div className="flex flex-wrap justify-center">
          <SkillBadge skills_array={skills} />
      </div>
    </div>
  );
}

function SkillBadge({skills_array}) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
    {skills_array.map((skill, index) => (
      <div key={crypto.randomUUID()} className="flex flex-wrap border border-textColor py-2 px-3 rounded-xl items-center"> 
        <Avatar variant="transparent" radius="xs" src={`/tech_icons/${skill}.png`}  className="w-[20px] p-1 object-contain rounded-2xl"/>
        <div className="text-textColor text-xl font-medium">
          {skill}
        </div>
      </div>
    ))}
  </div>
  );
}
