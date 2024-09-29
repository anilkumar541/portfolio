import React from 'react'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandReddit,
  } from "@tabler/icons-react";


export default function SocialMedia() {
    const social_links = [
        {
          link: "https://github.com/anilkumar541",
          icon: IconBrandGithub,
        },
        {
          link: "https://www.linkedin.com/in/anil-kumar-904280170/",
          icon: IconBrandLinkedin,
        },
        {
          link: "https://www.reddit.com/user/anilkumar_coder/",
          icon: IconBrandReddit,
        },
      ];

  return (
    <div className="flex sm-min:hidden justify-center items-center gap-10 text-textColor mt-10">
      {social_links.map((item, index) => (
           <a
            key={index} className="font-mono text-lg hover:text-primaryColor transition transform" target="_blank" rel="noopener noreferrer"
            href={item.link}
          >
            <item.icon size={30} />
          </a>
        ))
      }

    </div>
  )
}
