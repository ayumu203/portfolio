import React from 'react'
import Hamburger from '../Atom/Hamburger'

type Prop = {
    mode: boolean;
    setMode: (mode: boolean) => void;
}

export default function MenuPanel(prop: Prop) {
    return (
        <div>
            <div className="absolute top-8 right-6 md:top-24 md:right-10">
                <Hamburger mode={prop.mode} setMode={prop.setMode} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">
                自己紹介
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-8">
                制作物
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-12">
                旅行
            </p>

        </div>
    )
}
