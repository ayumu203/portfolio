"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import MyInfo from '../Module/MyInfo';
import MenuPanel from '../Module/MenuPanel';
export default function Main() {
    const [ pageMode, setPageMode ] = useState<boolean>(true);

    return (
        <div className="flex flex-grow">
            <div className="w-2/3 relative">
                <Image
                    src="/ship.jpg"
                    alt="Ship deck view"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                />
            </div>

            <div className="w-1/3 bg-green-700 p-6 md:p-10 flex flex-col justify-center items-start text-white">
                {pageMode && <MyInfo mode={pageMode} setMode={setPageMode}/>}
                {!pageMode && <MenuPanel mode={pageMode} setMode={setPageMode} />}
            </div>
        </div>
    );
}