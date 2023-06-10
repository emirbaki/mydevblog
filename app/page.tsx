'use client'
import {motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


import githubIcon from './icons/github-mark.svg'
import twitterIcon from './icons/Logo_of_Twitter.svg'
import instagramIcon from './icons/instagram-logo.svg'
import linkedinIcon from './icons/icons8-linkedin.svg'
import InfoCard from '@/components/infocard'



const Page = () => {
  const [aboutActive, setActiveAbout] = useState(false);
  const [contactActive, setActiveContact] = useState(false);


  return (
    <m.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 2, ease: 'easeOut'}}> 
      <div className='container'>

        <nav>
          <ul>
            <li onClick={() => setActiveAbout(!aboutActive)}>/about me </li>
            <li><Link href='/blog'>/my blog</Link> </li>
            <li onClick={() => setActiveContact(!contactActive)}>/contact </li>
            <li>/projects </li>
          </ul>
        </nav>

        <main>
          <h1>emirbakidemirci:$<span className='cursor'>| </span></h1>

          <ul>
            <li>  <a href="https://github.com/emirbaki" target='_blank'> <Image priority src={githubIcon} alt='github icon' width={18} height={18}></Image> Github</a></li>
            <li> <a href="https://twitter.com/sumsukkafa" target='_blank'> <Image priority src={twitterIcon} alt='twitter icon' width={18} height={18}></Image> Twitter</a></li>
            <li> <a href="https://www.instagram.com/emirbaki.d/" target='_blank'><Image priority src={instagramIcon} alt='instagram icon' width={18} height={18}></Image> Instagram</a></li>
            <li> <a href="https://www.linkedin.com/in/emir-baki-demirci-896a0b1b1/" target='_blank'><Image priority src={linkedinIcon} alt='linkedin icon' width={18} height={18}></Image> LinkedIn</a></li>
          </ul>
        </main>

        
        <div className='hidden'>
        <m.div initial={{opacity : 1}} animate={{opacity : aboutActive ? 0 : 1}} transition={{duration : 1, ease: 'easeOut'}}> 
        <InfoCard title = 'About Me'> 
          Merhaba, ben Emir Baki Demirci. Marmara Üniversitesi Endüstri Mühendisliği 3. sınıf öğrenicisiyim. Geçtiğimiz 3 yıllık 
          süreç içerisinde Unity, C#, C++, UE5 gibi oyun geliştirme teknolojileri ile uğraştım ve hala uğraşmaya devam ediyorum.
          Bu sitede de gene aynı şekilde kendi geliştirmekte olduğum oyunlarıma dair devbloglar yayınlayacağım. Gene farklı olarak
          ara sıra farklı içeriklerle paylaşımda bulunmayı planlıyorum.
        </InfoCard>
        </m.div>

        <m.div initial={{opacity : 1}} animate={{opacity : contactActive ? 0 : 1}} transition={{duration : 1, ease: 'easeOut'}}> 
          <InfoCard title = 'Contact Me' >
            <p>Bu benim emailim. Gerekli gördüğünüz takdirde bana email yoluyla yahutta yukarıdaki sosyal linklerden ulaşabilirsiniz.</p>
            <p>Email: emirbaki.068@gmail.com</p>
          </InfoCard>
        </m.div>

  

        </div>

      </div>
      </m.div>
  )
}

export default Page