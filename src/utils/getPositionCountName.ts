import type { positionsData } from "../docxEngine/dataSet/positionsData";

export const getPositionCountName = (id: keyof typeof positionsData) => {
  if (
    [
      "ITS_ECO_12",
      "ITS_ECO_12_CONT",
      "ITS_ECO_6",
      "ITS_ECO_6_CONT",
      "ITS_ECO_12_ACT",
      "ITS_PROF_12",
      "ITS_PROF_12_CONT",
      "ITS_PROF_6",
      "ITS_PROF_6_CONT",
      "ITS_PROF_12_ACT",
      "ITS_BUS_12",
      "ITS_BUS_12_CONT",
      "ITS_BUS_6",
      "ITS_BUS_6_CONT",
      "ITS_BUS_12_ACT",
      "ITS_PREM_12",
      "ITS_PREM_12_CONT",
      "ITS_PREM_6",
      "ITS_PREM_6_CONT",
      "ITS_PREM_12_ACT",
      "ITS_TECHNO",
    ].includes(id)
  ) {
    return "год(а)";
  }
  if (["OneC_Buh", "OneC_UT"].includes(id)) {
    return "шт";
  }
};
