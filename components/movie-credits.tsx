import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";
import Credit from "./credit";

async function getMovieCredits(id: string) {
    const res = await fetch(`${API_URL}/${id}/credits`);
    const json = await res.json();
    return json;
}

export default async function MovieCredits({id}: {id: string}) {
    const credits = await getMovieCredits(id);
    return (
        <div className={styles.container}>
            {credits?.slice(0, 5).map((credit) => {
                <Credit
                    character={credit.character}
                    original_name={credit.original_name}
                    profile_path={credit.profile_path}
                />
            })}
        </div>
    );
}