import { Page2 } from "../components/Page2";
import { UrlParameter } from "../components/UrlParameter";

export const Page2Routes = [
  {
    index: true,
    path: "",
    element: <Page2 />
  },
  {
    index: false,
    path: ":id",
    element: <UrlParameter />
  },
]