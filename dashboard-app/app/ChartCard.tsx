import { ReactNode } from "react";

type Variant = "terracotta" | "sand" | "navy";

const VARIANT_STYLES: Record<Variant, { bg: string; text: string }> = {
  terracotta: { bg: "bg-[#B85C38]", text: "text-white" },
  sand: { bg: "bg-[#EFE3D0]", text: "text-[#3A342A]" },
  navy: { bg: "bg-[#33465C]", text: "text-white" },
};

interface ChartCardProps {
  title: string;
  variant: Variant;
  children?: ReactNode;
}

export default function ChartCard({ title, variant, children }: ChartCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`flex h-56 flex-col rounded-2xl p-5 ${styles.bg}`}>
      <h2 className={`mb-2 font-serif text-lg ${styles.text}`}>{title}</h2>

      {/* Área reservada para el contenido de la gráfica */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
