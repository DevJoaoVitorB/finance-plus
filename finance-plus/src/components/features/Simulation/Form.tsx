import { simulationFormSteps } from '@/data/simulation';
import { useSimulation } from '@/hooks/useSimulation';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';

export function SimulationForm() {
    const {
        simulation: { currentStepIndex, ...simulation },
        updateField,
        nextStep,
        previousStep,
    } = useSimulation();
    const currentStep = currentStepIndex + 1;
    const stepData = simulationFormSteps[currentStepIndex];
    const maxSteps = simulationFormSteps.length;

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-md sm:w-xl">
            <StepProgress currentStep={currentStep} />
            <FormStep
                key={stepData.id}
                currentStep={currentStep}
                maxSteps={maxSteps}
                value={simulation[stepData.id]}
                onValueChange={(value) => updateField(stepData.id, value)}
                onNext={nextStep}
                onBack={previousStep}
                {...stepData}
            />
        </div>
    );
}
