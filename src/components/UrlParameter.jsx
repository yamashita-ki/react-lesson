import { useParams } from "react-router-dom";
export const UrlParameter = () =>{
  let { id } = useParams();
  return(
    <div>
      <h1>UrlParameterのページです</h1>
      <p>id: {id}</p>
    </div>
  );
}