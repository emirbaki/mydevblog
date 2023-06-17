'use client'
import {motion as m } from 'framer-motion'
import React, { useState } from 'react'

import { Heading } from '@/components/nav/Heading'
import { SideBar } from '@/components/nav/SideBar'
import { About } from '@/components/about/About'
import { Hero } from '@/components/hero/Hero'
import { Experience } from '@/components/experience/Experience'
import { Projects } from '@/components/projects/Projects'
import { Contact } from '@/components/contact/Contact'



const Page = () => {
  const [aboutActive, setActiveAbout] = useState(false);
  const [contactActive, setActiveContact] = useState(false);


  return (
    <m.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 2, ease: 'easeOut'}}> 

      <div className='container'>
        <SideBar />
        <main>
          <Heading />
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
          <div
            style={{
              height: "200px",
            }}
          />
        </main>


      </div>
      </m.div>
  )
}

export default Page