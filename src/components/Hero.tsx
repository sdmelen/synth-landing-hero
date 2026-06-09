import { ArrowRight, Briefcase, Code2, Target, Star, LayoutDashboard, BarChart3, Users, Wallet, MessageSquare, Settings, Sparkles, Maximize2, ChevronLeft } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--neon-purple)" }} />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl" style={{ background: "var(--neon-pink)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl" style={{ background: "var(--neon-orange)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* LEFT */}
          <div className="relative">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider backdrop-blur">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--neon-purple)", boxShadow: "0 0 12px var(--neon-purple)" }} />
              <span className="text-foreground/90">ВАЙБКОДИНГ</span>
              <span className="text-muted-foreground">×</span>
              <span className="text-foreground/90">AI</span>
              <span className="text-muted-foreground">×</span>
              <span className="text-foreground/90">ПРОДУКТЫ</span>
            </div>

            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Создаю AI-продукты
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                через вайбкодинг
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-orange)", boxShadow: "var(--glow-orange)" }}
              >
                Посмотреть проекты
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
                style={{ boxShadow: "var(--glow-purple)" }}
              >
                Связаться
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:grid-cols-4">
              <Stat icon={<Briefcase className="h-4 w-4" />} value="30+" label="Проектов" />
              <Stat icon={<Code2 className="h-4 w-4" />} value="12+" label="Довольных клиентов" />
              <Stat icon={<Target className="h-4 w-4" />} value="95%" label="Сданы в срок" />
              <Stat icon={<Star className="h-4 w-4" />} value="4.9/5" label="Средняя оценка" />
            </div>
          </div>

          {/* RIGHT — mock dashboard */}
          <div className="relative">
            <div
              className="relative rounded-2xl border border-white/10 bg-card/80 p-3 shadow-2xl backdrop-blur-xl sm:p-4"
              style={{ boxShadow: "0 30px 80px -20px oklch(0.62 0.27 295 / 0.35), 0 0 0 1px oklch(1 0 0 / 0.06)" }}
            >
              <div className="grid grid-cols-[140px_1fr] gap-3 sm:grid-cols-[160px_1fr]">
                {/* Sidebar */}
                <aside className="hidden flex-col gap-1 rounded-xl bg-background/60 p-3 sm:flex">
                  <div className="mb-3 flex items-center gap-2 px-2">
                    <div className="h-6 w-6 rounded-md" style={{ background: "var(--gradient-orange)" }} />
                    <span className="text-sm font-semibold">NeiroPanel</span>
                  </div>
                  <SideItem icon={<LayoutDashboard className="h-4 w-4" />} label="Главная" />
                  <SideItem icon={<BarChart3 className="h-4 w-4" />} label="Аналитика" active />
                  <SideItem icon={<Users className="h-4 w-4" />} label="Пользователи" />
                  <SideItem icon={<Wallet className="h-4 w-4" />} label="Финансы" />
                  <SideItem icon={<MessageSquare className="h-4 w-4" />} label="Сообщения" />
                  <SideItem icon={<Settings className="h-4 w-4" />} label="Настройки" />
                </aside>

                {/* Main */}
                <div className="col-span-2 space-y-3 sm:col-span-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">Аналитика</h3>
                    <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">Последние 30 дней</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Metric label="Пользователи" value="12,540" delta="+12.5%" />
                    <Metric label="Выручка" value="₽1.25M" delta="+18.2%" />
                    <Metric label="Конверсия" value="4.21%" delta="+8.7%" />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-background/50 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">Динамика</span>
                      <div className="flex gap-1 text-muted-foreground">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <Maximize2 className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <ChartSVG />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-background/50 p-3">
                      <div className="mb-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-foreground">Build</span>
                        <span>· Код</span>
                      </div>
                      <pre className="overflow-hidden font-mono text-[10px] leading-relaxed text-foreground/80">
{`// Генерация лендинга с AI
const product = await vibe_generate({
  type: "landing",
  theme: "neural",
  features: ["ai", "speed"]
})`}
                      </pre>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-background/50 p-3">
                      <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold">
                        <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--neon-pink)" }} />
                        AI-ассистент
                      </div>
                      <p className="text-[11px] leading-snug text-muted-foreground">
                        Готово! Дашборд создан. Хочешь добавить график по источникам трафика?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-muted-foreground">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold leading-none">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function SideItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${
        active ? "bg-white/10 text-foreground" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Metric({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-background/50 p-3">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-bold">{value}</div>
      <div className="text-[10px] font-medium" style={{ color: "oklch(0.78 0.18 150)" }}>↑ {delta}</div>
    </div>
  );
}

function ChartSVG() {
  return (
    <svg viewBox="0 0 320 110" className="h-28 w-full">
      <defs>
        <linearGradient id="chart-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.7 0.28 350)" />
          <stop offset="100%" stopColor="oklch(0.62 0.27 295)" />
        </linearGradient>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.28 350 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.62 0.27 295 / 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C40,70 60,40 90,45 C120,50 140,85 170,70 C200,55 220,25 260,30 C290,33 305,45 320,40 L320,110 L0,110 Z"
        fill="url(#chart-fill)"
      />
      <path
        d="M0,80 C40,70 60,40 90,45 C120,50 140,85 170,70 C200,55 220,25 260,30 C290,33 305,45 320,40"
        fill="none"
        stroke="url(#chart-stroke)"
        strokeWidth="2.5"
      />
      <circle cx="170" cy="70" r="4" fill="oklch(0.78 0.15 200)" />
      <g transform="translate(150,40)">
        <rect width="58" height="26" rx="6" fill="oklch(0.22 0.04 280)" stroke="oklch(1 0 0 / 0.1)" />
        <text x="29" y="11" textAnchor="middle" fontSize="7" fill="oklch(0.7 0.03 280)">17 мая</text>
        <text x="29" y="21" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">12,540</text>
      </g>
    </svg>
  );
}