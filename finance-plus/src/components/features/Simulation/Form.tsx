import { simulationFormSteps } from '@/data/simulation';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';

export function SimulationForm() {
    const currentStep = simulationFormSteps[0];
    const maxSteps = simulationFormSteps.length;

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-md sm:w-xl">
            <StepProgress currentStep={1} />
            <FormStep currentStep={1} maxSteps={maxSteps} {...currentStep} />
        </div>
    );
}
