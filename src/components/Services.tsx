import { Rocket, Bot, Palette, Puzzle } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  benefitGradient: string;
  iconGlow: string;
};

const services: Service[] = [
  {
    icon: <Rocket className="h-9 w-9" />,
    title: "MVP за неделю",
    description:
      "Быстро собираю и запускаю MVP, чтобы вы проверили гипотезу и получили первых пользователей.",
    benefit: "Скорость × Качество",
    benefitGradient:
      "linear-gradient(90deg, oklch(0.7 0.22 250), oklch(0.7 0.28 350))",
    iconGlow: "var(--neon-purple)",
  },
  {
    icon: <Bot className="h-9 w-9" />,
    title: "AI-автоматизация",
    description:
      "Автоматизирую рутину и бизнес-процессы с помощью AI-агентов и интеграций.",
    benefit: "Экономия времени",
    benefitGradient:
      "linear-gradient(90deg, oklch(0.7 0.28 350), oklch(0.78 0.22 50))",
    iconGlow: "var(--neon-pink)",
  },
  {
    icon: <Palette className="h-9 w-9" />,
    title: "UI/UX с вайбкодингом",
    description:
      "Создаю современные интерфейсы, которые не только красивы, но и конвертируют.",
    benefit: "Дизайн × Конверсия",
    benefitGradient:
      "linear-gradient(90deg, oklch(0.65 0.27 295), oklch(0.7 0.28 350))",
    iconGlow: "var(--neon-purple)",
  },
  {
    icon: <Puzzle className="h-9 w-9" />,
    title: "Интеграции",
    description:
      "Подключаю платёжные системы, CRM, API и любые внешние сервисы.",
    benefit: "Гибкость × Масштабируемость",
    benefitGradient:
      "linear-gradient(90deg, oklch(0.65 0.27 295), oklch(0.78 0.22 50))",
    iconGlow: "var(--neon-orange)",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--neon-purple)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "var(--neon-purple)", boxShadow: "0 0 16px var(--neon-purple)" }}
          />
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Что я делаю
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20"
      style={{
        boxShadow:
          "0 20px 60px -20px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.04)",
      }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center text-foreground transition-transform group-hover:scale-110"
        style={{
          color: service.iconGlow,
          filter: `drop-shadow(0 0 14px ${service.iconGlow})`,
        }}
      >
        {service.icon}
      </div>

      <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <div className="mt-auto pt-2">
        <span
          className="inline-flex items-center rounded-full border border-white/10 bg-background/60 px-4 py-2 text-xs font-semibold"
          style={{
            backgroundImage: service.benefitGradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {service.benefit}
        </span>
      </div>
    </article>
  );
}