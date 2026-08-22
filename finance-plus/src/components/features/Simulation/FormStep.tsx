import { Button } from '@/components/shared/Button';
import { Input, type InputProps } from '@/components/shared/Input';
import { currencyMask, integerMask } from '@/utils/currency';
import type { SimulationField } from '@/context/simulation/types';
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';
import type { ChangeEvent } from 'react';

export interface StepProps {
    id: SimulationField;
    title: string;
    icon: LucideIcon;
    question: string;
    inputProps: InputProps;
}

interface FormStepProps {
    currentStep: number;
    maxSteps: number;
    value: string;
    onValueChange: (value: string) => void;
    onBack: () => void;
    onNext: () => void;
}

export function FormStep({
    currentStep,
    maxSteps,
    value,
    onValueChange,
    onBack,
    onNext,

    title,
    icon: Icon,
    question,
    inputProps,
}: FormStepProps & StepProps) {
    const firstStep = currentStep === 1;
    const lastStep = currentStep === maxSteps;

    const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
        const mask =
            inputProps.prefix === 'R$'
                ? currencyMask
                : inputProps.suffix === 'meses'
                  ? integerMask
                  : undefined;

        onValueChange(mask?.(currentTarget.value) ?? currentTarget.value);
    };

    return (
        <section className="bg-card w-full p-4 border border-border rounded-lg shadow-md">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
                <Icon className="text-primary size-5 sm:size-6" />
                <h2 className="text-foreground font-normal text-sm sm:text-base">
                    {title}
                </h2>
            </div>
            <p className="pt-3 pb-8 text-foreground text-lg sm:text-2xl font-normal leading-snug">
                {question}
            </p>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
            >
                <Input
                    {...inputProps}
                    value={value}
                    onChange={handleChange}
                />
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                    {!firstStep && (
                        <Button
                            className="w-full order-2 sm:order-1"
                            leftIcon={ArrowLeft}
                            variant="secondary"
                            onClick={onBack}
                        >
                            Voltar
                        </Button>
                    )}
                    <Button
                        className="w-full order-1 sm:order-2"
                        rightIcon={!lastStep ? ArrowRight : undefined}
                        variant="primary"
                        onClick={onNext}
                        disabled={!value}
                    >
                        {lastStep ? 'Gerar Simulação' : 'Continuar'}
                    </Button>
                </div>
            </form>
        </section>
    );
}
