import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/fetch';
import { CastList, CastItem, CastText } from './Pages.styled';
import defaultActorImg from '../images/actor.png'


export default function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

      useEffect(() => {
      getCast(movieId).then(({cast}) => setCast(cast))
      }, [movieId]);
    
    return (
        <div>
            <CastList>
                {cast.map(({ profile_path, name, character, cast_id }) => (
                    <CastItem key={cast_id}>
                        <img
                            src={profile_path
                                ?`https:image.tmdb.org/t/p/w500/${profile_path}`
                                : defaultActorImg}
                            alt={name}
                            width={160}
                            height={225}
                            style={{
                                borderRadius: '8px',
                            marginBottom:'10px'}} />
                            <CastText
                            style={{ marginBottom: '10px' }}>
                            {name}</CastText>
                        <CastText>Character:{character}</CastText>
                    </CastItem>)
                )}
            </CastList>
            
        </div>
    )
}

