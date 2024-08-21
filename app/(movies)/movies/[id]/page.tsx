import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";
import MovieCredits from "../../../../components/movie-credits";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
    const movie = await getMovieInfo(id);
    return {
        title: movie.title
    };
}

export default async function MovieDetailPage({params: {id}}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie credits</h1>}>
                <MovieCredits id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie similar</h1>}>
                <MovieSimilar id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>    
    );
}