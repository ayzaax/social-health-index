"use client";

import { useState } from "react";
import UsStateMap, { type MapMode } from "./UsStateMap";

const modes: Record<MapMode, { label: string; subtitle: string; highValue: string; lowValue: string; average: string }> = {
  crisis: { label: "Comunidades en crisis", subtitle: "Porcentaje de comunidades donde vulnerabilidad social y salud comprometida ocurren juntas", highValue: "58.3%", lowValue: "13.1%", average: "33.3%" },
  social: { label: "Vulnerabilidad social", subtitle: "Porcentaje de comunidades con contexto social vulnerable", highValue: "70.3%", lowValue: "25.1%", average: "45.3%" },
  health: { label: "Carga de salud", subtitle: "Porcentaje de comunidades con salud comprometida", highValue: "65.3%", lowValue: "20.1%", average: "40.3%" },
};

export default function NationalMapSection() {
  const [mode, setMode] = useState<MapMode>("crisis");
  const active = modes[mode];
  return <section id="mapa" className="scroll-mt-14 bg-[#F2EFE9] py-24 md:py-32"><div className="mx-auto max-w-7xl px-6 md:px-10">
    <h2 className="font-serif text-5xl">El patrón nacional</h2><p className="mt-5 max-w-3xl text-lg text-gray-600">{active.subtitle}</p>
    <div className="mt-8 inline-flex flex-wrap gap-2 rounded-2xl bg-[#E4D9C5] p-2" role="group" aria-label="Variable del mapa">{(Object.keys(modes) as MapMode[]).map((key) => <button key={key} onClick={() => setMode(key)} className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${mode === key ? "bg-[#B85C38] text-white shadow" : "text-[#5C5546] hover:bg-white/60"}`}>{modes[key].label}</button>)}</div>
    <div className="mt-8 grid gap-8 lg:grid-cols-12"><div className="h-[600px] overflow-hidden rounded-2xl border border-[#D6D0C4] bg-white shadow-sm lg:col-span-9"><UsStateMap mode={mode} /></div><aside className="space-y-5 lg:col-span-3"><MapExtreme label="Mayor concentración" state="Mississippi" value={active.highValue} dark /><div className="rounded-2xl border border-[#D6D0C4] bg-white p-6"><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Escala</p><Legend color="#8B2E1F" label="45% o más" /><Legend color="#C56B47" label="35–45%" /><Legend color="#D4B896" label="25–35%" /><Legend color="#A7C4A0" label="Menos de 25%" /></div><MapExtreme label="Menor concentración" state="New Jersey" value={active.lowValue} /></aside></div>
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#D6D0C4] bg-white md:grid-cols-3"><MiniStat label="Estados con mayor crisis" value="Mississippi · Alabama · Louisiana" /><MiniStat label="Concentración promedio nacional" value={active.average} /><MiniStat label="Rango nacional" value={`${active.lowValue} a ${active.highValue}`} /></div>
  </div></section>;
}

function Legend({ color, label }: { color: string; label: string }) { return <div className="mb-3 flex items-center gap-3"><span className="h-5 w-5 rounded" style={{ background: color }} /><span className="text-sm">{label}</span></div>; }
function MapExtreme({ label, state, value, dark = false }: { label: string; state: string; value: string; dark?: boolean }) { return <div className={`rounded-2xl p-6 ${dark ? "bg-[#8B2E1F] text-white" : "bg-[#E8DDC8]"}`}><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-65">{label}</p><p className="mt-3 font-serif text-2xl">{state}</p><p className="mt-1 font-serif text-4xl tabular-nums">{value}</p><p className="mt-2 text-xs opacity-65">de sus ZCTAs</p></div>; }
function MiniStat({ label, value }: { label: string; value: string }) { return <div className="border-b border-[#D6D0C4] p-6 last:border-0 md:border-b-0 md:border-r"><p className="text-xs uppercase tracking-[0.12em] text-gray-500">{label}</p><p className="mt-2 font-serif text-xl">{value}</p></div>; }
