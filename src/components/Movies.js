import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1955-12-31",
                runtime: 100,
                mpaa_rating: "R",
                description: "Some long description",
            },
            {
                id: 2,
                title: "Scoffield",
                release_date: "1945-1-30",
                runtime: 126,
                mpaa_rating: "PG-13",
                description: "Some long description",
            },
        ];

        setMovies(movieList)
    }, []);

    return (
        <div>
            <h2> Movies </h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`} >
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies;