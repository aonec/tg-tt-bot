import { IndividualDeviceForReadingResponse } from "@/api/types";
import {
  CreateReadingsRequestPayload,
  SetReadingPayload,
} from "../inputReadingsService.types";

export type InputReadingsPageProps = {
  individualDevicesList: IndividualDeviceForReadingResponse[] | null;
  isLoadingDevices: boolean;
  createReadingsPayload: CreateReadingsRequestPayload;
  setReadingPayloadField: (payload: SetReadingPayload) => void;
  isCreateReadingsLoading: boolean;
  handleSubmitReadings: () => void;
};

export enum EGroupType {
  ByResource = "byResource",
  ByMountPlace = "byMountPlace",
}