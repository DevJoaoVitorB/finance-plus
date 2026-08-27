import { createContext } from 'react';

export interface SimulationData {
    income: string;
    expenses: string;
    debts: string;
    goalName: string;
    goalAmount: string;
    goalDeadline: string;
}

export type SimulationField = keyof SimulationData;

export interface SimulationContextValue {
    simulation: SimulationData;
    updateField: (field: SimulationField, value: string) => void;
}

export const SimulationContext = createContext<SimulationContextValue | null>(
    null,
);
