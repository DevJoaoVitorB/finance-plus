import type { StepProps } from '@/components/features/Simulation/FormStep';
import {
    BanknoteArrowDown,
    BanknoteArrowUp,
    Calendar,
    Landmark,
    PencilSparkles,
    Target,
} from 'lucide-react';

export const simulationFormSteps: StepProps[] = [
    {
        id: 'income',
        title: 'Renda Mensal',
        icon: BanknoteArrowDown,
        question:
            'Quanto é depositado em sua conta todo mês (somando todas as fontes de renda)?',
        inputProps: { prefix: 'R$', placeholder: '0,00', maxLength: 12 },
    },
    {
        id: 'expenses',
        title: 'Custos Fixos de Vida',
        icon: BanknoteArrowUp,
        question:
            'Quanto você gasta mensalmente (aluguel, contas, alimentação, etc.)?',
        inputProps: { prefix: 'R$', placeholder: '0,00', maxLength: 12 },
    },
    {
        id: 'debts',
        title: 'Dívidas/Parcelas',
        icon: Landmark,
        question:
            'Você tem atualmente algum valor comprometido com parcelas ou empréstimos?',
        inputProps: { prefix: 'R$', placeholder: '0,00', maxLength: 12 },
    },
    {
        id: 'goalDescription',
        title: 'Descrição da Meta',
        icon: PencilSparkles,
        question: 'Qual objetivo você deseja alcançar?',
        inputProps: { placeholder: 'Ex.: Viagem para o Japão' },
    },
    {
        id: 'goalAmount',
        title: 'Custo da Meta',
        icon: Target,
        question: 'Quanto custa para realizar esse objetivo?',
        inputProps: { prefix: 'R$', placeholder: '0,00', maxLength: 12 },
    },
    {
        id: 'goalDeadline',
        title: 'Prazo Desejado',
        icon: Calendar,
        question: 'Em quantos meses você deseja atingir esse objetivo?',
        inputProps: {
            suffix: 'meses',
            placeholder: '0',
            maxLength: 4,
        },
    },
];
