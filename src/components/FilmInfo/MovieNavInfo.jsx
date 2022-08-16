import  {MovieDetailsNavLink, NavBox}  from "./MovieInfo.styled";

export const MovieInfoNav = () => {
  return (
    <NavBox>
      <MovieDetailsNavLink to={`cast`}
        style={{ marginBottom: '15px' }}>
        Cast
      </MovieDetailsNavLink >
      <MovieDetailsNavLink  to={`reviews`}>
        Reviews
      </MovieDetailsNavLink >
    </NavBox>
    
  );
};