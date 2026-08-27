import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import type { SimulationStep } from '@/data/simulation';
import { formatStepValue, isStepValueValid } from '@/utils/simulation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ChangeEvent, SubmitEvent } from 'react';

interface FormStepProps {
    step: SimulationStep;
    value: string;
    onValueChange: (value: string) => void;
    onBack: () => void;
    onSubmit: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}

export function FormStep({ step, value, onValueChange, onBack, onSubmit, isFirstStep, isLastStep }: FormStepProps) {
    const inputId = `simulation-${step.field}`;
    const isValid = isStepValueValid(step, value);

    const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
        onValueChange(formatStepValue(step.format, currentTarget.value));
    };

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValid) onSubmit();
    };

    return (
        <section className="bg-card w-full p-4 border border-border rounded-lg shadow-md">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
                <step.icon className="text-primary size-5 sm:size-6" aria-hidden />
                <h2 className="text-foreground font-normal text-sm sm:text-base">{step.title}</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor={inputId} className="pt-3 pb-4 text-foreground text-lg sm:text-2xl font-normal leading-snug">
                    {step.question}
                </label>
                <Input
                    id={inputId}
                    value={value}
                    onChange={handleChange}
                    placeholder={step.placeholder}
                    prefix={step.format === 'currency' ? 'R$' : undefined}
                    suffix={step.format === 'integer' ? 'meses' : undefined}
                    inputMode={step.format === 'text' ? 'text' : 'numeric'}
                    maxLength={step.format === 'integer' ? 4 : 12}
                    aria-invalid={!isValid && value.length > 0}
                />
                <div className="w-full flex flex-col gap-4 sm:flex-row">
                    {!isFirstStep && (
                        <Button type="button" className="w-full order-2 sm:order-1" leftIcon={ArrowLeft} variant="secondary" onClick={onBack}>
                            Voltar
                        </Button>
                    )}
                    <Button type="submit" className="w-full order-1 sm:order-2" rightIcon={!isLastStep ? ArrowRight : undefined} variant="primary" disabled={!isValid}>
                        {isLastStep ? 'Gerar Simulação' : 'Continuar'}
                    </Button>
                </div>
            </form>
        </section>
    );
}
