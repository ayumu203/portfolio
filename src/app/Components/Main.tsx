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
                w-full md:w-1/2 
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
                w-full md:w-1/2 
                bg-slate-700
                pt-2 sm:pt-3 md:pt-10
                pb-4 sm:pb-6 md:pb-10
                px-4 sm:px-6 md:px-10 
                flex flex-col 
                justify-start md:justify-center
                items-start 
                text-white
                relative
                min-h-screen md:min-h-0
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
                    mt-12 sm:mt-14 md:mt-16 pt-2
                    text-slate-200
                ">
                    {menuMode && <Welcome/>}
                    {!menuMode && <MenuPanel />}
                </div>
            </div>
        </div>
    );
}