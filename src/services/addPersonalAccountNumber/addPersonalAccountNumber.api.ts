import { HomeownerAccountResponse } from "@/api/types";
import { FindHomeownerAccountRequest } from "./addPersonalAccountNumber.types";
import { api } from "@/api";

export const findHomeownerAccount = (
  params: FindHomeownerAccountRequest
): Promise<HomeownerAccountResponse | null> =>
  api.get("HomeownerAccounts/Find", { params });

export const linkHomeownerAccount = (accId: string) =>
  api.post("HomeownerAccounts/Link", null, { params: { accId } });