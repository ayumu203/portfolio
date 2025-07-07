'use client'

import React from 'react';

type Props = {
    text: string;
    fontClass?: string;
};

export default function WelcomeText({ text, fontClass = '' }: Props) {
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
            text-white
            font-bold
            text-sm sm:text-base md:text-lg
            leading-relaxed 
            tracking-wide
            break-words
        `}>
            {formatText(text)}
        </p>
    );
}