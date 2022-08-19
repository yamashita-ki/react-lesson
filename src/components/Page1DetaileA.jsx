import { useLocation,useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const onClickBack = () => navigate("/page1")
  return(
    <div>
      <h1>Page1DetailAのページです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};