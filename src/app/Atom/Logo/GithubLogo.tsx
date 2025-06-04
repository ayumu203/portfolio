import { notable } from '@/app/layout';
import React from 'react'
import { FaGithub } from 'react-icons/fa';

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
            <FaGithub className='text-3xl' />
        </div>

    )
}
