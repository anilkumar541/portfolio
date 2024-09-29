import React from 'react'
import Header from '../header/Header'
import Mail from '../mail/Mail'
import SocialSidebar from '../social_sidebar/SocialSidebar'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import SocialMedia from '../social_media_for_mobile/SocialMedia'

export default function Homepage() {
  return (
    <>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Mail />
        <SocialMedia />
        <Footer />
        <SocialSidebar />
    </>
  )
}
