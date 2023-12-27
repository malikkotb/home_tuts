"use client";
import Ellipse from "@/components/Ellipse";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const topics: string[] = ["coding", "frontend", "backend", "animations"];
  const typewriterRef = useRef<HTMLDivElement>(null);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // const el = document.getElementById("typewriter");

  let sleepTime = 100; // (in ms)

  let curTopicIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let currentTopic = topics[curTopicIndex];

      for (let i = 0; i < currentTopic.length; i++) {
        if (typewriterRef.current) {
          typewriterRef.current.innerText = currentTopic.substring(0, i + 1);
        }
        await sleep(sleepTime);
      }
      
      await sleep(sleepTime * 10);

      for (let i = currentTopic.length; i > 0; i--) {
        if (typewriterRef.current) {
          typewriterRef.current.innerText = currentTopic.substring(0, i - 1);
        }
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curTopicIndex === topics.length - 1) {
        curTopicIndex = 0;
      } else {
        curTopicIndex++;
      }

    }
  };

  writeLoop();

  return (
    <main className="flex min-h-screen flex-col mt-12 items-center p-8">
      <div className="titlehomepage">
        <div className="text-4xl font-medium my-8 items-center text-center flex flex-col">
          <p className="flex gap-2 items-center">
            Welcome to my blog {<Ellipse width={40} height={40} />}
          </p>
          <span className="opacity-70">
            I&apos;m, Malik and here I showcase my latest endeavors in{" "}
            <span
              ref={typewriterRef}
              id="typewriter"
              className="font-semibold text-[#0072ef]"
            ></span>
            <span className={styles.cursor}>|</span>
          </span>
        </div>
      </div>

      <div className="tab with cateogries">Categories tab</div>
      <div>List of cards with blog posts</div>
    </main>
  );
}
