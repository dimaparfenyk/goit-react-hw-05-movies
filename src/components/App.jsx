import {lazy} from "react";
import { Routes, Route} from "react-router-dom";

import { Header } from "./Header/Header"; 
const  Home = lazy(() => import  ("pages/Home")); 

export const App=()=> (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </>
  );





