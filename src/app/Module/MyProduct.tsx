"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

type MyProductProps = {
  title: string;
  description: string;
  imagePaths: string[];
  url: string; 
};

export default function MyProduct({ title, description, imagePaths, url }: MyProductProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagePaths.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [imagePaths.length]);

  return (
    <div className="flex flex-grow bg-stone-900 px-10 py-16">
      <div className="flex flex-col w-1/2 text-white pr-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${notoSerif.className} text-3xl text-green-300 mb-6 leading-tight hover:underline`}
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          {title}
        </a>
        <p className="text-lg text-neutral-200 leading-relaxed whitespace-pre-line pl-4" style={{ textIndent: "1em" }}>
          {description}
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="relative w-[540px] h-[298px]">
          <Image
            src={imagePaths[current]}
            alt={`slide-${current}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
