import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Ellipse from "@/components/Ellipse";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-12 items-center p-8">
      <div className="titlehomepage">
        <div className="text-5xl font-medium my-8 items-center text-center flex flex-col">
          <p className="flex gap-2 items-center">Welcome to my blog {<Ellipse width={40} height={40} />}</p>
          <span className="opacity-70">
            I&apos;m, Malik Software engineer
            {/* , full-stack dev */}
            {/* CS student */}
          </span>
        </div>
      </div>

    <div className="tab with cateogries">Categories tab</div>
    <div>
      List of cards with blog posts
    </div>
    </main>
  );
}
