import React from 'react'
import Hamburger from '../Atom/Button/HamburgerButton'
import WelcomeText from '../Atom/Item/WelcomeItem';
import { Edu_NSW_ACT_Foundation } from 'next/font/google';

type Prop = {
    menuMode: boolean;
    setMenuMode: (mode: boolean) => void;
}

const edu = Edu_NSW_ACT_Foundation({weight: "400", subsets: ["latin"], display: "swap" });

export default function Welcome(prop: Prop) {
    return (
        <div>
            <div className="absolute top-8 right-6 md:top-24 md:right-10">
                <Hamburger menuMode={prop.menuMode} setMenuMode={prop.setMenuMode} />
            </div> 

            <div className='absolute top-45'>
                <h3 className={`${edu.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-14 ml-0`}>
                    Portfogelio
                </h3>

                <div className="text-xl md:text-xl lg:text-xl space-y-2 md:space-y-3 ml-4">
                    <WelcomeText text="開発物や趣味等を紹介するためのページです." />
                <div className="text-xl md:text-xl lg:text-xl space-y-2 md:space-y-3">
                    <WelcomeText text="上記のアイコンをクリックするとメニューが開きます." />
                </div>
                <div className="text-lg md:text-sm lg:text-sm space-y-2 md:space-y-3">
                    <WelcomeText text="画像は北海道旅行の際に乗った太平洋フェリーの画像です." />
                </div>
                </div>
            </div>
        </div>
    )
}
