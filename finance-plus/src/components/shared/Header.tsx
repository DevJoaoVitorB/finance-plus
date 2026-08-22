import { BrandMark } from './BrandMark';
import { Navigator } from './Navigation';

export function Header() {
    return (
        <header className="flex items-center justify-between px-6 md:px-8 py-2 border-b border-border">
            {/* Brand Mark */}
            <BrandMark />

            {/* Actions */}
            <Navigator />
        </header>
    );
}
