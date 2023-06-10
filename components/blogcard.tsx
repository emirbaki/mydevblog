'use client'
import {motion} from 'framer-motion'


const BlogCard = (props: any) =>{

    return(
        <div>
            <motion.div whileHover={{scale: 1.1,transition: { duration: 0.2 },}} whileTap={{ scale: 0.9 }}>
        <span className='post-body'>
            <img src={props.post.mainImage.asset.url} alt={props.post.mainImage.alt}/>
            <span className='post-info'>
                <h3 className='post-category'>{props.post.categories ? props.post.categories[0] : "No Category"}</h3>
                <h3 className='post-title'>{props.post.title}</h3>
            </span>
        </span>
            </motion.div>
        </div>
    );
}

export default BlogCard;