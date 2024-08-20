import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata: Metadata = {
    title: "Home"
};

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function Page() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
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

// nomad-movies.nomadcoders.workers.dev