import { CheckCircle2, Clock, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Header } from "@/components/Header";
import { HoursCard } from "@/components/HoursCard";
import { LogoMark } from "@/components/Logo";
import { TileArch } from "@/components/TileArch";
import { PHONE_DISPLAY, PHONE_LINK, content, formatPrice, isLocale, type Locale } from "@/lib/content";
import { photos, srcSet, unsplash } from "@/lib/photos";

const ARCH_TOP = { borderRadius: "999px 999px 1.25rem 1.25rem" } as const;
const WHATSAPP_LINK = "https://wa.me/9647700000000";

function SectionHeading({ id, title, lead, invert = false }: { id: string; title: string; lead?: string; invert?: boolean }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
      <h2 id={id} className={`text-3xl font-semibold tracking-tight sm:text-4xl ${invert ? "text-porcelain" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`max-w-[46ch] text-lg ${invert ? "text-porcelain/75" : "text-ink-soft"}`}>{lead}</p>}
    </div>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: Locale = isLocale(raw) ? raw : "en";
  const t = content[lang];
  const num = new Intl.NumberFormat(lang === "ar" ? "ar-IQ" : "en-US");
  const clinicPhoto = (key: (typeof t.clinic.photos)[number]["key"]) => t.clinic.photos.find((p) => p.key === key)!;

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
        <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:px-8 lg:pt-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
              <ul className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-enamel pt-6">
                {t.hero.facts.map((fact) => (
                  <li key={fact.value}>
                    <p className="font-semibold text-ink">{fact.value}</p>
                    <p className="text-sm text-ink-soft">{fact.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <TileArch
              photo={{
                src: unsplash(photos.hero, 700, 1100),
                srcSet: srcSet(photos.hero, [400, 700, 1000], 1.57),
                alt: t.hero.photoAlt,
              }}
            >
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
                <li
                  key={item.id}
                  className="grid gap-x-10 gap-y-1 py-6 md:grid-cols-[15rem_1fr_12.5rem] md:items-baseline"
                >
                  <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                  <p className="text-ink-soft">
                    {item.detail}
                    <span className="ms-2 inline-flex items-center gap-1 whitespace-nowrap text-sm text-ink-soft/80">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </p>
                  <p className="mt-2 text-ink md:mt-0 md:text-end">
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

        {/* Inside the clinic */}
        <section aria-labelledby="clinic" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading id="clinic" title={t.clinic.title} lead={t.clinic.lead} />
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:grid-rows-[auto_auto]">
            <figure className="md:col-span-2">
              <img
                src={unsplash(photos.treatmentRoom, 1200, 750)}
                srcSet={srcSet(photos.treatmentRoom, [600, 900, 1200, 1600], 0.625)}
                sizes="(min-width: 768px) 66vw, 100vw"
                alt={clinicPhoto("treatmentRoom").alt}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
              />
              <figcaption className="mt-3 text-sm text-ink-soft">{clinicPhoto("treatmentRoom").caption}</figcaption>
            </figure>

            <figure className="md:row-span-2 md:flex md:flex-col">
              <img
                src={unsplash(photos.brightRoom, 600, 900)}
                srcSet={srcSet(photos.brightRoom, [400, 600, 900], 1.5)}
                sizes="(min-width: 768px) 33vw, 100vw"
                alt={clinicPhoto("brightRoom").alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover md:aspect-auto md:min-h-0 md:flex-1"
                style={ARCH_TOP}
              />
              <figcaption className="mt-3 text-sm text-ink-soft">{clinicPhoto("brightRoom").caption}</figcaption>
            </figure>

            <figure>
              <img
                src={unsplash(photos.xrayReview, 700, 525)}
                srcSet={srcSet(photos.xrayReview, [400, 700, 1000], 0.75)}
                sizes="(min-width: 768px) 33vw, 100vw"
                alt={clinicPhoto("xrayReview").alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              />
              <figcaption className="mt-3 text-sm text-ink-soft">{clinicPhoto("xrayReview").caption}</figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-8 rounded-[1.25rem] bg-cobalt-deep p-7 text-porcelain">
              <LogoMark className="h-10 w-auto text-porcelain" />
              <ul className="space-y-3">
                {t.clinic.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-glaze" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                <img
                  src={unsplash(photos.doctors[doc.photo], 600, 750)}
                  srcSet={srcSet(photos.doctors[doc.photo], [400, 600, 800], 1.25)}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  alt={doc.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full bg-enamel object-cover"
                  style={{ ...ARCH_TOP, objectPosition: "50% 25%" }}
                />
                <h3 className="mt-6 text-xl font-semibold text-ink">{doc.name}</h3>
                <p className="mt-1 font-medium text-cobalt">{doc.role}</p>
                <p className="mt-3 text-ink-soft">{doc.detail}</p>
                <p className="mt-3 text-sm text-ink-soft/80">{doc.since}</p>
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
            <div className="flex flex-col">
              <h2 id="book" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.book.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-ink-soft">{t.book.lead}</p>
              <a href={PHONE_LINK} className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-cobalt hover:underline">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
              <img
                src={unsplash(photos.quietRoom, 600, 700)}
                srcSet={srcSet(photos.quietRoom, [400, 600, 800], 1.17)}
                sizes="30vw"
                alt=""
                loading="lazy"
                decoding="async"
                className="mt-10 hidden aspect-[6/7] w-full max-w-sm object-cover lg:block"
                style={ARCH_TOP}
              />
            </div>
            <BookingForm t={t.book} treatments={t.treatments.items} />
          </div>
        </section>
      </main>

      <footer className="bg-ink text-porcelain/75">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-porcelain">
              <LogoMark className="h-8 w-auto" />
              <span className="text-xl font-semibold">{t.brand}</span>
            </div>
            <p className="mt-4 max-w-[32ch]">{t.footer.tagline}</p>
          </div>

          <div>
            <h2 className="font-semibold text-porcelain">{t.footer.visitTitle}</h2>
            <p className="mt-4 flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-glaze" aria-hidden="true" />
              {t.footer.address}
            </p>
            <dl className="mt-3 space-y-1 text-sm">
              {t.hero.hours.map((row) => (
                <div key={row.days} className="flex gap-2">
                  <dt>{row.days}:</dt>
                  <dd className="text-porcelain">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-semibold text-porcelain">{t.footer.contactTitle}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={PHONE_LINK} className="inline-flex items-center gap-2 hover:text-porcelain">
                  <Phone className="h-4 w-4 text-glaze" aria-hidden="true" />
                  <span dir="ltr">{t.footer.phone}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 hover:text-porcelain">
                  <MessageCircle className="h-4 w-4 text-glaze" aria-hidden="true" />
                  {t.footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-porcelain/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
            <p>{t.footer.concept}</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://github.com/MustafaCoder365" className="text-porcelain underline-offset-4 hover:underline">
                {t.footer.credit}
              </a>
              <a href="https://unsplash.com" className="underline-offset-4 hover:underline">
                {t.footer.photos}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
