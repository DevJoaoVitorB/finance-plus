export interface SimulationState {
    income: string;
    expenses: string;
    debts: string;
    goalName: string;
    goalAmount: string;
    goalDeadline: string;
    currentStepIndex: number;
}

export type SimulationField = Exclude<keyof SimulationState, 'currentStepIndex'>;

export interface ISimulationContextType {
    simulation: SimulationState;
    updateField: (field: SimulationField, value: string) => void;
    nextStep: () => void;
    previousStep: () => void;
}
