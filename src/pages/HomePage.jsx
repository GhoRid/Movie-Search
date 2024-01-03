import { useQuery } from "react-query";
import { getMovieDatas } from "../apis/api/movie";

const HomaPage = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getMovieDatas",
    () => getMovieDatas("avengers")
  );
  console.log(data);

  if (isLoading) return <div>{error}</div>;

  return (
    <div>
      <h1></h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default HomaPage;
