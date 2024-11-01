import { IndividualDeviceForReadingResponse } from "@/api/types";
import { EGroupType } from "../InputReadingsPage.types";
import {
  ReadingValues,
  ReadingsValidationResult,
} from "../../inputReadingsService.types";
import { EffectFailDataAxiosError } from "@/types";

export type DeviceReadingInputProps = {
  device: IndividualDeviceForReadingResponse;
  groupType: EGroupType;
  createReadingPayload: ReadingValues | null;
  setReadingPayloadField: (values: ReadingValues) => void;
  validationResult: ReadingsValidationResult;
  numberOfFirstInputInBlockOfList: number;
  serverValidation: EffectFailDataAxiosError | null;
};
