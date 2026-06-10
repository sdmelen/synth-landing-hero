import { ArrowUpRight, GraduationCap, BarChart3, Rocket } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Адаптивные программы и интерактивные задания под каждого ученика.",
    tags: ["React", "OpenAI", "Supabase", "TailwindCSS"],
    icon: <GraduationCap className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, oklch(0.65 0.27 295), oklch(0.7 0.28 350))",
    accent: "var(--neon-purple)",
  },
  {
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Загружает таблицы, строит дашборды и формулирует инсайты на естественном языке.",
    tags: ["Next.js", "Python", "LangChain", "PostgreSQL"],
    icon: <BarChart3 className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, oklch(0.7 0.28 350), oklch(0.78 0.22 50))",
    accent: "var(--neon-pink)",
  },
  {
    title: "LaunchPro",
    description:
      "Лендинг для запуска продукта. Чистая структура, быстрая загрузка, конверсионные блоки и интеграция с CRM.",
    tags: ["Astro", "TailwindCSS", "Framer Motion", "Vercel"],
    icon: <Rocket className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, oklch(0.78 0.22 50), oklch(0.72 0.25 25))",
    accent: "var(--neon-orange)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-background py-20 lg:py-28 scroll-mt-16">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--neon-purple)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--neon-orange)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider backdrop-blur">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--neon-orange)", boxShadow: "0 0 12px var(--neon-orange)" }}
              />
              <span className="text-foreground/90">ИЗБРАННЫЕ ПРОЕКТЫ</span>
            </div>
            <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Что я{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                собрал недавно
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            Реальные продукты, созданные через вайбкодинг — от идеи до запуска за дни, а не месяцы.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20"
      style={{
        boxShadow:
          "0 20px 60px -20px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.04)",
      }}
    >
      {/* Preview */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(1 0 0 / 0.25), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0 0 0 / 0.35), transparent 50%)",
        }} />
        {/* Mock browser chrome */}
        <div className="absolute left-4 top-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        </div>
        {/* Icon center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-background/30 text-white backdrop-blur-md transition-transform group-hover:scale-110"
            style={{ boxShadow: `0 0 30px ${project.accent}` }}
          >
            {project.icon}
          </div>
        </div>
        {/* Faux UI lines */}
        <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
          <div className="h-1.5 w-2/3 rounded-full bg-white/30" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all group-hover:border-white/30 group-hover:text-foreground"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}