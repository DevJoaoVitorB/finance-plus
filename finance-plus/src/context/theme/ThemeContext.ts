import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface IThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextType | null>(null);
