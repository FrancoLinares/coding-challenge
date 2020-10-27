import * as dotenv from 'dotenv';
dotenv.config();

const createUrl = (
  query:string = '',
  pagination:number = 1,
  lenguage:string = 'en-US',
  include_adult:boolean = false
) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=${lenguage}&query=${query}&page=${pagination}&include_adult=${include_adult}`
}

export default createUrl
