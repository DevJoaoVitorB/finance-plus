import { SimulationForm } from "@/components/features/Simulation/Form"

export function SimulationFormPage() {
    return (
        <section className="flex flex-col items-center mt-10">
            {/* Title + Subtitle */}
            <div className="text-center mb-8">
                <h1 className="text-foreground font-semibold text-2xl sm:text-3xl">Vamos Planejar o Seu Futuro</h1>
                <p className="text-muted-foreground font-normal text-xs sm:text-base">Responda algumas perguntas para obter insights financeiros personalizados</p>
            </div>

            {/* Form */}
            <SimulationForm />
        </section>
    )
}