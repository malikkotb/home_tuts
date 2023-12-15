import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-32 items-center p-8">
      <div className="titlehomepage">
        <div className="text-5xl font-medium my-8">
          Welcome to my blog.
          <span className="opacity-70">I am Malik typewrite: software engineer, full-stack dev</span>
        </div>
      </div>
      <div className="flex justify-start w-full">
        {/* links/buttons to: tutorials, demos, About:portfolio page,  */}
        <Button variant={"outline"} className="">
          TUTORIALS <ArrowTopRightIcon />
        </Button>
        <Button variant={"outline"} className="">
          PORTFOLIO <ArrowTopRightIcon />
        </Button>
      </div>
      <div className="w-full flex justify-between recent-tuorials">
        <div className="text-2xl">Recent Tutorials</div>
        <Link href={"/tutorials"} className="text-2xl hover:underline">View All</Link>
      </div>
    </main>
  );
}
