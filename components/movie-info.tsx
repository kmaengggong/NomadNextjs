import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovieInfo(id:string) {
    const res = await fetch(`${API_URL}/${id}`);
    const json = await res.json();
    return json;
}

export default async function MovieInfo({id}: {id:string}) {
    const movie = await getMovieInfo(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}