import { simulationFormSteps } from '@/data/simulation';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';
import { useState } from 'react';

export function SimulationForm() {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const currentStep = currentStepIndex + 1;
    const stepData = simulationFormSteps[currentStepIndex];
    const maxSteps = simulationFormSteps.length;

    const handleNextStep = () => {
        if (currentStepIndex + 1 > maxSteps - 1) return;
        setCurrentStepIndex((prev) => prev + 1);
    };

    const handlePreviousStep = () => {
        if (currentStepIndex === 0) return;
        setCurrentStepIndex((prev) => prev - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-md sm:w-xl">
            <StepProgress currentStep={currentStep} />
            <FormStep
                key={stepData.id}
                currentStep={currentStep}
                maxSteps={maxSteps}
                onNext={handleNextStep}
                onBack={handlePreviousStep}
                {...stepData}
            />
        </div>
    );
}
