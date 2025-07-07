"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import MenuPanel from '../Module/MenuPanel';
import Welcome from '../Module/Welcome';
import Hamburger from '../Atom/Button/HamburgerButton';
export default function Main() {
    const [menuMode, setMenuMode] = useState<boolean>(true);

    return (
        <div className="
            flex 
            flex-col md:flex-row
            flex-grow
        ">
            {/* 画像部分 - モバイルでは上部に表示、デスクトップでは左側 */}
            <div className="
                w-full md:w-3/5 
                h-64 md:h-auto
                relative
            ">
                <Image
                    src="/ship.jpg"
                    alt="Ship deck view"
                    fill
                    className="object-cover"
                    quality={80}
                    priority
                />
            </div>

            {/* コンテンツ部分 - モバイルでは下部に表示、デスクトップでは右側 */}
            <div className="
                w-full md:w-2/5 
                bg-slate-700
                p-4 sm:p-6 md:p-10 
                flex flex-col 
                justify-center 
                items-start 
                text-white
                relative
                min-h-96 md:min-h-0
            ">
                <div className="
                    absolute
                    top-3 sm:top-5
                    right-3 sm:right-5
                ">
                    <Hamburger menuMode={menuMode} setMenuMode={setMenuMode} />
                </div>
                <div className="
                    w-full
                    pt-12 sm:pt-10
                    text-slate-200
                ">
                    {menuMode && <Welcome/>}
                    {!menuMode && <MenuPanel />}
                </div>
            </div>
        </div>
    );
}