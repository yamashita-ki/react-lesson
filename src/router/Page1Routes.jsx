import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetaileA";
import { Page1DetailB } from "../components/Page1DetaileB";

export const Page1Routes = [
  {
    index: true,
    path: "",
    element: <Page1 />
  },
  {
    index: false,
    path: "detailA",
    element: <Page1DetailA />
  },
  {
    index: false,
    path: "detailB",
    element: <Page1DetailB />
  }
]