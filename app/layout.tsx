import Script from "next/script"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { montserrat } from "./fonts"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Divider from "@/components/shared/Divider"
import Slide from "@/components/animations/Slide"

export const metadata: Metadata = {
    title: {
        template: "%s | Fundacja Obok Ciebie",
        default: "Fundacja Obok Ciebie",
    },
    metadataBase: new URL("https://fundacjaobokciebie.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Fundacja Obok Ciebie",
        description:
            "Zawsze jesteśmy Obok Ciebie żeby pomóc :) Działamy tylko dzięki wsparciu naszych darczyńców. Dołączaj do nas, z nami jest fajnie :)",
        url: "https://fundacjaobokciebie.com",
        siteName: "Fundacja Obok Ciebie",
        locale: "pl_PL",
        type: "website",
        images: "/images/OGImageLandingPage.jpg",
    },
    category: "charity",
    other: {
        interesting: "We love cats 🐈 :)",
    },
    robots: {
        index: true,
    },
    applicationName: "Fundacja Obok Ciebie | Website",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Fundacja Obok Ciebie",
        "Fundacja Charytatywna",
        "Platforma Fundraisingowa",
    ],
    authors: [
        {
            name: "Ivan Shyriaiev",
            url: "https://ivan-shyriaiev-website.vercel.app/",
        },
    ],
    creator: "Ivan Shyriaiev",
    publisher: "Ivan Shyriaiev",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
            <body className={montserrat.className}>
                <Slide
                    className="hidden lg:block"
                    value={50}
                    verticalDirection="down"
                >
                    <Divider />
                </Slide>
                <Navbar />
                {children}
                <Divider inverted />
                <Footer />
            </body>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-8GM18W372R" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8GM18W372R');
        `}
            </Script>
        </html>
    )
}
