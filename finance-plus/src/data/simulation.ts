import type { SimulationField } from '@/context/simulation/SimulationContext';
import {
    BanknoteArrowDown,
    BanknoteArrowUp,
    Calendar,
    Landmark,
    PencilSparkles,
    Target,
    type LucideIcon,
} from 'lucide-react';

export type StepFormat = 'currency' | 'integer' | 'text';

export interface SimulationStep {
    field: SimulationField;
    title: string;
    icon: LucideIcon;
    question: string;
    format: StepFormat;
    placeholder: string;
}

export const simulationSteps: readonly SimulationStep[] = [
    {
        field: 'income',
        title: 'Renda Mensal',
        icon: BanknoteArrowDown,
        question:
            'Quanto é depositado em sua conta todo mês (somando todas as fontes de renda)?',
        format: 'currency',
        placeholder: '0,00',
    },
    {
        field: 'expenses',
        title: 'Custos Fixos de Vida',
        icon: BanknoteArrowUp,
        question:
            'Quanto você gasta mensalmente (aluguel, contas, alimentação, etc.)?',
        format: 'currency',
        placeholder: '0,00',
    },
    {
        field: 'debts',
        title: 'Dívidas/Parcelas',
        icon: Landmark,
        question:
            'Você tem atualmente algum valor comprometido com parcelas ou empréstimos?',
        format: 'currency',
        placeholder: '0,00',
    },
    {
        field: 'goalName',
        title: 'Descrição da Meta',
        icon: PencilSparkles,
        question: 'Qual objetivo você deseja alcançar?',
        format: 'text',
        placeholder: 'Ex.: Viagem para o Japão',
    },
    {
        field: 'goalAmount',
        title: 'Custo da Meta',
        icon: Target,
        question: 'Quanto custa para realizar esse objetivo?',
        format: 'currency',
        placeholder: '0,00',
    },
    {
        field: 'goalDeadline',
        title: 'Prazo Desejado',
        icon: Calendar,
        question: 'Em quantos meses você deseja atingir esse objetivo?',
        format: 'integer',
        placeholder: '0',
    },
];
