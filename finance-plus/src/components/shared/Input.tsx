import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;
    suffix?: string;
}

export function Input({ prefix, suffix, ...props }: InputProps) {
    return (
        <div className="flex items-center gap-4 bg-input px-4 py-3 rounded-sm">
            {prefix && (
                <span className="pr-4 text-foreground font-normal text-base border-r border-border">
                    {prefix}
                </span>
            )}
            <input
                className="bg-transparent w-full text-foreground text-base placeholder:text-muted-foreground/50 placeholder:text-base outline-none"
                autoFocus
                {...props}
            />
            {suffix && (
                <span className="pl-4 text-foreground font-normal text-base border-l border-border">
                    {suffix}
                </span>
            )}
        </div>
    );
}
