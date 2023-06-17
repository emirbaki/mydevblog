'use client'
import sanityClient  from '../../sanity'
import React from 'react'
import BlogCard from '@/components/blogcard'
import { Heading } from '@/components/nav/Heading'


export default async function Blogs(){
  const posts = await getData()

  return (
    <main className='blog-main'>
      <Heading />
      <section className='post-section'>
        <h3>Recent Posts</h3>

        <div className='posts'>
          {
            posts && posts.map((post : any) => (
                <article key = {post.slug.current}>
                  <a href={'/blog/'+post.slug.current}>
                    <BlogCard post = {post}/>
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
  const query = '*[_type == "post"]{title, slug,"categories": categories[]-> title, mainImage{ asset->{_id,url}, alt}}'

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