import NationalMapSection from "./NationalMapSection";

const communityTypes = [
  { kicker: "CRÍTICO · 35.9%", title: "Comunidades en crisis", description: "Vulnerabilidad social alta y salud comprometida al mismo tiempo. Necesitan una intervención integral: económica y sanitaria.", example: "11,270 comunidades. Concentradas en Mississippi, Alabama y Arkansas.", color: "#B91C1C" },
  { kicker: "SORPRENDENTE · 14.1%", title: "Sistema de salud ausente", description: "Contexto social manejable pero salud comprometida. El problema no es económico: el sistema de salud no llega.", example: "4,433 comunidades. Especialmente en zonas rurales pequeñas.", color: "#7C3AED" },
  { kicker: "PREVENTIVO · 14.2%", title: "Bajo presión económica", description: "Vulnerabilidad social alta, pero la salud aún no ha colapsado. Es el momento de prevenir antes de que se convierta en crisis.", example: "4,451 comunidades. Intervención temprana clave.", color: "#EA580C" },
  { kicker: "ESTABLE · 35.8%", title: "Comunidades estables", description: "Menor concentración de vulnerabilidades combinadas. Contextos sociales y de salud relativamente sanos.", example: "11,253 comunidades. La base saludable del país.", color: "#059669" },
];

export default function HomePage() {
  return (
    <main className="bg-[#F2EFE9] text-[#2E2A24]">
      <nav className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-[#D6D0C4]/80 bg-[#F2EFE9]/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="font-serif text-2xl">Parallax</a>
          <div className="flex items-center gap-5 text-sm font-medium text-[#5C5546] sm:gap-8">
            <a className="transition hover:text-[#B85C38]" href="#mapa">Mapa</a>
            <a className="transition hover:text-[#B85C38]" href="#metodologia">Metodología</a>
            <a className="transition hover:text-[#B85C38]" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="flex min-h-screen items-center pt-[60px]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[3fr_2fr] md:px-10">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-[#B85C38]">Parallax · Vulnerabilidad sociosanitaria</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] md:text-7xl">En Estados Unidos, tu código postal predice tu salud.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#555047]">Analizamos 31,742 comunidades cruzando datos sociales y de salud del CDC y el Census. Descubrimos que dos códigos postales a 19 kilómetros pueden vivir realidades opuestas.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#mapa" className="rounded-full bg-[#B85C38] px-7 py-3.5 font-semibold text-white transition hover:bg-[#9F482B]">Explorar el mapa</a>
              <a href="#metodologia" className="rounded-full border border-[#5C5546] px-7 py-3.5 font-semibold transition hover:bg-white">Ver metodología</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full rounded-[2rem] bg-[#33465C] p-8 text-white shadow-xl md:p-10">
              <p className="font-serif text-6xl tabular-nums">31,742</p><p className="mt-2 text-xl text-white/80">comunidades analizadas</p>
              <div className="my-8 h-px bg-white/20" />
              <p className="font-serif text-5xl tabular-nums">328M</p><p className="mt-2 text-lg text-white/80">personas cubiertas · 99.3% de EUA</p>
              <p className="mt-8 text-sm uppercase tracking-[0.16em] text-white/60">50 estados + DC · Datos 2017–2021</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-center font-serif text-5xl">El promedio esconde la verdad</h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-600">Los datos de salud existen a nivel condado y estado. Pero dos comunidades vecinas pueden vivir realidades radicalmente distintas. Un solo promedio las oculta.</p>
          <p className="mt-16 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#7C7A5C]">Caso ilustrativo · Cook County, Illinois</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <ComparisonCard color="#B85C38" zcta="60636" place="Comunidad al sur de Chicago" stats={[["Pobreza","45.4%"],["Diabetes","18.5%"],["Salud dental","44.2% visitó dentista"]]} />
            <ComparisonCard color="#33465C" zcta="60558" place="Western Springs" stats={[["Pobreza","3.0%"],["Diabetes","6.8%"],["Salud dental","81.5% visitó dentista"]]} />
          </div>
          <div className="mx-auto mt-8 max-w-3xl border-t border-dashed border-[#8D876F] pt-5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#5C5546]">19 kilómetros de distancia · Mismo condado · Mismo sistema hospitalario</div>
          <p className="mt-8 text-center font-serif text-2xl italic">“Cuando un gobierno mira el promedio del condado, no las ve.”</p>
        </div>
      </section>

      <NationalMapSection />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="max-w-4xl font-serif text-5xl">Cuatro realidades, cuatro tipos de intervención</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">No basta con saber dónde hay problemas. Necesitamos saber qué tipo de problema tiene cada comunidad para actuar. Clasificamos las 31,742 comunidades en cuatro grupos.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {communityTypes.map((item) => <article key={item.title} className="min-h-80 rounded-[2rem] p-8 text-white md:p-10" style={{ background: item.color }}><p className="text-sm font-bold tracking-[0.18em] text-white/75">{item.kicker}</p><h3 className="mt-5 font-serif text-4xl">{item.title}</h3><p className="mt-5 text-lg leading-relaxed text-white/90">{item.description}</p><p className="mt-8 border-t border-white/25 pt-5 text-sm font-semibold text-white/80">{item.example}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#E8DDC8] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-center font-serif text-5xl">Descubrimientos</h2><p className="mt-4 text-center text-lg text-[#5C5546]">Tres hallazgos que los datos nos enseñaron</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Finding number="r = 0.641" title="Salud dental, no diabetes">La brecha de salud más marcada por pobreza no es la diabetes. Es la pérdida dental: correlación de 0.641 frente a 0.526 con diabetes.</Finding>
            <Finding number="1,313" title="Comunidades invisibles">Códigos postales donde la salud es peor de lo que predice su contexto socioeconómico. El problema parece ser acceso al sistema, no ingreso.</Finding>
            <Finding number="1 de 5" title="Datos ruidosos">El 20% del mapa se comunica con menor confianza. Actuar sobre datos ruidosos puede mandar recursos al lugar equivocado.</Finding>
          </div>
        </div>
      </section>

      <section id="metodologia" className="scroll-mt-14 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-serif text-5xl">Cómo lo medimos</h2><p className="mt-4 text-lg text-gray-600">Metodología transparente. Datos abiertos. Decisiones defendibles.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Method number="01" title="Dos ejes, no uno">Separamos vulnerabilidad social —pobreza, educación y vivienda— de carga de salud —enfermedades crónicas y acceso—. Un solo número esconde qué intervención necesita cada comunidad.</Method>
            <Method number="02" title="Incertidumbre visible">1,000 simulaciones Monte Carlo propagan el margen de error de cada estimación. El resultado se comunica con confianza alta, media o baja; no como certeza binaria.</Method>
            <Method number="03" title="Demografía como contexto">No sumamos la composición demográfica al score. Medimos carencia estructural material; la historia demográfica aparece como contexto necesario, no como vulnerabilidad.</Method>
          </div>
          <p className="mt-12 text-center text-sm text-gray-500">Datos: CDC PLACES · ACS 2017–2021 · US Census Bureau · Metodología completa en el repositorio de GitHub.</p>
        </div>
      </section>

      <footer className="bg-[#5A6B3D] py-16 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-10"><div><p className="font-serif text-3xl">Parallax</p><p className="mt-3 text-white/70">Vulnerabilidad Sociosanitaria en EUA</p></div><div><p className="font-semibold">Datos</p><p className="mt-3 leading-7 text-white/70">CDC PLACES<br />ACS 2017–2021<br />US Census Bureau</p></div><div><p className="font-semibold">Proyecto</p><p className="mt-3 leading-7 text-white/70">DataRush 2026<br />DSC Tec de Monterrey<br /><a className="underline hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></p></div></div></footer>
    </main>
  );
}

function ComparisonCard({ color, zcta, place, stats }: { color: string; zcta: string; place: string; stats: string[][] }) { return <article className="rounded-[2rem] p-8 text-white md:p-10" style={{ background: color }}><p className="font-serif text-6xl tabular-nums">{zcta}</p><p className="mt-2 text-lg text-white/75">{place}</p><dl className="mt-10 grid grid-cols-3 gap-4">{stats.map(([label,value]) => <div key={label}><dt className="text-xs text-white/65">{label}</dt><dd className="mt-2 font-serif text-xl tabular-nums md:text-2xl">{value}</dd></div>)}</dl></article>; }
function Finding({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <article className="rounded-3xl bg-[#F9F6EF] p-8"><p className="font-serif text-5xl tabular-nums text-[#B85C38]">{number}</p><h3 className="mt-6 font-serif text-2xl">{title}</h3><p className="mt-4 leading-relaxed text-[#5C5546]">{children}</p></article>; }
function Method({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <article className="border-t-2 border-[#B85C38] pt-7"><p className="text-sm font-bold tracking-[0.18em] text-[#B85C38]">{number}</p><h3 className="mt-4 font-serif text-3xl">{title}</h3><p className="mt-4 leading-relaxed text-[#5C5546]">{children}</p></article>; }
