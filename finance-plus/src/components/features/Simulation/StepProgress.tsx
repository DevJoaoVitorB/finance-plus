import {
    BanknoteArrowDown,
    BanknoteArrowUp,
    Calendar,
    Landmark,
    PencilSparkles,
    Target,
    type LucideIcon,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface StepProgressProps {
    currentStep: number;
}

export function StepProgress({ currentStep }: StepProgressProps) {
    const steps: Record<number, LucideIcon> = {
        1: BanknoteArrowDown,
        2: BanknoteArrowUp,
        3: Landmark,
        4: PencilSparkles,
        5: Target,
        6: Calendar,
    };

    const renderStepsBlocks = (steps: Record<number, LucideIcon>) => {
        const maxSteps = Object.keys(steps).length;

        return Object.entries(steps).map(([key, Icon]) => {
            const isActivateBlock = Number(key) <= currentStep;
            const isActivateLine = Number(key) < currentStep;

            return (
                <div className="flex items-center" key={key}>
                    <div
                        className={twMerge(
                            'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md border transition-colors',
                            isActivateBlock
                                ? 'bg-primary text-primary-foreground border-secondary'
                                : 'bg-card text-foreground border-border',
                        )}
                    >
                        <Icon className='size-5 sm:size-6' />
                    </div>

                    {Number(key) !== maxSteps && (
                        <div
                            className={twMerge(
                                'w-10 sm:w-12 h-0.5',
                                isActivateLine ? 'bg-secondary' : 'bg-border',
                            )}
                        ></div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className="flex w-fit px-2.5 py-2.5">
            {renderStepsBlocks(steps)}
        </div>
    );
}
