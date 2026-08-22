import { Button } from '@/components/shared/Button';
import { Input, type InputProps } from '@/components/shared/Input';
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

export interface StepProps {
    id: string;
    title: string;
    icon: LucideIcon;
    question: string;
    inputProps: InputProps;
}

interface FormStepProps {
    currentStep: number;
    maxSteps: number;
    onBack: () => void;
    onNext: () => void;
}

export function FormStep({
    currentStep,
    maxSteps,
    onBack,
    onNext,

    title,
    icon: Icon,
    question,
    inputProps,
}: FormStepProps & StepProps) {
    const firstStep = currentStep === 1;
    const lastStep = currentStep === maxSteps;

    const [inputValue, setInputValue] = useState<string>('');

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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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
                        disabled={!inputValue}
                    >
                        {lastStep ? 'Gerar Simulação' : 'Continuar'}
                    </Button>
                </div>
            </form>
        </section>
    );
}
