'use client'
import sanityClient  from '../../sanity'
import React from 'react'
import BlogCard from '@/components/blogcard/BlogCard'
import { Heading } from '@/components/nav/Heading'
import { SectionHeader } from '@/components/utils/SectionHeader'
import styles from '@/components/blogcard/blogcard.module.scss'


export default async function Blogs(){
  const posts = await getData()

  return (
    <main className='blog-main'>
      <Heading />

      <section className='post-section'>
      <SectionHeader title="Recent Posts" dir="l" />

        <div className={styles.posts}>
          {
            posts && posts.map((post : any) => (
                <article key = {post.slug.current}>
                  <a href={'/blog/'+post.slug.current}>
                    <BlogCard author={post.author}
                     description={post.description}
                      mainImage={post.mainImage} 
                      categories={post.categories} 
                      title={post.title} 
                      date={post.publishedAt} />
                  </a>
                </article>
            ))
          }
        </div>
      </section>
    </main>
  )
}
async function getData(){
  const query = '*[_type == "post"]{title, slug,"categories": categories[]-> title, mainImage{ asset->{_id,url}, alt}, publishedAt, "author": author->name, description}'

  const posts = await sanityClient.fetch(query)
  if(posts != null)
  {
    return posts
  }
  else
  {
    return [];
  }
}