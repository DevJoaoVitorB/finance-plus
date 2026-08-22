export type Theme = 'light' | 'dark';

export interface IThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
