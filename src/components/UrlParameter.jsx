import { useParams,useLocation } from "react-router-dom";
export const UrlParameter = () =>{
  let { id } = useParams();
  let {search} = useLocation();
  const query = new URLSearchParams(search);

  return(
    <div>
      <h1>UrlParameterのページです</h1>
      <p>id: {id}</p>
      <p>name: {query.get("name")}</p>
    </div>
  );
}