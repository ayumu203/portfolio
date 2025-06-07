'use client'

import React from 'react';

type Props = {
    text: string;
    fontClass?: string;
    textSizeClass?: string;
};

export default function WelcomeText({ text, fontClass = '', textSizeClass = 'text-base' }: Props) {
    // テキスト内の改行文字 `\n` を <br /> に変換する
    const formatText = (inputText: string) => {
        return inputText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <p className={` 
            ${fontClass}
            ${textSizeClass}
            text-white 
            leading-relaxed 
            tracking-wide
        `}>
            {formatText(text)}
        </p>
    );
}