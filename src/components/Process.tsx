import { Zap, Code2, FlaskConical, Rocket } from "lucide-react";

type Step = {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const steps: Step[] = [
  {
    num: "1",
    title: "Погружаюсь в задачу",
    description: "Изучаю идею, аудиторию и цель. Задаю правильные вопросы.",
    icon: <Zap className="h-7 w-7" />,
    color: "oklch(0.7 0.2 250)",
  },
  {
    num: "2",
    title: "Создаю с AI",
    description: "Использую AI и лучшие инструменты для быстрой разработки.",
    icon: <Code2 className="h-7 w-7" />,
    color: "oklch(0.7 0.28 350)",
  },
  {
    num: "3",
    title: "Тестирую и улучшаю",
    description: "Проверяю, собираю фидбек и довожу продукт до идеала.",
    icon: <FlaskConical className="h-7 w-7" />,
    color: "oklch(0.65 0.27 295)",
  },
  {
    num: "4",
    title: "Запускаю и масштабирую",
    description: "Запускаю проект и помогаю масштабировать то, что работает.",
    icon: <Rocket className="h-7 w-7" />,
    color: "oklch(0.75 0.22 50)",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--neon-pink)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "var(--neon-purple)", boxShadow: "0 0 16px var(--neon-purple)" }}
          />
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Как я работаю
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-8">
            {/* Gradient line */}
            <div
              className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.7 0.2 250), oklch(0.7 0.28 350), oklch(0.65 0.27 295), oklch(0.75 0.22 50))",
              }}
            />
            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="flex justify-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background text-sm font-bold"
                    style={{
                      borderColor: s.color,
                      color: s.color,
                      boxShadow: `0 0 20px ${s.color}`,
                    }}
                  >
                    {s.num}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((s) => (
              <StepCard key={s.num} step={s} />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-6 pl-14">
            <div
              className="absolute left-6 top-2 bottom-2 w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.7 0.2 250), oklch(0.7 0.28 350), oklch(0.65 0.27 295), oklch(0.75 0.22 50))",
              }}
            />
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div
                  className="absolute -left-14 top-2 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background text-sm font-bold"
                  style={{
                    borderColor: s.color,
                    color: s.color,
                    boxShadow: `0 0 20px ${s.color}`,
                  }}
                >
                  {s.num}
                </div>
                <StepCard step={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl"
      style={{
        boxShadow: "0 20px 60px -20px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.04)",
      }}
    >
      <div
        className="shrink-0"
        style={{
          color: step.color,
          filter: `drop-shadow(0 0 12px ${step.color})`,
        }}
      >
        {step.icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold tracking-tight">{step.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </div>
  );
}