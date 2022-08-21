import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  return (
    <>
      <PrimaryButton children="1" />
      <SecondaryButton children="二番手" />
      <SearchInput />
      <UserCard />
    </>
  );
}
