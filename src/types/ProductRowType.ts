import type { positionsData } from "../docxEngine/dataSet/positionsData";

export type ProductRow = {
  id: keyof typeof positionsData;
  name: string;
  count: number;
  type: "PP" | "ITS" | "FRESH" | "WORK";
};
