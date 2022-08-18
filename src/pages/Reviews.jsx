import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/fetch';



export default function Reviews() {
   const [review, setReview] = useState([]);
    const { movieId } = useParams();
   
     useEffect(() => {
      getReviews(movieId).then(review => setReview(review.results))
     }, [movieId]);
    
    return (
        <div>
            {review.length ? (<ul>
               {review.map( ({id,author, content})  =>
                        <li key={id}>
                        <h3 style={{marginBottom:'10px'}}>Author:{author}</h3>
                        <p style={{marginBottom:'40px'}}>{content}</p>
                    </li>)} 
            </ul>):(<p>We don't have any review for this movie</p>)}
        </div>
    )
}

