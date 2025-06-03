import type { Metadata } from "next";
import "./globals.css";
import { Notable, Zen_Kaku_Gothic_New } from "next/font/google";


export const notable = Notable({
    weight: "400",  
    subsets: ["latin"],
    display: "swap",
})

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap"
})

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "Arm203のポートフォリオサイトです.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
