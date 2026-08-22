export function currencyMask(value: string): string {
    const digits = integerMask(value);

    if (!digits) return '';

    const cents = BigInt(digits);
    const integerPart = cents / 100n;
    const decimalPart = (cents % 100n).toString().padStart(2, '0');

    return `${integerPart.toLocaleString('pt-BR')},${decimalPart}`;
}

export function integerMask(value: string): string {
    return value.replace(/\D/g, '');
}
