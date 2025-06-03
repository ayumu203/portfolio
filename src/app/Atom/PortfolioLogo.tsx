import React from 'react'
import { notable } from '../layout'

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
