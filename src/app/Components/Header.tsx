import React from 'react'
import PortfolioLogo from '../Atom/Logo/PortfolioLogo'
import GithubLogo from '../Atom/Logo/GithubLogo'
import PortalLogo from '../Atom/Logo/PortalLogo'

export default function Header() {
    return (
        <div className='
            h-[10vh] md:h-20
            bg-green-800
            text-white
            flex justify-between items-center
            px-4 md:px-8
        '>
            <PortfolioLogo />
            <GithubLogo />
            <PortalLogo />
        </div>
    )
}
