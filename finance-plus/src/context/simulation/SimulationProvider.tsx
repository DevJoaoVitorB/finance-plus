import { useEffect, useState, type PropsWithChildren } from 'react';
import {
    type SimulationContextValue,
    type SimulationField,
    type SimulationData,
    SimulationContext,
} from './SimulationContext';

const STORAGE_KEY = 'simulation';

const initialSimulation: SimulationData = {
    income: '',
    expenses: '',
    debts: '',
    goalName: '',
    goalAmount: '',
    goalDeadline: '',
};

export function SimulationProvider({ children }: PropsWithChildren) {
    const [simulation, setSimulation] = useState<SimulationData>(() => {
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

    const value: SimulationContextValue = {
        simulation,
        updateField,
    };

    return (
        <SimulationContext.Provider value={value}>
            {children}
        </SimulationContext.Provider>
    );
}
