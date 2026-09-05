import Sidebar from "./Sidebar";
import KpiCard from "./KpiCard";
import ChartCard from "./ChartCard";
//Creacion de dashboard
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F2EFE9]">
      {/* Barra lateral de navegación */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 px-10 py-8">
        <h1 className="mb-8 font-serif text-4xl text-[#2E2A24]">Dashboard</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Columna izquierda: KPIs + mapa */}
          <div className="flex flex-col gap-6">
            {/* Tarjetas de KPI */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <KpiCard
                label="KPI 1"
                value="1,250"
                delta="+12.5% vs. anterior"
                variant="terracotta"
                icon="trend"
              />
              <KpiCard
                label="KPI 2"
                value="8,340"
                delta="+8.2% vs. anterior"
                variant="sand"
                icon="users"
              />
              <KpiCard
                label="KPI 3"
                value="4,560"
                delta="+5.4% vs. anterior"
                variant="navy"
                icon="dollar"
              />
            </div>

            {/* Contenedor del mapa */}
            <div className="min-h-[480px] flex-1 rounded-2xl bg-[#E4E1D8] p-4">
              {/*
                AQUÍ VA EL MAPA
                Sugerencia: integrar un componente de mapa (ej. react-leaflet, Mapbox GL,
                Google Maps) que ocupe el 100% del ancho y alto de este contenedor.
                Ejemplo:
                <MapView center={[lat, lng]} zoom={13} className="h-full w-full rounded-xl" />
              */}
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-[#B9B4A6] text-sm text-[#8A8574]">
                Espacio reservado para el mapa
              </div>
            </div>
          </div>

          {/* Columna derecha: gráficas */}
          <div className="flex flex-col gap-6">
            <ChartCard title="Título" variant="terracotta">
              {/*
                AQUÍ VA LA GRÁFICA DE LÍNEAS
                Sugerencia: usar una librería de gráficas (ej. recharts, chart.js, visx)
                para renderizar una gráfica de líneas con 2 series, eje X con meses
                (Ene-Jul) y eje Y de 0 a 100.
                Ejemplo:
                <LineChart data={data} className="h-full w-full" />
              */}
            </ChartCard>

            <ChartCard title="Título" variant="sand">
              {/*
                AQUÍ VA LA GRÁFICA DE PASTEL (PIE CHART)
                Sugerencia: usar una librería de gráficas (ej. recharts, chart.js)
                para renderizar una gráfica de pastel con 3 segmentos.
                Ejemplo:
                <PieChart data={data} className="h-full w-full" />
              */}
            </ChartCard>

            <ChartCard title="Título" variant="navy">
              {/*
                AQUÍ VA LA GRÁFICA DE BARRAS
                Sugerencia: usar una librería de gráficas (ej. recharts, chart.js)
                para renderizar una gráfica de barras con 4 categorías,
                eje Y de 0 a 100.
                Ejemplo:
                <BarChart data={data} className="h-full w-full" />
              */}
            </ChartCard>
          </div>
        </div>
      </main>
    </div>
  );
}
