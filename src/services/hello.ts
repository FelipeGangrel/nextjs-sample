import type { Data } from "pages/api/hello";

export const fetchHello = async (url: string): Promise<Data> => {
  const res = await fetch(url);
  const data = await res.json();
  return data as Data;
};
