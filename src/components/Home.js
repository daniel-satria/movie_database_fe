import { Link } from 'react-router-dom';
import Ticket from '/Users/nihilisme/Documents/learning/movies-front-end-react/movies-front-end-react/src/images/movie_tickets.jpg';

const Home = () => {

    return (
        <>
            <div className="text-center">
                <h2> Find a Movie! </h2>
                <hr />
                <Link to="/movies">
                    <img src={Ticket} alt="Movie ticket"></img>
                </Link>
            </div>
        </>
    )
}

export default Home;