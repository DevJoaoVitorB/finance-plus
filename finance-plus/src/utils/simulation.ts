import type { SimulationStep, StepFormat } from '@/data/simulation';
import { currencyMask, integerMask } from './currency';

export function formatStepValue(format: StepFormat, value: string): string {
    if (format === 'currency') return currencyMask(value);
    if (format === 'integer') return integerMask(value);

    return value;
}

export function isStepValueValid(step: SimulationStep, value: string): boolean {
    if (step.format === 'text') return value.trim().length > 0;

    const numericValue = Number(integerMask(value));
    const allowsZero = step.field === 'expenses' || step.field === 'debts';

    return allowsZero ? value.length > 0 && numericValue >= 0 : numericValue > 0;
}
