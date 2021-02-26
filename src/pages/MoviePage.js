import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log(route_parameters);
  return <div>this is my MOVIE PAGE</div>;
}
