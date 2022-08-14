import { Link } from "react-router-dom"


export default function MovieDetails({ movies }) {
    return (
        <ul>
            <li>
                <Link to={'../pages/Cast'}>Cast</Link></li>
            <li>
                <Link to={'../pages/Review'}>Review</Link></li>
       </ul>
    )
}