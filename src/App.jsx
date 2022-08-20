import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export default function App() {
  return (
    <>
      <PrimaryButton children="1" />
      <SecondaryButton children="二番手" />
    </>
  );
}
