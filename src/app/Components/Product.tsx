"use client";
import React from 'react';
import Homebutton from '../Atom/Button/Homebutton';
import { Noto_Serif_JP } from 'next/font/google';
import MyProduct from '../Module/MyProduct';

const notoSerif = Noto_Serif_JP({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});

export default function Product() {


    return (
        <div className="flex flex-grow">
            <div className="
                    w-full
                    relative
                    bg-stone-900">
                <div className='
                        absolute
                        top-5
                        right-5
                '>
                    <Homebutton />
                </div>
                <div>
                    <p
                        className={`
                            ${notoSerif.className}
                            text-white
                            text-center
                            text-6xl 
                            text-green-900
                            transform
                            scale-y-150
                            tracking-tighter
                            mt-15
                            mb-10
                        `}
                        style={{
                            letterSpacing: '-0.075em',
                            textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                        }}
                    >
                        開発物
                    </p>

                    <div>
                        <MyProduct
                            title="ポケモンバトルのクローン"
                            imagePaths={[
                                "/product/first.png",
                                "/product/game.png",
                                "/product/pokemon.png",
                                "/product/battle.png",
                                "/product/ER図.png",
                                "/product/構成図.png",
                                "/product/シーケンス図.png"
                            ]}
                            description='
                                ポケモンバトルの部分のみをクローンしたアプリを制作しようとしています.
                                基本的にはTypescriptのみでフロントエンドもバックエンドも実装しています.
                                構成としてはフロントエンドを Next.js ,バックエンドを NodeJS で構成し,データベースに Supabase を利用しています.
                                また,ポケモンのデータは PokeAPI を利用して必要データを取り出してマスタデータとして Supabase に保存しています.
                                バージョン1として,Google 認証,初期ポケモンの選択, ポケモン情報の参照, ポケモンバトルの処理を実装しました.
                                現在はバージョン2としてフロントエンドを Vercel,バックエンドを　Google Cloud Run にデプロイを行ってアクセスを容易にするように実装を行いました.
                                現在はポケモンバトル部分をまだ移植中です.
                                GitHubのリポジトリはこちらから : https://github.com/ayumu203/poke-clone-v2 
                            '
                            url='https://github.com/ayumu203/poke-clone-v2'
                        />
                        <p
                            className="
                            text-white
                            text-center
                            text-base
                            mt-2
                            mb-10
                        "
                        >
                            ※ 各開発物のタイトルをクリックすると、公開先にアクセスできます。
                        </p>

                        <MyProduct
                            title="自分用ポータルサイト"
                            imagePaths={[
                                "/product2/home.png",
                                "/product2/time.png",
                                "/product2/todo.png",

                            ]}
                            description='
                                自身が使用するためのポータルサイトを制作しました.
                                ReactのViteを使用して実装しています.
                                機能としては大学で利用するサイトへのリンク集.
                                大学の公式のポータルサイトから取得した時間割の表示.
                                大学の授業開始時間等をまとめた時間割表の表示.
                                基本的な機能を実装したtodoリスト.
                                上記のような機能を実装しています.
                                GitHubのリポジトリはこちらから : https://github.com/ayumu203/portal-shizuoka-vite
                            '
                            url='https://ayumu203.github.io/portal-shizuoka-vite/'
                        />
                        <p
                            className="
                            text-white
                            text-center
                            text-base
                            mt-2
                            mb-10
                        "
                        >
                            ※ 各開発物のタイトルをクリックすると、公開先にアクセスできます。
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
