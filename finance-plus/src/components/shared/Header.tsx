import LightBrandMark from '@/assets/light_brand_mark.png';
import DarkBrandMark from '@/assets/dark_brand_mark.png';
import { Button } from '@/components/shared/Button';
import { RotateCcwClock, TrendingUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
    const theme = document.documentElement.getAttribute('data-theme');
    const logo = theme === 'dark' ? DarkBrandMark : LightBrandMark;

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className="flex items-center justify-between px-8 py-2 border-b border-border">
            {/* Brand Mark */}
            <div className="flex items-center gap-2 py-2">
                <figure>
                    <img
                        className="size-16"
                        src={logo}
                        alt="Logo da Finance Plus"
                    />
                </figure>
                <span>
                    <p className="text-primary font-bold text-2xl">Finance+</p>
                    <p className="text-muted-foreground font-semibold text-xs">
                        Educador Financeiro
                    </p>
                </span>
            </div>

            {/* Actions */}
            <nav>
                <ul className="flex items-center gap-2">
                    <li>
                        <Button
                            className="rounded-lg sm:rounded-full shadow-none"
                            variant="secondary"
                            leftIcon={TrendingUp}
                            onClick={() => navigate('/')}
                        >
                            <span className='hidden sm:inline'>Novo Objetivo</span>
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={`${location.pathname === '/historico' && 'text-primary'} border-none shadow-none`}
                            variant="secondary"
                            leftIcon={RotateCcwClock}
                            onClick={() => navigate('/historico')}
                        >
                            <span className='hidden sm:inline'>Histórico</span>
                        </Button>
                    </li>
                    <li>

                    </li>
                </ul>
            </nav>
        </header>
    );
}
