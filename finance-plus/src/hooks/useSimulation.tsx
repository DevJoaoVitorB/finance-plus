import { SimulationContext } from '@/context/simulation/SimulationContext';
import { useContext } from 'react';

export function useSimulation() {
    const context = useContext(SimulationContext);

    if (context === undefined)
        throw new Error(
            'useSimulation deve ser usado dentro de um SimulationProvider',
        );

    return context;
}
