import { simulationSteps } from '@/data/simulation';
import { useSimulation } from '@/hooks/useSimulation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';

export function SimulationForm() {
    const { simulation, updateField } = useSimulation();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const navigate = useNavigate();
    const step = simulationSteps[currentStepIndex];
    const isLastStep = currentStepIndex === simulationSteps.length - 1;

    const handleSubmit = () => {
        if (isLastStep) {
            navigate('/resultado');
            return;
        }

        setCurrentStepIndex((index) =>
            Math.min(index + 1, simulationSteps.length - 1),
        );
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-md sm:w-xl">
            <StepProgress currentStepIndex={currentStepIndex} steps={simulationSteps} />
            <FormStep
                key={step.field}
                step={step}
                value={simulation[step.field]}
                onValueChange={(value) => updateField(step.field, value)}
                onBack={() =>
                    setCurrentStepIndex((index) => Math.max(index - 1, 0))
                }
                onSubmit={handleSubmit}
                isFirstStep={currentStepIndex === 0}
                isLastStep={isLastStep}
            />
        </div>
    );
}
