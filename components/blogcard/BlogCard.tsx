'use client'
import {motion, useAnimation, useInView} from 'framer-motion'
import styles from './blogcard.module.scss'
import { useEffect, useRef, useState } from 'react';

interface Props {
    description: string;
    author: any;
    mainImage: any;
    categories: string[];
    title: string;
    date: string;
  }

const BlogCard = ({
    title,
    categories,
    author,
    mainImage,
    description,
    date,
}: Props) =>{
    const heightRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);
    const [hovered, setHovered] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const controls = useAnimation();



    const detailVariants = {
        hidden: { y: "200%"}, //"200%"
        visible: { y: "calc("+ bodyRef.current?.clientHeight.toString()+"px - "+ heightRef.current?.clientHeight.toString() + "px + "+ 1+"px)" }
    }

    useEffect(() => {
        if (hovered) {
        controls.start("visible");
       
        } else {
        controls.start("hidden");
        }
    }, [hovered, controls]);

    return(
        <div>
            <div 
                ref ={bodyRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setIsOpen(true)} 
                className={styles.postBody}>
                <img src={mainImage.asset.url} alt={mainImage.alt} style={{
                    
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}/>
                <div className={styles.postInfo}  >  
                        
                    <motion.div
                    ref= {heightRef}
                    className={styles.postDetails} 
                    variants= {detailVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ type: 'spring', damping: 10, stiffness:100, duration: 0.75 }} 
                    >
                        <div 
                        className={styles.postTitle}>
                            <h4>{title}</h4>
                        </div>
                        <span className={styles.postDescription} >{description}</span>
                        <div className={styles.postCategory}>{
                            categories && categories.map((category : any) => (
                                <div key={category}>
                                     <span className='chipSecondary'>{category}</span>
                                </div>
                            ))
                        }</div>
                        <div className={styles.postTitle}><h3>by {author} </h3></div>
                        <span className={styles.postDescription}>published at <span>{date}</span> </span>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    );
}

export default BlogCard;