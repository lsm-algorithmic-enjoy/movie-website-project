import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detailloading, setDetailLoading] = useState(true);
  const [moviedetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetails(json.data.movie);
    setDetailLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {detailloading ? (
        <h1>Detail Loading...</h1>
      ) : (
        <div>
          <img src={moviedetails.background_image} />
          <h1>개봉년도: {moviedetails.year}</h1>
          <a href={moviedetails.url}>More Information</a>
        </div>
      )}
    </div>
  );
}

export default Detail;
