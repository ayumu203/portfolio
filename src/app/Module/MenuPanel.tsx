import React from 'react'
import Hamburger from '../Atom/Button/HamburgerButton'
import { useRouter } from 'next/navigation';
import MenuItem from '../Atom/Item/MenuItem';

import { Zen_Kaku_Gothic_New, Sawarabi_Gothic, Noto_Sans_JP, Edu_NSW_ACT_Foundation } from 'next/font/google';

const zen = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: '400', display: 'swap' });
const sawarabi = Sawarabi_Gothic({ subsets: ['latin'], weight: '400', display: 'swap' });
const noto = Noto_Sans_JP({ subsets: ['latin'], weight: '400', display: 'swap' });
const edu = Edu_NSW_ACT_Foundation({ subsets: ['latin'], weight: '400', display: 'swap' });

type Prop = {
    menuMode: boolean;
    setMenuMode: (menuMode: boolean) => void;
}

export default function MenuPanel(prop: Prop) {
    const router = useRouter();

    return (
        <div>
            <div className="absolute top-8 right-6 md:top-24 md:right-10">
                <Hamburger menuMode={prop.menuMode} setMenuMode={prop.setMenuMode} />
            </div>

            <div className="absolute top-45">
                <p className={`${edu.className} text-6xl mb-12`}>
                    Contents
                </p>
                <div className="ml-10">
                    <MenuItem
                        text="自己紹介"
                        fontClass={zen.className}
                        onClick={() => {
                            prop.setMenuMode(false);
                            router.push('/Introduction');
                        }}
                    />
                    <MenuItem 
                        text="制作物" 
                        fontClass={sawarabi.className} 
                        onClick={() => {
                            prop.setMenuMode(false);
                        }}
                    />
                    <MenuItem 
                        text="旅行" 
                        fontClass={noto.className}
                        onClick={() => {
                            prop.setMenuMode(false);
                            router.push('/Trip');
                        }}    
                    />
                    <MenuItem text="拉麺" fontClass={zen.className} />
                </div>
            </div>
        </div>
    )
}
