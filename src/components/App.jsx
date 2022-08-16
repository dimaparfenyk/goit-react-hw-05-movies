import {lazy, Suspense} from "react";
import { Routes, Route} from "react-router-dom";

import { Header } from "./Header/Header";

const Home = lazy(() => import('../pages/Home')); 
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import('../pages/MovieDetails' ));
const Reviews = lazy(() => import('../pages/Reviews'));
const Cast = lazy(() => import('../pages/Cast'));

export const App = () => ( 
  <>
    <Header />
    <Suspense>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Header to="/" />} />
    </Routes>

  </Suspense></>
  );





