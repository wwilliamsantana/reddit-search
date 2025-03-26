
import fetchRedditPosts from "@/lib/reddit";
import Post from "./Post";

interface ContainerPorps {
  theme: string
}

interface fetchRedditPostsProps {
  amount: number | undefined;
  data: {
    title: string
    author: string
    selftext: string
    urlDest: string
    created: number
  }[]
}

export default async function ContainerPosts({ theme }: ContainerPorps) {
  const posts: fetchRedditPostsProps = await fetchRedditPosts(theme)

  return (
    <section className="mt-6">
      <h2 className="text-2xl text-zinc-400 capitalize">Pesquisa: {`${theme}`} | <span className="text-base">Quantidade: {Number(posts.amount) - 4}</span></h2>

      <div className="mt-4 text-zinc-100 flex flex-col gap-4">

        {posts.data.map(post => {
          return (
            <Post data={post} key={post.created} />
          )
        })}


      </div>
    </section>
  )
}