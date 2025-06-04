import { notable } from '@/app/layout'
import React from 'react'

export default function PortfolioLogo() {
    return (
        <div
            className={`
                text-4xl
                ${notable.className}
            `}
        >
            <div className='
                    flex flex-col
                    items-center
                '>
                <span>ARM</span>
                <span>203</span>
            </div>
        </div>

    )
}
