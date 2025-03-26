"use server"

interface Listing {
  kind: string;
  data: ListingData;
}

interface ListingData {
  after: string;
  dist: number | undefined;
  children: Child[];
}

export interface Child {
  kind: string;
  data: ChildData
}

interface ChildData {
  selftext: string;
  author: string;
  title: string;
  permalink: string;
  created: number
}


export default async function fetchRedditPosts(theme: string) {

  if (!theme) {
    return { amount: 0, data: [] }
  }

  const response = await fetch(`https://www.reddit.com/r/${theme}.json`)
  const responseData: Listing = await response.json()

  return {
    amount: responseData.data.dist ?? 0,
    data: responseData.data.children.slice(4).map(element => {
      return {
        title: element.data.title,
        author: element.data.author,
        selftext: element.data.selftext,
        urlDest: element.data.permalink,
        created: element.data.created
      }
    })
  }

}