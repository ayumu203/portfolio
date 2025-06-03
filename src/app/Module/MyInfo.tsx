import React from 'react'
import Hamburger from '../Atom/Hamburger'

type Prop = {
    mode: boolean;
    setMode: (mode: boolean) => void;
}

export default function MyInfo(prop: Prop) {
    return (
        <div>
            <div className="absolute top-8 right-6 md:top-24 md:right-10">
                <Hamburger mode={prop.mode} setMode={prop.setMode} />
            </div> 

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                静岡大学
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">
                情報学部
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
                情報科学科
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
                ARM203
            </p>

        </div>
    )
}
