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
            flex-grow
        ">
            <div className="
                w-3/5 
                relative
            ">
                <Image
                    src="/ship.jpg"
                    alt="Ship deck view"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                />
            </div>

            <div className="
                w-2/5 
                bg-black 
                p-6 md:p-10 
                flex flex-col 
                justify-center 
                items-start 
                text-white
                relative
                "
                style={{
                    backgroundColor: "#33041d"
                }}
            >
                <div className="
                    absolute
                    top-5
                    right-5
                ">
                    <Hamburger menuMode={menuMode} setMenuMode={setMenuMode} />
                </div>
                <div className="
                    w-80/100
                    absolute
                    top-10
                ">
                    {menuMode && <Welcome menuMode={menuMode} setMenuMode={setMenuMode} />}
                    {!menuMode && <MenuPanel />}
                </div>
            </div>
        </div>
    );
}