import { Notable } from 'next/font/google'
import React from 'react'

const notable = Notable({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

export default function PortfolioLogo() {
    return (
        <div
            className={`
                text-4xl
                ${notable.className}
            `}
        >
            <div className='
                    flex flex-col
                    items-center
                '>
                <span>ARM</span>
                <span>203</span>
            </div>
        </div>

    )
}
