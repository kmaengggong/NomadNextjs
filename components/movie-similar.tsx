import { API_URL } from "../app/constants";
import Movie from "./movie";
import styles from "../styles/movie-similar.module.css"

async function getMovieSimilar(id: string) {
    const res = await fetch(`${API_URL}/${id}/similar`);
    const json = await res.json();
    return json;
}

export default async function MovieSimilar({id}: {id: string}) {
    const movies = await getMovieSimilar(id);
    return (
        <div className={styles.container}>
            {movies?.slice(0, 5).map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    id={movie.id}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
}