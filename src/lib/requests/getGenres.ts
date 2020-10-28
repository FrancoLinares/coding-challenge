import * as dotenv from 'dotenv';
import axios from 'axios'
dotenv.config();

const getGenres = async (
  lenguage:string = 'en-US',
) => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=${lenguage}`
  const res = await axios.get(url);
  return res
}

export default getGenres
