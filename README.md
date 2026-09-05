# CodeHealth

**Vulnerabilidad sociosanitaria en Estados Unidos, a nivel código postal.**

En Estados Unidos, dos códigos postales a 19 kilómetros de distancia pueden vivir realidades opuestas de salud. En Cook County, Illinois, el ZCTA 60636 tiene 45% de pobreza y 18% de diabetes. El vecino 60558 tiene 3% y 6%. Mismo condado. Mismo sistema hospitalario. El promedio los esconde.

**CodeHealth es una herramienta pública que hace visible esa diferencia** — para gobiernos, ONGs, investigadores y comunidades — cruzando datos sociales del ACS con datos de salud del CDC a nivel granular.

🌐 **[Ver el sitio en vivo](https://social-health-index-red.vercel.app)** · 📊 **[Ver metodología](docs/index_methodology.md)** · 🎥 **[Ver video pitch](#)**

---

## El proyecto en números

| Métrica | Valor |
|---|---|
| Comunidades analizadas | **31,742 ZCTAs** |
| Población cubierta | **328M** (99.3% de EUA) |
| Jurisdicciones | 50 estados + DC |
| Fuentes cruzadas | 4 (CDC PLACES, ACS, Census Bureau) |
| Simulaciones Monte Carlo | 1,000 por comunidad |
| Confianza alta en clasificación | 59.6% |

---

## Lo que hace diferente al proyecto

### 1. Dos ejes, no uno
No condensamos vulnerabilidad en un solo número. Separamos **vulnerabilidad social** (SVS) y **carga de salud** (HBS) como dimensiones independientes. Cuatro cuadrantes emergen — cada uno requiere una intervención distinta.

### 2. Incertidumbre visible
Los datos vienen de encuestas por muestreo con margen de error. Propagamos esa incertidumbre con **1,000 simulaciones Monte Carlo** por comunidad. El 20% del mapa se muestra con transparencia porque no podemos clasificar con certeza. Un mapa honesto vale más que un ranking bonito.

### 3. Demografía como contexto, no como score
Análisis empírico mostró que incluir composición demográfica inflaba la vulnerabilidad de comunidades minoritarias sin carencia material. La sacamos del score. Se muestra como contexto para diseñar intervenciones apropiadas.

---

## Hallazgos clave

- **Salud dental > diabetes**: La brecha más marcada por pobreza en EUA no es la diabetes (r=0.526), es la pérdida dental (r=0.641).
- **1,313 comunidades invisibles**: ZCTAs donde la salud es peor de lo que su contexto socioeconómico predice. Problema de acceso, no de ingreso.
- **Correlación aislamiento-salud**: La falta de banda ancha predice carga metabólica más que la pobreza directa, sugiriendo desiertos médicos rurales.
- **Doble carga concentrada**: 35.9% de comunidades combinan vulnerabilidad social y salud comprometida — concentradas en Mississippi, Alabama, Louisiana, Arkansas.

---

## Los 4 tipos de comunidad

| Cuadrante | % ZCTAs | Descripción | Intervención sugerida |
|---|---:|---|---|
| 🔴 Comunidades en crisis | 35.9% | Vulnerabilidad social alta + salud comprometida | Integral: económica + sanitaria |
| 🟣 Sistema de salud ausente | 14.1% | Contexto OK pero salud precaria | Acceso a servicios preventivos |
| 🟠 Bajo presión económica | 14.2% | Vulnerabilidad social sin colapso de salud | Prevención temprana |
| 🟢 Comunidades estables | 35.8% | Menor concentración de vulnerabilidades | Mantenimiento |

---

## Metodología (resumen)

```
SVS = mean(percentile_rank de 8 indicadores SDOH)
HBS = mean(percentile_rank de 28 indicadores PLACES risk-oriented)
Cuadrantes = división por mediana nacional de SVS y HBS
Confianza = probabilidad del cuadrante modal en bootstrap N=1000
```

**Decisiones metodológicas defendidas empíricamente:**
- REMNRTY excluido del score (ver [análisis](docs/remnrty_analysis.md))
- HBS como promedio plano de 28 indicadores (ver [changelog](docs/changelog_audit.md))
- Bootstrap con distribución normal truncada
- Drivers presentados como "señales" (baja estabilidad individual, alta estabilidad por cluster)

Detalle completo en [`docs/index_methodology.md`](docs/index_methodology.md).

---

## Stack técnico

**Análisis** — Python 3.11, pandas, numpy, scipy, scikit-learn  
**Pipeline** — Un solo comando reproducible: `python src/run_pipeline.py`  
**Frontend** — Next.js 15, TypeScript, Tailwind, Mapbox GL JS  
**Deploy** — Vercel  
**Datos** — CDC PLACES, ACS 2017-2021, US Census Bureau

---

## Estructura del repositorio

```
├── data/
│   ├── raw/              # CSVs originales del CDC + Census
│   ├── staging/          # tablas intermedias limpias
│   ├── processed/        # zcta_master.parquet (tabla final)
│   └── frontend/         # JSON exports para el sitio
├── notebooks/            # 01_explore, 02_clean, 03_build_index
├── src/                  # pipeline reproducible
├── docs/                 # metodología, findings, audit, changelog
├── dashboard-app/        # Next.js frontend
└── assets/screenshots/   # gráficas de análisis
```

---

## Reproducibilidad

```bash
# Clonar
git clone https://github.com/ayzaax/social-health-index.git
cd social-health-index

# Ambiente Python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Colocar CSVs originales en data/raw/
# (Descargar de CDC PLACES y Census si no se incluyen)

# Pipeline completo (2-3 min)
python src/run_pipeline.py --bootstrap-sims 1000 --seed 42

# Frontend local
cd dashboard-app
npm install
npm run dev
# → http://localhost:3000
```

---

## Limitaciones honestas

- **No es causal**: identifica asociaciones observacionales, no relaciones causa-efecto.
- **ZCTAs pequeños**: comunidades <500 habitantes tienen MOEs altos por diseño; se clasifican con confianza baja explícita.
- **Territorios excluidos**: PLACES no cubre Puerto Rico, Guam, Samoa, USVI, Marianas del Norte.
- **ZCTAs no residenciales**: excluidos por PLACES por metodología BRFSS (~1,900 códigos postales federales/industriales).
- **Datos 2017-2021**: no reflejan cambios post-pandemia recientes.

---

## Equipo

Construido durante **DataRush 2026 — DSC Tec de Monterrey**.

- Sylvie Ayala (data + análisis)
- Compañera del equipo (frontend + diseño)

---

## Licencia

MIT · Datos originales bajo términos del CDC y US Census Bureau.

---
