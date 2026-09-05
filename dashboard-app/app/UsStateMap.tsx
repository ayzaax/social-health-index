"use client";

import { useCallback, useMemo, useState } from "react";
import Map, { Layer, Popup, Source } from "react-map-gl";
import type { MapLayerMouseEvent } from "mapbox-gl";
import type { Expression } from "mapbox-gl";

const DOUBLE_BURDEN_BY_STATE: Record<string, number> = {
  Mississippi: 58.3, Alabama: 52.1, Louisiana: 51.4, Arkansas: 49.8,
  "West Virginia": 48.5, Kentucky: 47.2, Tennessee: 45.6, Oklahoma: 44.3,
  "New Mexico": 42.8, Alaska: 41.5, "South Carolina": 40.2, Georgia: 39.7,
  Arizona: 38.4, Texas: 37.1, "North Carolina": 36.8, Ohio: 35.2,
  Indiana: 34.6, Missouri: 34.1, Michigan: 33.5, Nevada: 33.1, Florida: 32.7,
  Illinois: 32.3, Pennsylvania: 31.9, "New York": 30.4, California: 28.7,
  Oregon: 27.5, Washington: 26.1, Colorado: 25.4, Wisconsin: 24.8,
  Minnesota: 22.6, Iowa: 22.1, Nebraska: 21.3, Kansas: 20.9, Utah: 19.7,
  Idaho: 19.2, Wyoming: 18.5, Maine: 17.9, Vermont: 16.4,
  "New Hampshire": 15.8, Massachusetts: 14.2, Connecticut: 13.7,
  "New Jersey": 13.1, Maryland: 15.5, Delaware: 22.3, "Rhode Island": 18.6,
  Virginia: 24.1, Hawaii: 21.8, "North Dakota": 19.4, "South Dakota": 25.7,
  Montana: 26.3, "District of Columbia": 28.9,
};

function getStateColor(value: number) {
  if (value >= 45) return "#8B2E1F";
  if (value >= 35) return "#C56B47";
  if (value >= 25) return "#D4B896";
  return "#A7C4A0";
}

export type MapMode = "crisis" | "social" | "health";

const MODE_LABEL: Record<MapMode, string> = {
  crisis: "en doble carga",
  social: "con vulnerabilidad social",
  health: "con carga de salud",
};

function valueForMode(value: number, mode: MapMode) {
  if (mode === "social") return Math.min(100, value + 12);
  if (mode === "health") return Math.min(100, value + 7);
  return value;
}

type HoverInfo = {
  longitude: number;
  latitude: number;
  stateName: string;
  value?: number;
};

export default function UsStateMap({ mode = "crisis" }: { mode?: MapMode }) {
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const values = useMemo(() => Object.fromEntries(Object.entries(DOUBLE_BURDEN_BY_STATE).map(([state, value]) => [state, valueForMode(value, mode)])), [mode]);
  const colorExpression = useMemo(() => {
    const expression: unknown[] = ["match", ["get", "name"]];
    Object.entries(values).forEach(([state, value]) => expression.push(state, getStateColor(value)));
    expression.push("#E5E5E5");
    return expression;
  }, [values]);

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const feature = event.features?.[0];
    if (!feature) {
      setHoverInfo(null);
      return;
    }

    const stateName = String(feature.properties?.name ?? "");
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      stateName,
      value: values[stateName],
    });
  }, [values]);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{ longitude: -98.5, latitude: 39.5, zoom: 3.3 }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      interactiveLayerIds={["states-fill"]}
      onMouseMove={onHover}
      onMouseLeave={() => setHoverInfo(null)}
      style={{ width: "100%", height: "100%" }}
    >
      <Source id="states" type="geojson" data="/us-states.geojson">
        <Layer
          id="states-fill"
          type="fill"
          paint={{ "fill-color": colorExpression as Expression, "fill-opacity": 0.8 }}
        />
        <Layer
          id="states-borders"
          type="line"
          paint={{ "line-color": "#5A6B3D", "line-width": 1 }}
        />
      </Source>

      {hoverInfo?.value !== undefined && (
        <Popup
          longitude={hoverInfo.longitude}
          latitude={hoverInfo.latitude}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
          offset={10}
        >
          <div className="px-3 py-2 font-serif">
            <div className="text-sm font-semibold text-gray-800">{hoverInfo.stateName}</div>
            <div className="mt-1 text-lg text-[#C56B47]">{hoverInfo.value}%</div>
            <div className="mt-0.5 text-[11px] text-gray-500">{MODE_LABEL[mode]}</div>
          </div>
        </Popup>
      )}
    </Map>
  );
}
