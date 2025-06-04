import { Sawarabi_Mincho } from 'next/font/google'
import React from 'react'

const sawarabiGothic = Sawarabi_Mincho({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})


export default function WelcomeText({text}: {text: string}) {
  return (
    <p className={` 
      ${sawarabiGothic.className}
      text-white 
      text-base 
      md:text-lg 
      lg:text-lg
      leading-relaxed 
      tracking-wide p-3
      mb-8
      `}>
        {text}
    </p>
  )
}
