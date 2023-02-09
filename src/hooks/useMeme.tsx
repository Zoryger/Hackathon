import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const URL = `https://api.imgflip.com/get_memes`;
  const result = await fetch(URL);
  const json = await result.json();
  return json;
}

export function useMeme() {
  return useQuery(["meme"], () => fetchData());
}
