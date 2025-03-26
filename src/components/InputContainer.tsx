import { redirect } from "next/navigation";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";


export function InputContainer() {

  async function handlerSearchTheme(formData: FormData) {
    "use server"
    const theme = formData.get("theme")
    redirect(`/${theme}`)
  }

  return (
    <form className="flex gap-3" action={handlerSearchTheme}>
      <div className="bg-zinc-800 rounded-full w-72 px-7 py-2 text-white">
        <input type="text" className="bg-transparent outline-none w-full" name="theme" autoComplete="off" />
      </div>
      <InteractiveHoverButton type="submit">Search</InteractiveHoverButton>
    </form>
  )
}