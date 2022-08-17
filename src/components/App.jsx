import {lazy, Suspense} from "react";
import { Routes, Route} from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home')); 
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('../pages/Cast'));
const Cast = lazy(() => import('../pages/Reviews'));

export const App = () => ( 
  <>
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
    </Routes>

  </Suspense></>
  );





