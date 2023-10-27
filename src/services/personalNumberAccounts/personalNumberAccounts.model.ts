import {
  HomeownerAccountListResponse,
  HomeownerAccountResponse,
} from "@/api/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import {
  getHomeownerAccount,
  getPersonalNumbers,
} from "./personalNumberAccounts.api";
import { authService } from "../authService";
import { addPersonalAccountNumberService } from "../addPersonalAccountNumber/addPersonalAccountNumber.model";

const fetchPersonalNumbersFx = createEffect<
  void,
  HomeownerAccountListResponse[]
>(getPersonalNumbers);

const fetchHomeownerAccountFx = createEffect(getHomeownerAccount);

const handleSelectHomeownerAccount = createEvent<string>();

const $personalNumbers = createStore<HomeownerAccountListResponse[] | null>(
  null
).on(fetchPersonalNumbersFx.doneData, (_, data) => data);

const $isLoading = fetchPersonalNumbersFx.pending;

const $selectedHomeownerAccountId = createStore<string | null>(null)
  .on(handleSelectHomeownerAccount, (_, id) => id)
  .on($personalNumbers, (prev, homeownerAccounts) => {
    if (!homeownerAccounts?.length) return prev;

    const defaultAcc = homeownerAccounts.find((elem) => elem.isDefault);

    if (defaultAcc) {
      return defaultAcc.accountId;
    }

    return homeownerAccounts[0].accountId || prev;
  });

const $currentHomeownerAccount = createStore<HomeownerAccountResponse | null>(
  null
).on(fetchHomeownerAccountFx.doneData, (_, data) => data);

sample({
  clock: authService.outputs.$isAuth,
  filter: Boolean,
  target: fetchPersonalNumbersFx,
});

sample({
  clock: addPersonalAccountNumberService.inputs.handleSuccessLink,
  target: fetchPersonalNumbersFx,
});

sample({
  clock: $selectedHomeownerAccountId,
  filter: Boolean,
  target: fetchHomeownerAccountFx,
});

const $isLoadingHomeownerAccount = fetchHomeownerAccountFx.pending;

export const personalNumbersAcccountsService = {
  inputs: { handleSelectHomeownerAccount },
  outputs: {
    $personalNumbers,
    $isLoading,
    $selectedHomeownerAccountId,
    $currentHomeownerAccount,
    $isLoadingHomeownerAccount,
  },
};
