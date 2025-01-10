import React from "react"
import Layout from "../components/Layout"
import "../styles/globals.css";
import "../styles/themes.css";
import ThemeProvider from "../contexts/ThemeProvider";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Rotimi Oluwafemi | Fullstack Engineer",
  description:
    "Showcasing my projects, skills, and expertise as a highly driven Fullstack Engineer. Exploring cutting-edge work in web development with new world driven technologies",
  openGraph: {
    title: "Rotimi Oluwafemi | Fullstack Engineer",
    description:
      "Showcasing my projects, skills, and expertise as a highly driven Fullstack Engineer. Exploring cutting-edge work in web development with new world driven technologies",
    url: "https://itzfeminisce.vercel.app",
    siteName: "Rotimi Oluwafemi | Fullstack Engineer",
    images: [
      {
        url: "https://itzfeminisce.vecel.app/profile.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotimi Oluwafemi | Fullstack Engineer",
    description:
      "Showcasing my projects, skills, and expertise as a highly driven Fullstack Engineer. Exploring cutting-edge work in web development with new world driven technologies",
    images: ["https://itzfeminisce.vecel.app/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
  width: "device-width",
  initialScale: 1,
}


export default function RootLayout({
  children,
}) {
  return (
    <ThemeProvider>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  )
}