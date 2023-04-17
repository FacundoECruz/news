import "./Show.css"
import { useParams } from "react-router-dom";

function Show({data}) {

  const {publishedAt} = useParams()

  const findNewsToShow = (publishedAt, data) => {
    const findedNew = data
  }

  console.log(publishedAt)

  return ( 
    <h1>NEWS SHOWW!!!!!!</h1>
   );
}

export default Show;
