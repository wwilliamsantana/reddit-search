import ContainerPosts from "@/components/containerPosts"


export default async function ResultsPage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params

  return (
    <main className="min-h-screen py-4 mx-8">
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-3xl text-white">Re<span className="text-orange-700">dd</span>it</h2>
        <button className="px-3 py-2 bg-white text-black rounded-xl text-sm hover:bg-black hover:text-white transition-colors">New Search</button>
      </header>

      <ContainerPosts />
    </main>
  )
}