import {createClient} from "@sanity/client";

export default createClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-05-03',

})

export async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
  }