import React from 'react'
import sanityClient  from '../../../sanity'
const BlockContent = require('@sanity/block-content-to-react')

type Props = {
  params: {blog: string}
}
const serializers = {
  types: {
    code: (props : any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}
export async function getBlog(slug : string) {
  const query = '*[_type == "post" && slug.current == $slug][0]{title, slug,"categories": categories[]-> title, mainImage{ asset->{_id,url}, alt}, body}'
  const posts = await sanityClient.fetch(query, {slug})

  return posts
}
export default async function Page({ params} : Props) {
  const slug = params.blog;

  const blog = await getBlog(slug)

  return <div>
    <main>
    <h3 className='blog-header'><a href="/blog">Blogs/</a>{blog.title} </h3>
    {/* <img src={blog.mainImage.asset.url} alt={blog.mainImage.alt} /> */}
    <BlockContent className='blog-content' dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
     blocks={blog.body} serializers={serializers}
     imageOptions={{w: 320, h: 240, fit: 'max'}} />
    </main>
  
  </div>;
}