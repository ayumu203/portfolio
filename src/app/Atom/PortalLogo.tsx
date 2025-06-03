import React from 'react'
import { zenKakuGothicNew } from '../layout'

export default function PortalLogo() {
    return (
        <div className={
        `
            text-3xl

            flex flex-col
            items-center
            justify-center
            ${zenKakuGothicNew.className}
        `}
        >
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">静大生用</a>
            <a target='_blank' href="https://ayumu203.github.io/portal-shizuoka-vite/">ポータルサイト</a>
        </div>

    )
}
