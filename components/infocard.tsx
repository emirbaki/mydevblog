'use client'
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
    offscreen: {
        x: -550 , 
        y: 400,
        opacity:0
        
    },
    onscreen: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.1
      }
    }
  };

const InfoCard = (props : any) => {
    return (
        <motion.div 
        className= 'infocard'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}>
             <motion.div className="card" variants={cardVariants}>
             <h2>{props.title}</h2>
                {props.children}
            </motion.div>
        </motion.div>
    );
}

export default InfoCard