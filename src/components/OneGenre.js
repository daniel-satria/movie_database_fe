import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom"


const OneGenre = () => {
    const location = useLocation();
    const { genreName } = location.state;

    const [movies, setMovies] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`/movies/genres/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.message);
                } else {
                    setMovies(data);
                }
            })
            .catch(err => {console.log(err)})
    }, [id])

    return(
        <>
            <h2> Genre: {genreName}</h2>
            <hr />

            {movies ? (
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
                                    <Link to={`/movies/${m.id}`}>
                                        {m.title}
                                    </Link>
                                </td>
                                <td>{m.release_date}</td>
                                <td>{m.mpaa_rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Movies in this genre yet!</p>
            )}
        </>
    )

}

export default OneGenre;