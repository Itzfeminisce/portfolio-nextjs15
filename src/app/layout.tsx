import React from "react"
import Layout from "../components/Layout"
import "../styles/globals.css";
import "../styles/themes.css";
import ThemeProvider from "../contexts/ThemeProvider";

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