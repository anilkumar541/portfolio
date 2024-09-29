import React from "react";
import { skill_info } from "../../userInfo";
import SkillCard from "../skill_card/SkillCard";


export default function Skills() {
  return (
    <>
      <div className="xss-min:px-20 px-5 py-5 font-mono mt-16" id="Skills">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          <span className="text-primaryColor">03&nbsp;</span>Skills
        </h1>

        {/* skill card */} 
        <div className="flex flex-wrap items-center justify-between gap-10">
            {
                skill_info.map((info, index)=> <SkillCard key={info.title} title={info.title} skills={info.skills} />)
            }
        </div>
      </div>
    </>
  );
}


