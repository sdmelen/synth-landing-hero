import { Send, Mail, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 lg:py-28 scroll-mt-16">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--neon-purple)" }}
        />
        <div
          className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--neon-orange)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl sm:p-12 lg:p-16"
          style={{
            boxShadow:
              "0 30px 80px -20px oklch(0.62 0.27 295 / 0.35), 0 0 0 1px oklch(1 0 0 / 0.06)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-text)" }}
          />

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider backdrop-blur">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "var(--neon-orange)",
                  boxShadow: "0 0 12px var(--neon-orange)",
                }}
              />
              <span className="text-foreground/90">ДАВАЙТЕ ПОГОВОРИМ</span>
            </div>

            <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Готовы начать{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                проект?
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Напишите мне, и мы обсудим вашу задачу.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="https://t.me/test_bezz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{
                  background: "var(--gradient-orange)",
                  boxShadow: "var(--glow-orange)",
                }}
              >
                <Send className="h-4 w-4" />
                Написать в Telegram
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:testbezz_gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
                style={{ boxShadow: "var(--glow-purple)" }}
              >
                <Mail className="h-4 w-4" />
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}