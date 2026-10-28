"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import type { Content } from "@/lib/content";

// Open Saturday–Thursday, 10:00–21:00, Baghdad time. Closed Friday.
function isOpenNow(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Baghdad",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  if (weekday === "Fri") return false;
  return hour >= 10 && hour < 21;
}

export function HoursCard({ t }: { t: Content["hero"] }) {
  // Unknown until the browser runs, so the static HTML shows hours only.
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="card-in w-full">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-ink-soft">{t.hoursTitle}</h2>
        {open !== null && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              open ? "bg-glaze-soft text-[#136f6d]" : "bg-enamel text-ink-soft"
            }`}
            role="status"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${open ? "bg-glaze" : "bg-ink-soft"}`}
              aria-hidden="true"
            />
            {open ? t.openNow : t.closedNow}
          </span>
        )}
      </div>
      <dl className="space-y-3">
        {t.hours.map((row) => (
          <div key={row.days} className="flex flex-col">
            <dt className="text-sm text-ink-soft">{row.days}</dt>
            <dd className="text-lg font-semibold text-ink">{row.time}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 flex items-start gap-2 border-t border-enamel pt-4 text-sm text-ink-soft">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
        {t.address}
      </p>
    </div>
  );
}
