import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title:
    "Codewars - Achieve mastery through coding practice and developer mentorship",
  description:
    "A coding practice website for all programming levels - Join a \
                community of over 3 million developers and improve your coding skills \
                in over 55 programming languages!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="darkreader-lock"></meta>
      <body
        className={`${ibm_plex_sans.className} bg-[url(/background.png)] bg-black-100 text-white bg-size-200_200 bg-pos-0_0 text-[1rem] font-light min-h-[100%] leading-[1.5] m-0`}
      >
        {children}
      </body>
    </html>
  );
}
