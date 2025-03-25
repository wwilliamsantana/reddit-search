"use client"

import Post from "./Post";

interface ContainerPorps {
  theme: string
}


export default function ContainerPosts({ theme }: ContainerPorps) {


  return (
    <section className="mt-6">
      <h2 className="text-2xl text-zinc-400 capitalize">Pesquisa: {`${theme}`} | <span className="text-base">Quantidade: 64</span></h2>

      <div className="mt-4 text-zinc-100 flex flex-col gap-4">
        <Post />
        <Post />
        <Post />

      </div>
    </section>
  )
}