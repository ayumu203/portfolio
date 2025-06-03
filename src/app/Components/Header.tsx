import React from 'react'
import GithubLogo from '../Atom/GithubLogo'
import PortalLogo from '../Atom/PortalLogo'
import PortfolioLogo from '../Atom/PortfolioLogo'

export default function Header() {
    return (
        <div className='
            h-16 md:h-20
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
