import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime";


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
    <div className="bg-zinc-800 py-3 pl-4 pr-2 rounded-xl w-3xl">

      <div className="flex justify-between ">
        <p className="text-lg">{data.title}</p>
        <time className="text-xs">{timestampFromNow}</time>
      </div>
      <strong className="text-sm">Autor: {data.author}</strong>
      <p className="p-2">{data.selftext}</p>
    </div>
  )
}