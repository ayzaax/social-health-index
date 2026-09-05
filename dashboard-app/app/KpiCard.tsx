type Variant = "terracotta" | "sand" | "navy";
type Icon = "trend" | "users" | "dollar";

const VARIANT_STYLES: Record<Variant, { bg: string; text: string; sub: string; badge: string }> = {
  terracotta: {
    bg: "bg-[#B85C38]",
    text: "text-white",
    sub: "text-white/80",
    badge: "bg-[#9A4B2E] text-white",
  },
  sand: {
    bg: "bg-[#DCC9AE]",
    text: "text-[#3A342A]",
    sub: "text-[#5C5546]",
    badge: "bg-[#C9B291] text-[#3A342A]",
  },
  navy: {
    bg: "bg-[#33465C]",
    text: "text-white",
    sub: "text-white/80",
    badge: "bg-[#26374A] text-white",
  },
};

interface KpiCardProps {
  label: string;
  value: string;
  delta: string;
  variant: Variant;
  icon: Icon;
}

export default function KpiCard({ label, value, delta, variant, icon }: KpiCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`rounded-2xl p-5 ${styles.bg}`}>
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.badge}`}>
          <KpiIcon icon={icon} />
        </span>
        <span className={`text-sm ${styles.sub}`}>{label}</span>
      </div>

      <p className={`mt-3 font-serif text-3xl ${styles.text}`}>{value}</p>
      <p className={`mt-1 text-xs ${styles.sub}`}>{delta}</p>
    </div>
  );
}

function KpiIcon({ icon }: { icon: Icon }) {
  if (icon === "trend") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17 9 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "users") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20a7 7 0 0 1 14 0" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M15.5 20a5.5 5.5 0 0 1 7.5-5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20" strokeLinecap="round" />
      <path d="M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.5 2.2 3 5 3.5 5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5" strokeLinecap="round" />
    </svg>
  );
}
