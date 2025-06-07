import { Oswald } from 'next/font/google'
import React from 'react'

const oswald = Oswald({ subsets: ['latin'], weight: ['400'], display: 'swap' })


export default function PortalLogo() {
    return (
        <div className={
        `
            text-3xl

            flex flex-col
            items-center
            justify-center
            ${oswald.className}
        `}
        >
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">Shizudai</a>
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">Pordal</a>
        </div>

    )
}
