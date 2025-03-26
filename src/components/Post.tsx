import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";


interface PostProps {
  data: {
    title: string
    author: string
    selftext: string
    urlDest: string
    created: number
  }
}

dayjs.extend(relativeTime)
dayjs.locale("pt-br")

export default function Post({ data }: PostProps) {
  const timestampFromNow = dayjs.unix(data.created).fromNow()

  return (
    <div className="bg-zinc-800 py-3 pl-4 pr-2 rounded-xl w-3xl max-[814px]:w-xl max-[620px]:w-md max-[488px]:w-sm max-[424px]:w-xs">

      <div className="flex justify-between ">
        <p className="text-lg w-5/6 max-[488px]:text-base">{data.title}</p>
        <time className="text-xs">{timestampFromNow}</time>
      </div>
      <strong className="text-sm">Autor: {data.author}</strong>
      <p className="p-2 line-clamp-5">{data.selftext}</p>
      <Link href={`https://www.reddit.com${data.urlDest}`} target="_blank" rel="noopener noreferrer" className="text-orange-600 text-sm hover:text-orange-400">Mais detalhes</Link>
    </div>
  )
}