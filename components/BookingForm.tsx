"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Content } from "@/lib/content";

type Errors = Partial<Record<"name" | "phone" | "treatment", string>>;

// Iraqi mobile: 07XXXXXXXXX, optionally written as +9647XXXXXXXXX.
function normalizePhone(raw: string) {
  const digits = raw.replace(/[\s-]/g, "");
  if (/^\+9647\d{9}$/.test(digits)) return "0" + digits.slice(4);
  return digits;
}

const field =
  "w-full rounded-xl border border-enamel bg-white px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors focus:border-cobalt focus:outline-none aria-[invalid=true]:border-[#b42318]";

export function BookingForm({ t, treatments }: { t: Content["book"]; treatments: Content["treatments"]["items"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = t.errors.name;
    if (!/^07\d{9}$/.test(normalizePhone(String(data.get("phone") ?? "")))) next.phone = t.errors.phone;
    if (!data.get("treatment")) next.treatment = t.errors.treatment;
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setDone(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (done) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl border border-enamel bg-white p-8 focus:outline-none sm:p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-glaze" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold text-ink">{t.doneTitle}</h3>
        <p className="mt-3 max-w-prose text-ink-soft">{t.doneBody}</p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setErrors({});
          }}
          className="mt-8 rounded-full border border-cobalt px-5 py-2.5 font-medium text-cobalt transition-colors hover:bg-cobalt hover:text-porcelain"
        >
          {t.again}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-enamel bg-white p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-[#b42318]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder={t.phoneHint}
            className={`${field} text-start`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-[#b42318]">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="treatment" className="mb-2 block text-sm font-medium text-ink">
            {t.treatment}
          </label>
          <select
            id="treatment"
            name="treatment"
            defaultValue=""
            className={field}
            aria-invalid={!!errors.treatment}
            aria-describedby={errors.treatment ? "treatment-error" : undefined}
          >
            <option value="" disabled>
              {t.treatmentPlaceholder}
            </option>
            {treatments.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.treatment && (
            <p id="treatment-error" className="mt-2 text-sm text-[#b42318]">
              {errors.treatment}
            </p>
          )}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 text-sm font-medium text-ink">{t.time}</legend>
          <div className="flex gap-3">
            {[
              { value: "morning", label: t.morning },
              { value: "evening", label: t.evening },
            ].map((opt, i) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-enamel px-4 py-2 text-ink has-[:checked]:border-cobalt has-[:checked]:bg-cobalt/5 has-[:checked]:text-cobalt"
              >
                <input
                  type="radio"
                  name="time"
                  value={opt.value}
                  defaultChecked={i === 0}
                  className="accent-cobalt"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="note" className="mb-2 block text-sm font-medium text-ink">
            {t.note}
          </label>
          <textarea id="note" name="note" rows={3} className={`${field} resize-y`} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-cobalt px-6 py-3.5 text-base font-medium text-porcelain transition-colors hover:bg-cobalt-deep sm:w-auto"
      >
        {t.submit}
      </button>
    </form>
  );
}
