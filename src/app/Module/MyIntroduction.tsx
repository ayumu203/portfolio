import React from 'react'
import IntroductionTextItem from '../Atom/Item/IntroductionItem'

const introductionData = [
    {
        label: "所属",
        value: "静岡大学 情報学部 情報科学科",
    },
    {
        label: "氏名",
        value: "落合歩夢",
    },
    {
        label: "使用言語",
        value: "C, C++, Java, Typescript, Next.js",
        textClassName: "text-xl",


    },
    {
        label: "使用技術",
        value: "Docker, Google Cloud Platform, Supabase",
        textClassName: "text-xl",

    },
    {
        label: "趣味",
        value: "鉄道旅行, Webアプリ開発, Twitter(現X)",
        textClassName: "text-xl",

    },
    {
        label: "顔写真",
        value: "意外といい写真がなかった(これ含め)",
        textClassName: "text-xl",
    },
];

export default function MyIntroduction({ className = "" }: { className?: string }) {
    return (
        <div className={className}>
            <p className="
                text-6xl 
                font-semibold 
                mb-10">
                自己紹介
            </p>

            {/* 白線 */}
            <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-8
                 "></div>


            {introductionData.map((item) => (
                <IntroductionTextItem
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    textClassName={item.textClassName}
                />
            ))}
        </div>
    )
}
