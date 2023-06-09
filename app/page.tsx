import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import githubIcon from './icons/github-mark.svg'
import twitterIcon from './icons/Logo_of_Twitter.svg'
import instagramIcon from './icons/instagram-logo.svg'
import linkedinIcon from './icons/icons8-linkedin.svg'



const page = () => {
  return (
    <div>
      <div className='container'>
        <nav>
          <ul>
            <li>/about me </li>
            <li><Link href= '/blog'>/my blog</Link> </li>
            <li>/contact </li>
            <li>/projects </li>
          </ul>
        </nav>

        <main>
          <h1>emirbakidemirci:$<span className='cursor'>| </span></h1>

          <ul>
            <li>  <a href="https://github.com/emirbaki" target='_blank'> <Image priority src= {githubIcon} alt='github icon' width={18} height={18}></Image> Github</a></li>
            <li> <a href="https://twitter.com/sumsukkafa" target='_blank'> <Image priority src= {twitterIcon} alt='twitter icon' width={18} height={18}></Image> Twitter</a></li>
            <li> <a href="https://www.instagram.com/emirbaki.d/" target='_blank'><Image priority src= {instagramIcon} alt= 'instagram icon' width={18} height={18}></Image> Instagram</a></li>
            <li> <a href="https://www.linkedin.com/in/emir-baki-demirci-896a0b1b1/" target='_blank'><Image priority src= {linkedinIcon} alt='linkedin icon' width={18} height={18}></Image> LinkedIn</a></li>
          </ul>
        </main>

        <div className='hidden'>
          <div className='about-content'> 
          <h2>about me</h2>
          <p>
            Selamlar ben Emir Baki Demirci.
          </p>

          <p>
            Burası benim blog sitem.
          </p>
          </div>

          <div className='contact-content'> 
          <h2>contact</h2>
          <p>
            Selamlar ben Emir Baki Demirci.
          </p>

          <p>
            Burası benim blog sitem.
          </p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default page