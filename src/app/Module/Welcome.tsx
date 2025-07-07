import React from 'react'
import WelcomeText from '../Atom/Item/WelcomeItem';

import { Edu_NSW_ACT_Foundation, Sawarabi_Mincho } from 'next/font/google';

// フォントの定義
const edu = Edu_NSW_ACT_Foundation({ weight: "400", subsets: ["latin"], display: "swap" });
const sawarabiMincho = Sawarabi_Mincho({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Welcome() {
    const welcomeMessages = [
        "ARM203 と申します.",
        "こちらは開発物や趣味等を紹介するサイトです.このサイトは Next.js と Tailwind CSS を使用して作成しています.",
        "右上のアイコンをクリックでメニューが開きます.",
        "画像は太平洋フェリーからの夜景です.このような写真や駄文を並べています.暖かい目で見守ってください.",

    ];

    return (
        <div className="w-full mt-0 pt-0">
            <div className="mt-0 pt-0"> 
                <h3 className={`
                    ${edu.className} 
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    mb-0.5 sm:mb-1 md:mb-1
                    mt-2`
                }>
                    Portfolio
                </h3>

                {/* 白線 */}
                 <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-1 sm:mb-2 md:mb-2
                 "></div>

                <div className="
                    space-y-3 sm:space-y-4 md:space-y-4
                    ml-4 sm:ml-6 md:ml-8
                ">
                    {welcomeMessages.map((text, index) => (
                        <WelcomeText
                            key={index}
                            text={text}
                            fontClass={sawarabiMincho.className} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}