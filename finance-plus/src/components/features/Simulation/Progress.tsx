import type { SimulationStep } from '@/data/simulation';
import { twMerge } from 'tailwind-merge';

interface StepProgressProps {
    currentStepIndex: number;
    steps: readonly SimulationStep[];
}

export function StepProgress({ currentStepIndex, steps }: StepProgressProps) {
    return (
        <div className="flex px-2.5 py-2.5" aria-label="Progresso do formulário">
            {steps.map(({ field, icon: Icon }, index) => {
                const isActiveStep = index <= currentStepIndex;
                const isActiveLine = index < currentStepIndex;

                return (
                    <div className="flex items-center" key={field}>
                        <div className={twMerge('flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md border transition-colors', isActiveStep ? 'bg-primary text-primary-foreground border-secondary' : 'bg-card text-foreground border-border')}>
                            <Icon className="size-5 sm:size-6" />
                        </div>
                        {index < steps.length - 1 && (
                            <div className={twMerge('w-10 sm:w-12 h-0.5', isActiveLine ? 'bg-secondary' : 'bg-border')} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
