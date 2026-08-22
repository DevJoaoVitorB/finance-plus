import { Moon, RotateCcwClock, Sun, TrendingUp } from 'lucide-react';
import { Button } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

export function Navigator() {
    const { theme, toggleTheme } = useTheme();

    const IconTheme = theme === 'dark' ? Sun : Moon;

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            <ul className="flex items-center gap-2">
                <li>
                    <Button
                        className="rounded-lg md:rounded-full shadow-none"
                        variant="secondary"
                        leftIcon={TrendingUp}
                        onClick={() => navigate('/')}
                    >
                        <span className="hidden md:inline">Novo Objetivo</span>
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
    );
}
