import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
  );
  const json = await result.json();
  return json;
}

export function useWeather() {
  return useQuery(["weather"], fetchData);
}
