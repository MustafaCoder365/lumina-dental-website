import { Phone, Plus } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Header } from "@/components/Header";
import { HoursCard } from "@/components/HoursCard";
import { LogoMark } from "@/components/Logo";
import { TileArch } from "@/components/TileArch";
import { PHONE_DISPLAY, PHONE_LINK, content, formatPrice, isLocale, type Locale } from "@/lib/content";

function SectionHeading({ id, title, lead }: { id: string; title: string; lead?: string }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end">
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="max-w-[46ch] text-lg text-ink-soft">{lead}</p>}
    </div>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: Locale = isLocale(raw) ? raw : "en";
  const t = content[lang];
  const num = new Intl.NumberFormat(lang === "ar" ? "ar-IQ" : "en-US");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cobalt focus:px-4 focus:py-2 focus:text-porcelain"
      >
        {lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <Header t={t} lang={lang} />

      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-8 lg:pt-20 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1
                id="hero-title"
                className="max-w-[16ch] text-balance text-[2.6rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.08]"
              >
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg text-ink-soft sm:text-xl">{t.hero.lead}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="rounded-full bg-cobalt px-7 py-3.5 text-base font-medium text-porcelain transition-colors hover:bg-cobalt-deep"
                >
                  {t.hero.primary}
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-enamel bg-white px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>{t.hero.secondary}</span>
                  <span dir="ltr" className="text-ink-soft">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </div>
            </div>

            <TileArch>
              <HoursCard t={t.hero} />
            </TileArch>
          </div>
        </section>

        {/* Treatments and prices */}
        <section aria-labelledby="treatments" className="border-t border-enamel bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading id="treatments" title={t.treatments.title} lead={t.treatments.lead} />
            <ul className="mt-14 divide-y divide-enamel border-y border-enamel">
              {t.treatments.items.map((item) => (
                <li key={item.id} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10">
                  <div className="grid gap-1 md:grid-cols-[minmax(14rem,0.9fr)_1.1fr] md:gap-8">
                    <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                    <p className="text-ink-soft">
                      {item.detail}
                      <span className="ms-2 text-sm text-ink-soft/80">({item.duration})</span>
                    </p>
                  </div>
                  <p className="text-ink sm:text-end">
                    <span className="text-sm text-ink-soft">{t.treatments.from} </span>
                    <span className="text-xl font-semibold tabular-nums">{formatPrice(item.priceFrom, lang)}</span>
                    <span className="text-sm text-ink-soft"> {t.treatments.currency}</span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">{t.treatments.note}</p>
          </div>
        </section>

        {/* Visit process: a real sequence, so it's numbered. */}
        <section aria-labelledby="visit" className="bg-cobalt-deep text-porcelain">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 id="visit" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.visit.title}
            </h2>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {t.visit.steps.map((step, i) => (
                <li key={step.title} className="border-t border-porcelain/20 pt-6">
                  <span className="text-4xl font-light text-glaze tabular-nums" aria-hidden="true">
                    {num.format(i + 1)}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-porcelain/75">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Doctors */}
        <section aria-labelledby="doctors" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading id="doctors" title={t.doctors.title} lead={t.doctors.lead} />
          <ul className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {t.doctors.items.map((doc) => (
              <li key={doc.name}>
                <div
                  className="flex h-28 w-24 items-end justify-center bg-cobalt pb-5 text-3xl font-semibold text-porcelain"
                  style={{ borderRadius: "999px 999px 4px 4px" }}
                  aria-hidden="true"
                >
                  {doc.initials}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{doc.name}</h3>
                <p className="mt-1 font-medium text-cobalt">{doc.role}</p>
                <p className="mt-3 text-ink-soft">{doc.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="border-t border-enamel bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <h2 id="faq" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.faq.title}
            </h2>
            <div className="divide-y divide-enamel border-y border-enamel">
              {t.faq.items.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium text-ink">
                    {item.q}
                    <Plus className="faq-icon h-5 w-5 shrink-0 text-cobalt transition-transform" aria-hidden="true" />
                  </summary>
                  <p className="max-w-[60ch] pb-6 text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section aria-labelledby="book" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 id="book" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.book.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-ink-soft">{t.book.lead}</p>
              <a
                href={PHONE_LINK}
                className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-cobalt hover:underline"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
            <BookingForm t={t.book} treatments={t.treatments.items} />
          </div>
        </section>
      </main>

      <footer className="bg-ink text-porcelain/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2.5 text-porcelain">
            <LogoMark className="h-8 w-auto" />
            <span className="text-xl font-semibold">{t.brand}</span>
          </div>
          <div className="space-y-1 text-sm">
            <p>{t.footer.address}</p>
            <p>
              <span dir="ltr">{t.footer.phone}</span>
            </p>
          </div>
          <div className="max-w-sm space-y-1 text-sm">
            <p>{t.footer.concept}</p>
            <p>
              <a href="https://github.com/MustafaCoder365" className="text-porcelain underline-offset-4 hover:underline">
                {t.footer.credit}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
