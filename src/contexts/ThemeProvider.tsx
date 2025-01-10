"use client"

import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react'

interface ThemeProps {
    theme: string;
    setTheme: (_theme: string) => void;
    isActiveTheme: (_theme: string) => boolean;
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined)

const useTheme = () => {
    const theme = useContext(ThemeContext)

    if (!theme) throw new Error("useTheme must be used inside of ThemeProvider")

    return theme
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, _setTheme] = useState(localStorage.getItem("theme") || "")

    const setTheme = useCallback((_theme: string) => {
        _setTheme(_theme)
        localStorage.setItem('theme', _theme);
    }, [])


    const isActiveTheme = useCallback((_theme: string) => {
        return theme === _theme
    }, [theme])

    return (
        <html suppressHydrationWarning lang="en" data-theme={theme}>
            <body>
                <ThemeContext.Provider value={{ theme, setTheme, isActiveTheme }}>
                    {children}
                </ThemeContext.Provider>
            </body>
        </html>
    )
}

export default ThemeProvider
export { useTheme }