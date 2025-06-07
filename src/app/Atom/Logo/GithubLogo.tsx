import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { Notable } from 'next/font/google'

const notable = Notable({ subsets: ['latin'],weight: ['400'],display: 'swap' })

export default function GithubLogo() {
    return (
        <div className={`
                ${notable.className}    
                text-3xl
                flex flex-col
                items-center
                justify-center
            `}>
            <a target='_blank' href="https://github.com/ayumu203">GitHub</a>
            <a
                href="https://github.com/ayumu203"
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHubプロフィールへ" 
            >
                <FaGithub className='text-3xl' />
            </a>
        </div>

    )
}
