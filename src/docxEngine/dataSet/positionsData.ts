import { AddonsData } from "./AddonsData";
import { DeviceData } from "./DeviceData";
import { FreshData } from "./FreshData";
import { ITSData } from "./ITSData";
import { OneCData } from "./OneCData";
import { WorkData } from "./WorkData";

export const positionsData = {
  ...ITSData,
  ...OneCData,
  ...FreshData,
  ...WorkData,
  ...AddonsData,
  ...DeviceData,
};
