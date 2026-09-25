import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | 'dark';

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'light';

        const stored = localStorage.getItem("vexa-theme") as Theme | null;

        if(stored) return stored;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : "light"
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        localStorage.setItem("vexa-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(t => (t === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}