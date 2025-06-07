import React from 'react';
import PortfolioLogo from '../Atom/Logo/PortfolioLogo';
import GithubLogo from '../Atom/Logo/GithubLogo';
import PortalLogo from '../Atom/Logo/PortalLogo';

type HeaderProps = {
  bgColor?: string; 
};

export default function Header({ bgColor = 'bg-pink-500' }: HeaderProps) {
    return (
        <div className={`
            h-[10vh] md:h-20
            flex justify-between items-center
            px-4 md:px-8
            ${bgColor}
            text-white
            `}>
            <PortfolioLogo />
            <GithubLogo />
            <PortalLogo />
        </div>
    );
}