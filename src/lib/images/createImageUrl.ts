const createImageUrl = (
  path:string = '',
  size:number = 200,
) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`
}

export default createImageUrl
