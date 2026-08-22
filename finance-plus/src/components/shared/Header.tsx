import LightBrandMark from '@/assets/light_brand_mark.png';
import DarkBrandMark from '@/assets/dark_brand_mark.png';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './Button';
import { Moon, RotateCcwClock, Sun, TrendingUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const logo = theme === 'dark' ? DarkBrandMark : LightBrandMark;
    const IconTheme = theme === 'dark' ? Sun : Moon;

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className="flex items-center justify-between px-6 md:px-8 py-2 border-b border-border">
            {/* Brand Mark */}
            <div className="flex items-center gap-2 py-2">
                <figure>
                    <img
                        className="size-12 md:size-16"
                        src={logo}
                        alt="Logo da Finance Plus"
                    />
                </figure>
                <span>
                    <p className="text-primary font-bold text-lg md:text-2xl">
                        Finance+
                    </p>
                    <p className="text-muted-foreground font-semibold text-xs md:text-sm">
                        Educador Financeiro
                    </p>
                </span>
            </div>

            {/* Actions */}
            <nav>
                <ul className="flex items-center gap-2">
                    <li>
                        <Button
                            className="rounded-lg md:rounded-full shadow-none"
                            variant="secondary"
                            leftIcon={TrendingUp}
                            onClick={() => navigate('/')}
                        >
                            <span className="hidden md:inline">
                                Novo Objetivo
                            </span>
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={`${location.pathname === '/historico' && 'text-primary'} border-none shadow-none`}
                            variant="secondary"
                            leftIcon={RotateCcwClock}
                            onClick={() => navigate('/historico')}
                        >
                            <span className="hidden md:inline">Histórico</span>
                        </Button>
                    </li>
                    <li className="border-l border-border pl-2 md:pl-6">
                        <Button
                            className="border-none shadow-none"
                            variant="secondary"
                            leftIcon={IconTheme}
                            onClick={toggleTheme}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
