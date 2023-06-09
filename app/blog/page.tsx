import sanityClient  from '../../sanity'
import React from 'react'
import Link from 'next/link'


export default async function Blogs(){
  const posts = await getData()

  return (
    <main className='blog-main'>
      <section className='post-section'>
        <h1>
          <Link href='/'>emirbakidemirci</Link>
          <span className='cursor'>|</span>
        </h1>

        <h3>Recent Posts</h3>
        <div className='posts'>
          {
            posts && posts.map((post : any) => (
              <article key = {post.slug.current}>
                <a href={'/blog/'+post.slug.current}>
                  <span className='post-body'>
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                    <span className='post-info'>
                    <h3 className='post-category'>{post.categories ? post.categories[0] : "No Category"}</h3>
                    <h3 className='post-title'>{post.title}</h3>
                  </span>
                  </span>
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
  return posts
}