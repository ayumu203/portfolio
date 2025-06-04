import { Sawarabi_Gothic } from 'next/font/google';
import React from 'react'

const sawarabi = Sawarabi_Gothic({ subsets: ['latin'], weight: '400', display: 'swap' });


export default function PortalLogo() {
    return (
        <div className={
        `
            text-3xl

            flex flex-col
            items-center
            justify-center
            ${sawarabi.className}
        `}
        >
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">静大生用</a>
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">ポータルサイト</a>
        </div>

    )
}
