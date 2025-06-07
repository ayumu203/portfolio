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
        <div>
            <div className="absolute"> 
                <h3 className={`
                    ${edu.className} 
                    text-6xl 
                    mb-5`
                }>
                    Portfolio
                </h3>

                {/* 白線 */}
                 <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-8
                 "></div>

                <div className="
                    space-y-4
                    ml-8
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