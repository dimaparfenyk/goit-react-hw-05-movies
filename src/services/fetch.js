import axios from "axios";

const URL = 'https://api.themoviedb.org/3/'; 
const KEY = '7ab62af97d9519a1533e4099d15ee467';
  

export  async function getPopularMovies() {
 return await axios.get(
   `${URL}/trending/movie/day?api_key=${KEY}`)
   .then(res => res.data);
};