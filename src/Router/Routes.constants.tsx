import { RouteObject } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AddPersonalAccountNumberContainer } from "@/services/addPersonalAccountNumber";
import { InputReadingsContainer } from "@/services/inputReadings";
import { MainPageContainer } from "@/services/mainPage";
import { LimbContainer } from "@/services/limb/limb.container";
import { SuccessfulReadingsPage } from "@/services/inputReadings/SuccessfulReadingsPage";
import { NoDeviceHelpPage } from "@/services/inputReadings/NoDeviceHelpPage";

export const getRoutes = (): RouteObject[] => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPageContainer />,
      },
      {
        path: "/inputReadings",
        children: [
          {
            path: "/inputReadings",
            element: <InputReadingsContainer />,
          },
          {
            path: "/inputReadings/successfulReadings",
            element: <SuccessfulReadingsPage />,
          },
          {
            path: "/inputReadings/noDeviceHelp",
            element: <NoDeviceHelpPage />,
          },
          {
            path: "/inputReadings/confirmExit",
            element: <>Вы хотите уйти</>,
          },
        ],
      },
      {
        path: "/addPersonalAccountNumber",
        element: <AddPersonalAccountNumberContainer />,
      },
      {
        path: "/limb",
        element: <LimbContainer />,
      },
    ],
  },
];
