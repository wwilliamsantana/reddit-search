import ContainerPosts from "@/components/ContainerPosts"
import type { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Results: Reddit Search",
  description: "Results",
};

export default async function ResultsPage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  return (
    <main className="min-h-screen py-4 mx-8">
      <header className="flex items-center justify-between">
        <Link href={"/"}>
          <h2 className="font-bold text-3xl text-white">Re<span className="text-orange-700">dd</span>it</h2>
        </Link>
        <Link href={"/"} className="px-3 py-2 bg-white text-black rounded-xl text-sm hover:bg-orange-700 hover:text-white transition-colors">New Search</Link>
      </header>

      <ContainerPosts theme={theme} />
    </main>
  )
}