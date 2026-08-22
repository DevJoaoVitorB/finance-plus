import { Button } from '@/components/shared/Button';
import { Input, type InputProps } from '@/components/shared/Input';
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';

export interface StepProps {
    id: string;
    title: string;
    icon: LucideIcon;
    question: string;
    inputProps: InputProps;
}

interface FormStepProps extends Omit<StepProps, 'id'> {
    currentStep: number;
    maxSteps: number;
}

export function FormStep({
    title,
    icon: Icon,
    question,
    inputProps,
    currentStep,
    maxSteps,
}: FormStepProps) {
    const firstStep = currentStep === 1;
    const lastStep = currentStep === maxSteps;

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
            <form className="flex flex-col gap-4">
                <Input {...inputProps} />
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                    {!firstStep && (
                        <Button
                            className="w-full order-2 sm:order-1"
                            leftIcon={ArrowLeft}
                            variant="secondary"
                        >
                            Voltar
                        </Button>
                    )}
                    <Button
                        className="w-full order-1 sm:order-2"
                        rightIcon={!lastStep ? ArrowRight : undefined}
                        variant="primary"
                    >
                        {lastStep ? 'Gerar Simulação' : 'Continuar'}
                    </Button>
                </div>
            </form>
        </section>
    );
}
