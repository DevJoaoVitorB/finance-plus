import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type VariantButton = 'primary' | 'secondary' | 'destructive';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: VariantButton;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
}

export function Button({
    variant,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className,
    children,
    ...props
}: ButtonProps) {
    const baseClasses =
        'flex items-center justify-center gap-2 w-fit px-6 py-3 font-semibold text-sm rounded-lg shadow-sm transition-opacity hover-opacity-80 disabled:cursor-not-allowed disabled:opacity-80 cursor-pointer';

    const variantClasses: Record<VariantButton, string> = {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'text-foreground border border-border',
        destructive: 'bg-red-500 text-primary-foreground',
    };

    return (
        <button
            {...props}
            className={twMerge(baseClasses, variantClasses[variant], className)}
        >
            {LeftIcon && <LeftIcon size={16} />}
            {children}
            {RightIcon && <RightIcon size={16} />}
        </button>
    );
}
