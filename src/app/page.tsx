
import { InputContainer } from "@/components/InputContainer";
import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "Reddit",
  "Search"
];

export default function Home() {
  return (
    <main className="min-h-[100vh -256px] flex flex-col items-center mt-64  gap-7">
      <MorphingText texts={texts} className="text-white" />


      <InputContainer />

    </main>
  );
}

