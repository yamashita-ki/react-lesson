import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css"

const user = {
  image : "https://source.unsplash.com/Sg3XwuEpybU",
  name : "きよ",
  email : "12345@gmail.com",
  phone:"090-1111-1111",
  company : {
    name: "テスト株式会社"
  },
  website:"https://github.com/"
}

export default function App() {
  return (
    <>
      <PrimaryButton children="1" />
      <SecondaryButton children="二番手" />
      <SearchInput />
      <UserCard user={user} />
    </>
  );
}
