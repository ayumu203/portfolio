import React from 'react'
import Homebutton from '../Atom/Button/Homebutton'
import IntroductionTextItem from '../Atom/Item/IntroductionItem'

type Prop = {
}

export default function MyIntroduction(prop: Prop) {
    
    return (
        <div>
            <div className="absolute top-4 right-4 md:top-24 md:right-6">
                <Homebutton />
            </div>

            <div className="absolute top-45 space-y-4 md:space-y-6 lg:space-y-8">
                <IntroductionTextItem
                    label="所属"
                    value="静岡大学 情報学部 情報科学科"
                />
                <IntroductionTextItem
                    label="氏名"
                    value="落合歩夢"
                />
                <IntroductionTextItem
                    label="使用言語"
                    value="C, C++, Java, Typescript, Next.js"
                    textClassName="text-lg md:text-xl lg:text-2xl"
                />
                <IntroductionTextItem
                    label="使用技術"
                    value="Docker, Google Cloud Platform, Supabase"
                    textClassName="text-lg md:text-xl lg:text-2xl"
                />
                <IntroductionTextItem
                    label="趣味"
                    value="鉄道旅行, Webアプリ開発, Twitter(現X)"
                    textClassName="text-lg md:text-xl lg:text-2xl"
                />
                <IntroductionTextItem
                    label="顔写真"
                    value="意外といい写真がなかった(これ含め)"
                    textClassName="text-lg md:text-xl lg:text-2xl"
                />
            </div>
        </div>
    )
}
