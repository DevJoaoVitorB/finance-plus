import LightBrandMark from '@/assets/light_brand_mark.png';
import DarkBrandMark from '@/assets/dark_brand_mark.png';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/hooks/useTheme';

interface BrandMarkProps {
    className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
    const { theme } = useTheme();
    const logo = theme === 'dark' ? DarkBrandMark : LightBrandMark;

    return (
        <div className={twMerge('flex items-center gap-2 py-2', className)}>
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
    );
}
