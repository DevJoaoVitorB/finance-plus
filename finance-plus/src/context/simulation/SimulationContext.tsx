import {
    createContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from 'react';
import type {
    ISimulationContextType,
    SimulationField,
    SimulationState,
} from './types';

const STORAGE_KEY = 'simulation';
const LAST_STEP_INDEX = 5;

const initialSimulation: SimulationState = {
    income: '',
    expenses: '',
    debts: '',
    goalName: '',
    goalAmount: '',
    goalDeadline: '',
    currentStepIndex: 0,
};

export const SimulationContext = createContext<
    ISimulationContextType | undefined
>(undefined);

export function SimulationProvider({ children }: PropsWithChildren) {
    const [simulation, setSimulation] = useState<SimulationState>(() => {
        try {
            const storedSimulation = localStorage.getItem(STORAGE_KEY);

            return storedSimulation
                ? { ...initialSimulation, ...JSON.parse(storedSimulation) }
                : initialSimulation;
        } catch {
            return initialSimulation;
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(simulation));
    }, [simulation]);

    const updateField = (field: SimulationField, value: string) => {
        setSimulation((currentSimulation) => ({
            ...currentSimulation,
            [field]: value,
        }));
    };

    const nextStep = () => {
        setSimulation((currentSimulation) => ({
            ...currentSimulation,
            currentStepIndex: Math.min(
                currentSimulation.currentStepIndex + 1,
                LAST_STEP_INDEX,
            ),
        }));
    };

    const previousStep = () => {
        setSimulation((currentSimulation) => ({
            ...currentSimulation,
            currentStepIndex: Math.max(
                currentSimulation.currentStepIndex - 1,
                0,
            ),
        }));
    };

    return (
        <SimulationContext.Provider
            value={{ simulation, updateField, nextStep, previousStep }}
        >
            {children}
        </SimulationContext.Provider>
    );
}
